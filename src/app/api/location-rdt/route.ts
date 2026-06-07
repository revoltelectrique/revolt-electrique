import { NextRequest, NextResponse } from 'next/server'

const WEB3FORMS_ACCESS_KEY = '2448b9b7-beb1-4f5d-a776-c159436bbc98'

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

    // 1. Notification interne à ReVolt
    const notifResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Location de RDT — Demande de rencontre (${besoinLabel})`,
        from_name: 'ReVolt Électrique - Location de RDT',
        cc: ['larry.tremblay@revoltelectrique.com'],
        name: nom,
        email: courriel,
        entreprise: entrepriseLabel,
        telephone,
        type_besoin: besoinLabel,
        periode_rencontre: periodeLabel,
        message,
      }),
    })

    const notifResult = await notifResponse.json()

    if (!notifResult.success) {
      throw new Error('Erreur lors de l\'envoi du formulaire.')
    }

    // 2. Confirmation au client
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'Confirmation de votre demande de rencontre — Location de RDT — ReVolt Électrique',
        from_name: 'ReVolt Électrique',
        replyto: 'info@revoltelectrique.com',
        to: courriel,
        name: nom,
        message: [
          `Bonjour ${nom},`,
          '',
          'Nous avons bien reçu votre demande de rencontre concernant la location de responsables des travaux (RDT). Merci de votre intérêt.',
          '',
          'Voici un résumé de votre demande :',
          `• Entreprise : ${entrepriseLabel}`,
          `• Type de besoin : ${besoinLabel}`,
          `• Période de rencontre souhaitée : ${periodeLabel}`,
          `• Téléphone : ${telephone}`,
          `• Message : ${message}`,
          '',
          'Un expert RDT de notre équipe communiquera avec vous dans les plus brefs délais afin de planifier la rencontre et valider vos besoins de conformité au Code de sécurité des travaux d\'Hydro-Québec.',
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
    console.error('Erreur formulaire location RDT:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
