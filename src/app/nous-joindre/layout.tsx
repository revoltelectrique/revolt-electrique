import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nous Joindre — Soumission Gratuite & Urgence Électrique 24/7',
  description: 'Contactez ReVolt Électrique pour une soumission gratuite. Service d\'urgence électrique 24/7. Bureaux à Forestville, Baie-Comeau, Fermont et Pessamit. Appelez 418-587-5403.',
  keywords: 'contacter électricien Côte-Nord, soumission électricien gratuite, urgence électrique Forestville, urgence électrique Baie-Comeau, urgence électrique Sept-Îles, urgence électrique Fermont, électricien Pessamit, appel urgence électrique, panne électrique nuit, panne électrique fin de semaine',
  alternates: { canonical: 'https://revoltelectrique.com/nous-joindre' },
  openGraph: {
    title: 'Nous Joindre — ReVolt Électrique Côte-Nord',
    description: 'Soumission gratuite et service d\'urgence 24/7. Forestville, Baie-Comeau, Fermont, Pessamit. 418-587-5403.',
    url: 'https://revoltelectrique.com/nous-joindre',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
