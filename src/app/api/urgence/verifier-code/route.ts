import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'
import crypto from 'crypto'

function getTwilioClient() {
  return twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
}

function verifyToken(token: string, userCode: string): { valid: boolean; phone: string } {
  try {
    const secret = process.env.VERIFICATION_SECRET || 'fallback-secret'
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString())
    const { code, phone, expiry, hmac } = decoded

    // Vérifier l'expiration
    if (Date.now() > expiry) {
      return { valid: false, phone: '' }
    }

    // Vérifier l'intégrité du token
    const data = `${code}:${phone}:${expiry}`
    const expectedHmac = crypto.createHmac('sha256', secret).update(data).digest('hex')
    if (hmac !== expectedHmac) {
      return { valid: false, phone: '' }
    }

    // Vérifier le code
    if (code !== userCode) {
      return { valid: false, phone: '' }
    }

    return { valid: true, phone }
  } catch {
    return { valid: false, phone: '' }
  }
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function POST(request: NextRequest) {
  try {
    const { token, code, nom, adresse, telephone, description } = await request.json()

    if (!token || !code) {
      return NextResponse.json(
        { error: 'Code de vérification requis.' },
        { status: 400 }
      )
    }

    const result = verifyToken(token, code)

    if (!result.valid) {
      return NextResponse.json(
        { error: 'Code invalide ou expiré. Veuillez réessayer.' },
        { status: 400 }
      )
    }

    // Code vérifié — envoyer l'alerte SMS + appel vocal aux numéros d'urgence
    const twilioClient = getTwilioClient()
    const urgencePhones = (process.env.URGENCE_PHONE_NUMBERS || '').split(',').map(n => n.trim()).filter(Boolean)

    const alertMessage =
      `🚨 APPEL D'URGENCE REVOLT ÉLECTRIQUE 🚨\n\n` +
      `Client: ${nom}\n` +
      `Adresse: ${adresse}\n` +
      `Téléphone: ${telephone}\n` +
      `Description: ${description}`

    const safeNom = escapeXml(nom)
    const safeAdresse = escapeXml(adresse)

    const message = `Alerte urgence Revolt Electrique. Un appel d urgence a ete recu de ${safeNom}. Adresse des travaux ${safeAdresse}. Telephone du client ${escapeXml(telephone)}. Verifiez vos S M S pour les details complets.`

    const twiml = `<Response><Say language="fr-CA">${message}</Say><Pause length="3"/><Say language="fr-CA">Repetition du message.</Say><Pause length="1"/><Say language="fr-CA">${message}</Say></Response>`

    // Envoyer SMS + appel à chaque numéro
    await Promise.all(
      urgencePhones.flatMap(phone => [
        twilioClient.messages.create({
          body: alertMessage,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone,
        }),
        twilioClient.calls.create({
          twiml,
          from: process.env.TWILIO_PHONE_NUMBER!,
          to: phone,
        }),
      ])
    )

    return NextResponse.json({
      success: true,
      message: 'Demande d\'urgence envoyée. Notre équipe vous contactera sous peu.'
    })
  } catch (error) {
    console.error('Erreur vérification:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la vérification. Veuillez nous appeler directement au 418-587-5403.' },
      { status: 500 }
    )
  }
}
