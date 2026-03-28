import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations — Projets Électriques Industriels, Miniers et Commerciaux',
  description: 'Découvrez nos projets électriques complétés sur la Côte-Nord : installations industrielles, infrastructures minières à Fermont, complexes commerciaux. Plus de 500 projets réalisés.',
  keywords: 'projets électriques Côte-Nord, réalisations électricien, installation électrique industrielle Fermont, projet minier électrique, rénovation électrique commerciale, électricien Baie-Comeau projets, borne de recharge installation',
  alternates: { canonical: 'https://revoltelectrique.com/realisations' },
  openGraph: {
    title: 'Réalisations — Projets Électriques Côte-Nord',
    description: 'Plus de 500 projets électriques industriels, miniers et commerciaux complétés sur la Côte-Nord.',
    url: 'https://revoltelectrique.com/realisations',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
