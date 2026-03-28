import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import AfterHoursBanner from '@/components/AfterHoursBanner'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://revoltelectrique.com'),
  title: {
    default: 'ReVolt Électrique | Maître Électricien Côte-Nord — Forestville, Baie-Comeau, Sept-Îles, Fermont',
    template: '%s | ReVolt Électrique — Maître Électricien Côte-Nord',
  },
  description: 'Maître électricien certifié RBQ sur la Côte-Nord. Services industriels, commerciaux et urgence 24/7. De La Malbaie à Sept-Îles et Fermont. Soumission gratuite.',
  keywords: [
    'électricien Forestville', 'électricien Baie-Comeau', 'électricien Sept-Îles', 'électricien Fermont',
    'électricien Pessamit', 'électricien Côte-Nord', 'électricien La Malbaie', 'électricien Tadoussac',
    'électricien Les Escoumins', 'électricien Port-Cartier', 'électricien Hauterive',
    'maître électricien Côte-Nord', 'urgence électrique Forestville', 'urgence électrique Baie-Comeau',
    'urgence électrique Sept-Îles', 'urgence électrique Fermont', 'urgence électrique Côte-Nord',
    'panne électrique Côte-Nord', 'panne électrique Forestville', 'panne électrique Baie-Comeau',
    'panne électrique Sept-Îles', 'panne électrique Fermont',
    'services électriques industriels', 'électricien minier Fermont', 'électricien minier Côte-Nord',
    'installation électrique commerciale', 'rénovation électrique',
    'électricien urgence 24/7', 'service de garde électricien', 'RBQ Côte-Nord',
    'borne de recharge Côte-Nord', 'panneau électrique', 'filage électrique',
  ].join(', '),
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://revoltelectrique.com',
    siteName: 'ReVolt Électrique',
    title: 'ReVolt Électrique | Maître Électricien Côte-Nord',
    description: 'Maître électricien certifié RBQ. Services industriels, commerciaux et urgence 24/7 de La Malbaie à Sept-Îles et Fermont. Soumission gratuite.',
    images: [{ url: '/logo.png', width: 1280, height: 455, alt: 'ReVolt Électrique — Maître Électricien Côte-Nord' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReVolt Électrique | Maître Électricien Côte-Nord',
    description: 'Services électriques industriels, commerciaux et urgence 24/7. De La Malbaie à Sept-Îles et Fermont.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: 'https://revoltelectrique.com' },
  verification: {},
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  name: 'ReVolt Électrique',
  url: 'https://revoltelectrique.com',
  logo: 'https://revoltelectrique.com/logo.png',
  image: 'https://revoltelectrique.com/logo.png',
  telephone: '+1-418-587-5403',
  email: 'info@revoltelectrique.com',
  description: 'Maître électricien certifié RBQ sur la Côte-Nord. Services industriels, commerciaux, résidentiels et urgence électrique 24/7.',
  priceRange: 'Soumission gratuite',
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '16:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '08:00', closes: '12:00' },
  ],
  areaServed: [
    { '@type': 'City', name: 'Forestville' },
    { '@type': 'City', name: 'Baie-Comeau' },
    { '@type': 'City', name: 'Sept-Îles' },
    { '@type': 'City', name: 'Fermont' },
    { '@type': 'City', name: 'Pessamit' },
    { '@type': 'City', name: 'Port-Cartier' },
    { '@type': 'City', name: 'La Malbaie' },
    { '@type': 'City', name: 'Tadoussac' },
    { '@type': 'City', name: 'Les Escoumins' },
    { '@type': 'City', name: 'Hauterive' },
    { '@type': 'AdministrativeArea', name: 'Côte-Nord, Québec' },
  ],
  address: [
    { '@type': 'PostalAddress', streetAddress: '162 route 138 ouest', addressLocality: 'Forestville', addressRegion: 'QC', postalCode: 'G0T 1E0', addressCountry: 'CA' },
    { '@type': 'PostalAddress', streetAddress: '2592 Bd Laflèche', addressLocality: 'Baie-Comeau', addressRegion: 'QC', postalCode: 'G5C 1E4', addressCountry: 'CA' },
    { '@type': 'PostalAddress', streetAddress: '2 rue Garnier', addressLocality: 'Fermont', addressRegion: 'QC', postalCode: 'G0G 1J0', addressCountry: 'CA' },
    { '@type': 'PostalAddress', streetAddress: '40 Utipan', addressLocality: 'Pessamit', addressRegion: 'QC', postalCode: 'G0H 1B0', addressCountry: 'CA' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Électriques',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Électricien industriel et minier' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Électricien commercial' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Urgence électrique 24/7' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Installation borne de recharge' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Rénovation électrique' } },
    ],
  },
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <AfterHoursBanner />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
