import { NextRequest, NextResponse } from 'next/server'

const WEB3FORMS_ACCESS_KEY = '2448b9b7-beb1-4f5d-a776-c159436bbc98'

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

    // 1. Envoyer la notification à ReVolt (existant)
    const notifResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Nouvelle demande - ${serviceLabel}`,
        from_name: 'ReVolt Électrique - Site Web',
        name: nom,
        email: courriel,
        telephone,
        type_service: serviceLabel,
        message,
      }),
    })

    const notifResult = await notifResponse.json()

    if (!notifResult.success) {
      throw new Error('Erreur lors de l\'envoi du formulaire.')
    }

    // 2. Envoyer la confirmation au client
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Confirmation de votre demande — ReVolt Électrique',
        from_name: 'ReVolt Électrique',
        replyto: 'info@revoltelectrique.com',
        to: courriel,
        name: nom,
        message: [
          `Bonjour ${nom},`,
          '',
          'Nous avons bien reçu votre demande de soumission et nous vous en remercions.',
          '',
          'Voici un résumé de votre demande :',
          `• Service demandé : ${serviceLabel}`,
          `• Téléphone : ${telephone}`,
          `• Message : ${message}`,
          '',
          'Un expert de notre équipe analysera votre demande et vous contactera dans les plus brefs délais.',
          '',
          'Si vous avez une urgence électrique, utilisez notre service d\'urgence 24/7 disponible sur notre site web.',
          '',
          'Cordialement,',
          'L\'équipe ReVolt Électrique',
          '418-587-5403',
          'info@revoltelectrique.com',
          'revoltelectrique.com',
        ].join('\n'),
      }),
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
