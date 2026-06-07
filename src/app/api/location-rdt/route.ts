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
// Destinataire des demandes de location de RDT
const TO = 'larry.tremblay@revoltelectrique.com'

export async function POST(request: NextRequest) {
  try {
    const { nom, entreprise, courriel, telephone, typeBesoin, periode, message } =
      await request.json()

    if (!nom || !courriel || !telephone || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    const besoinLabels: Record<string, string> = {
      poste: 'RDT Poste',
      centrale: 'RDT Centrale',
      transport: 'Ligne de transport',
      autre: 'Autre / à préciser',
    }

    const besoinLabel = besoinLabels[typeBesoin] || typeBesoin || 'À préciser'
    const periodeLabel = periode || 'À déterminer'
    const entrepriseLabel = entreprise || 'Non précisée'

    // 1. Notification interne
    await transporter.sendMail({
      from: FROM,
      to: TO,
      replyTo: courriel,
      subject: `Location de RDT — Demande de rencontre (${besoinLabel})`,
      html: `
        <h2>Nouvelle demande de rencontre — Location de RDT</h2>
        <table cellpadding="6" style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td><strong>Nom</strong></td><td>${nom}</td></tr>
          <tr><td><strong>Entreprise</strong></td><td>${entrepriseLabel}</td></tr>
          <tr><td><strong>Courriel</strong></td><td>${courriel}</td></tr>
          <tr><td><strong>Téléphone</strong></td><td>${telephone}</td></tr>
          <tr><td><strong>Type de besoin</strong></td><td>${besoinLabel}</td></tr>
          <tr><td><strong>Période souhaitée</strong></td><td>${periodeLabel}</td></tr>
          <tr><td valign="top"><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      `,
    })

    // 2. Confirmation au client
    await transporter.sendMail({
      from: FROM,
      to: courriel,
      replyTo: 'info@revoltelectrique.com',
      subject: 'Confirmation de votre demande de rencontre — Location de RDT — ReVolt Électrique',
      html: `
        <div style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#383337">
          <p>Bonjour ${nom},</p>
          <p>Nous avons bien reçu votre demande de rencontre concernant la location de responsables des travaux (RDT). Merci de votre intérêt.</p>
          <p><strong>Résumé de votre demande :</strong></p>
          <ul>
            <li>Entreprise : ${entrepriseLabel}</li>
            <li>Type de besoin : ${besoinLabel}</li>
            <li>Période de rencontre souhaitée : ${periodeLabel}</li>
            <li>Téléphone : ${telephone}</li>
            <li>Message : ${message}</li>
          </ul>
          <p>Un expert RDT de notre équipe communiquera avec vous dans les plus brefs délais afin de planifier la rencontre et valider vos besoins de conformité au Code de sécurité des travaux d'Hydro-Québec.</p>
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
    console.error('Erreur formulaire location RDT:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
