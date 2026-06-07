import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location de RDT — Responsable des travaux habilité CDST Hydro-Québec | Côte-Nord',
  description: 'Location de responsables des travaux (RDT) habilités au Code de sécurité des travaux d\'Hydro-Québec (CDST 7e édition). Réseau interne de RDT basés sur la Côte-Nord pour vos chantiers en poste, centrale et réseau. Forestville, Baie-Comeau, Sept-Îles, Fermont.',
  keywords: 'location RDT Côte-Nord, responsable des travaux Hydro-Québec, RDT poste centrale, RDT CDST Côte-Nord, location responsable des travaux Québec, RDT habilité Hydro-Québec, Code de sécurité des travaux, CDST 7e édition, location RDT poste, location RDT centrale, RDT Forestville, RDT Baie-Comeau, RDT Sept-Îles, RDT Fermont, entrepreneur Hydro-Québec',
  alternates: { canonical: 'https://revoltelectrique.com/location-rdt' },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://revoltelectrique.com/location-rdt',
    siteName: 'ReVolt Électrique',
    title: 'Location de RDT — Responsable des travaux habilité CDST Hydro-Québec',
    description: 'Réseau interne de RDT habilités au CDST 7e édition d\'Hydro-Québec, disponibles sur la Côte-Nord pour vos chantiers en poste, centrale et réseau. Soumission gratuite.',
    images: [{ url: '/logo.png', width: 1280, height: 455, alt: 'ReVolt Électrique — Location de RDT Côte-Nord' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Location de RDT — Responsable des travaux habilité CDST Hydro-Québec',
    description: 'Réseau interne de RDT habilités au CDST 7e édition, basés sur la Côte-Nord. Postes, centrales et réseau Hydro-Québec.',
    images: ['/logo.png'],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
