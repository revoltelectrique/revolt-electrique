import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'
import crypto from 'crypto'

function getTwilioClient() {
  return twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
}

function generateToken(code: string, phone: string): string {
  const secret = process.env.VERIFICATION_SECRET || 'fallback-secret'
  const expiry = Date.now() + 5 * 60 * 1000 // 5 minutes
  const data = `${code}:${phone}:${expiry}`
  const hmac = crypto.createHmac('sha256', secret).update(data).digest('hex')
  return Buffer.from(JSON.stringify({ code, phone, expiry, hmac })).toString('base64')
}

export async function POST(request: NextRequest) {
  try {
    const { nom, adresse, telephone, description } = await request.json()

    if (!nom || !adresse || !telephone || !description) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis.' },
        { status: 400 }
      )
    }

    // Formater le numéro de téléphone pour le Canada
    let phoneFormatted = telephone.replace(/[\s\-().]/g, '')
    if (!phoneFormatted.startsWith('+')) {
      if (phoneFormatted.startsWith('1')) {
        phoneFormatted = '+' + phoneFormatted
      } else {
        phoneFormatted = '+1' + phoneFormatted
      }
    }

    // Générer un code à 6 chiffres
    const code = Math.floor(100000 + Math.random() * 900000).toString()

    // Créer un token signé
    const token = generateToken(code, phoneFormatted)

    // Envoyer le SMS de vérification
    await getTwilioClient().messages.create({
      body: `ReVolt Électrique - Votre code de vérification: ${code}\n\nEn confirmant cet appel d'urgence, des frais de service pourraient vous être facturés.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneFormatted,
    })

    return NextResponse.json({
      success: true,
      token,
      message: 'Code de vérification envoyé par texto.'
    })
  } catch (error) {
    console.error('Erreur envoi SMS:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du code. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
