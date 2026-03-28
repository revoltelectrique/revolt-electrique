import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'À propos — Maître Électricien Certifié RBQ sur la Côte-Nord',
  description: 'ReVolt Électrique : plus de 10 ans d\'expérience, 500+ projets complétés. Maître électricien certifié RBQ, CMEQ et ACQ. Forestville, Baie-Comeau, Fermont, Pessamit.',
  keywords: 'maître électricien Côte-Nord, électricien certifié RBQ, électricien CMEQ, entreprise électrique Forestville, électricien expérimenté Baie-Comeau, électricien Fermont, certification électricien Québec',
  alternates: { canonical: 'https://revoltelectrique.com/a-propos' },
  openGraph: {
    title: 'À propos de ReVolt Électrique — Maître Électricien Côte-Nord',
    description: 'Plus de 10 ans d\'expérience et 500+ projets. Certifié RBQ, CMEQ, ACQ. Service de La Malbaie à Sept-Îles et Fermont.',
    url: 'https://revoltelectrique.com/a-propos',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
