import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'

// Transport SMTP Zoho — identifiants dans les variables d'environnement
const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_HOST || 'smtppro.zoho.com',
  port: Number(process.env.ZOHO_PORT) || 465,
  secure: true, // SSL sur le port 465
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
})

// Expéditeur (doit correspondre au compte Zoho authentifié)
const FROM = `ReVolt Électrique <${process.env.ZOHO_USER}>`
// Destinataire des demandes du formulaire de contact
const TO = 'info@revoltelectrique.com'

export async function POST(request: NextRequest) {
  try {
    const { nom, courriel, telephone, typeService, message } = await request.json()

    if (!nom || !courriel || !telephone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    const serviceLabels: Record<string, string> = {
      industriel: 'Industriel / Minier',
      commercial: 'Commercial',
      residentiel: 'Résidentiel',
      urgence: 'Urgence 24/7',
    }

    const serviceLabel = serviceLabels[typeService] || typeService || 'Général'

    // 1. Notification interne
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: courriel,
      subject: `Nouvelle demande - ${serviceLabel}`,
      html: `
        <h2>Nouvelle demande — Site Web</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td><strong>Nom</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Courriel</strong></td><td>${courriel}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${telephone}</td></tr>
          <tr><td><strong>Secteur</strong></td><td>${serviceLabel}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    })

    // 2. Confirmation au client
    await transporter.sendMail({
      from: FROM,
      to: courriel,
      replyTo: 'info@revoltelectrique.com',
      subject: 'Confirmation de votre demande — ReVolt Électrique',
      html: `
        <div style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#383337">
          <p>Bonjour ${nom},</p>
          <p>Nous avons bien reçu votre demande de soumission et nous vous en remercions.</p>
          <p><strong>Résumé de votre demande :</strong></p>
          <ul>
            <li>Service demandé : ${serviceLabel}</li>
            <li>Téléphone : ${telephone}</li>
            <li>Message : ${message}</li>
          </ul>
          <p>Un expert de notre équipe analysera votre demande et vous contactera dans les plus brefs délais.</p>
          <p>Si vous avez une urgence électrique, utilisez notre service d'urgence 24/7 disponible sur notre site web.</p>
          <p>Cordialement,<br>
          L'équipe ReVolt Électrique<br>
          418-587-5403<br>
          info@revoltelectrique.com<br>
          revoltelectrique.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erreur formulaire contact:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
