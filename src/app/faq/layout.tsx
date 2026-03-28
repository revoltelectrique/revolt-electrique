import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Questions Fréquentes sur nos Services Électriques',
  description: 'Réponses aux questions fréquentes sur les services électriques commerciaux, industriels, les pannes électriques et le service d\'urgence 24/7 sur la Côte-Nord. Électricien Forestville, Baie-Comeau, Sept-Îles, Fermont.',
  keywords: 'FAQ électricien, question électricien Côte-Nord, panne électrique quoi faire, urgence électrique Forestville, coût électricien commercial, ligne électrique, installation électrique industrielle, borne de recharge FAQ, panneau électrique question',
  alternates: { canonical: 'https://revoltelectrique.com/faq' },
  openGraph: {
    title: 'FAQ — Questions Fréquentes | ReVolt Électrique',
    description: 'Trouvez les réponses à vos questions sur les services électriques commerciaux, industriels et d\'urgence sur la Côte-Nord.',
    url: 'https://revoltelectrique.com/faq',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quels types de services électriques offrez-vous pour les commerces?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nous offrons l\'installation et la rénovation complète de systèmes électriques commerciaux, incluant l\'éclairage intelligent, les panneaux de distribution, les bornes de recharge pour véhicules électriques, la mise aux normes, l\'entretien préventif et les systèmes d\'alimentation d\'urgence. Nous desservons tout le territoire de La Malbaie à Sept-Îles et Fermont.' },
    },
    {
      '@type': 'Question',
      name: 'Que faire en cas de panne électrique?',
      acceptedAnswer: { '@type': 'Answer', text: 'Vérifiez d\'abord si la panne est générale en consultant le site d\'Hydro-Québec. Si la panne est limitée à votre bâtiment, vérifiez votre panneau de disjoncteurs. Si le problème persiste, contactez notre service d\'urgence 24/7 au 418-587-5403.' },
    },
    {
      '@type': 'Question',
      name: 'Votre service d\'urgence est-il vraiment disponible 24h/24?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, notre service d\'urgence électrique est disponible 24 heures sur 24, 7 jours sur 7, incluant les fins de semaine et jours fériés. Nous couvrons tout le territoire de La Malbaie à Sept-Îles et Fermont.' },
    },
    {
      '@type': 'Question',
      name: 'Avez-vous de l\'expérience dans le secteur minier?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous avons une vaste expérience dans le secteur minier, particulièrement à Fermont et sur la Côte-Nord. Nous réalisons l\'installation et l\'entretien de systèmes haute tension, l\'automatisation de procédés, le câblage industriel et la maintenance de transformateurs.' },
    },
    {
      '@type': 'Question',
      name: 'Quelles régions couvrez-vous pour le service d\'urgence?',
      acceptedAnswer: { '@type': 'Answer', text: 'Notre service d\'urgence 24/7 couvre tout le territoire de La Malbaie à Sept-Îles, incluant Tadoussac, Les Escoumins, Forestville, Pessamit, Baie-Comeau, Port-Cartier, Sept-Îles et Fermont.' },
    },
    {
      '@type': 'Question',
      name: 'Combien coûte un appel d\'urgence électrique?',
      acceptedAnswer: { '@type': 'Answer', text: 'Des frais de service supplémentaires s\'appliquent pour les interventions d\'urgence en dehors des heures normales d\'ouverture. Le coût dépend de la nature de l\'intervention et de votre localisation. Un devis est fourni avant le début des travaux.' },
    },
    {
      '@type': 'Question',
      name: 'Est-ce que vous installez des bornes de recharge pour véhicules électriques?',
      acceptedAnswer: { '@type': 'Answer', text: 'Oui, nous sommes spécialisés dans l\'installation de bornes de recharge de niveau 2 et niveau 3 pour les commerces, stationnements publics et entreprises sur toute la Côte-Nord.' },
    },
    {
      '@type': 'Question',
      name: 'Comment savoir si mon panneau électrique doit être remplacé?',
      acceptedAnswer: { '@type': 'Answer', text: 'Signes courants : disjoncteurs qui sautent fréquemment, odeur de brûlé, panneau chaud au toucher, rouille ou corrosion, panneau Federal Pioneer ou Zinsco, ou si votre bâtiment a plus de 30 ans sans mise à niveau. Contactez-nous pour une inspection gratuite.' },
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
