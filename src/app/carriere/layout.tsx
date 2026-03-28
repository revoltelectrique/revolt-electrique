import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carrière — Emploi Électricien Côte-Nord, Baie-Comeau, Fermont',
  description: 'Rejoignez l\'équipe ReVolt Électrique. Postes d\'électricien compagnon, apprenti et contremaître disponibles sur la Côte-Nord. Salaire compétitif, formation continue.',
  keywords: 'emploi électricien Côte-Nord, emploi électricien Baie-Comeau, emploi électricien Fermont, carrière électricien Québec, apprenti électricien, compagnon électricien, contremaître chantier électrique, offre emploi Forestville',
  alternates: { canonical: 'https://revoltelectrique.com/carriere' },
  openGraph: {
    title: 'Carrière chez ReVolt Électrique — Emplois Côte-Nord',
    description: 'Postes d\'électricien disponibles. Salaire compétitif et formation continue. Baie-Comeau, Fermont, Forestville.',
    url: 'https://revoltelectrique.com/carriere',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
