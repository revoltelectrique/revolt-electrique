import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et de protection des données de ReVolt Électrique.',
  alternates: { canonical: 'https://revoltelectrique.com/confidentialite' },
  robots: { index: false, follow: true },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
