import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services Électriques — Industriel, Commercial, Ligne Électrique, Urgence 24/7 Côte-Nord',
  description: 'Services électriques industriels, miniers et commerciaux sur la Côte-Nord. Ligne électrique basse et moyenne tension, urgence 24/7, bornes de recharge. Forestville, Baie-Comeau, Sept-Îles, Fermont.',
  keywords: 'services électriques Côte-Nord, électricien industriel Fermont, électricien minier, urgence électrique 24/7, ligne électrique basse tension, ligne électrique moyenne tension, installation ligne électrique, raccordement électrique, panne électrique Forestville, panne électrique Baie-Comeau, panne électrique Sept-Îles, borne de recharge Côte-Nord, panneau électrique, installation électrique commerciale, entretien électrique industriel, électricien haute tension, poteau électrique, câblage souterrain',
  alternates: { canonical: 'https://revoltelectrique.com/services' },
  openGraph: {
    title: 'Services Électriques — Industriel, Commercial, Urgence 24/7',
    description: 'Électricien industriel, commercial et urgence 24/7 sur la Côte-Nord. De La Malbaie à Sept-Îles et Fermont. Soumission gratuite.',
    url: 'https://revoltelectrique.com/services',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
