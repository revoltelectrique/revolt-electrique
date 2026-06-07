import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/a-propos', label: 'A propos' },
  { href: '/services', label: 'Services' },
  { href: '/location-rdt', label: 'Location de RDT' },
  { href: '/realisations', label: 'Realisations' },
  { href: '/carriere', label: 'Carriere' },
  { href: '/faq', label: 'FAQ' },
  { href: '/nous-joindre', label: 'Nous joindre' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-revolt-dark text-white">
      <div className="container-custom mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo & tagline */}
          <div className="md:col-span-4">
            <Image
              src="/logo.png"
              alt="ReVolt Electrique Inc."
              width={160}
              height={53}
              className="h-10 w-auto mb-5"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Maitre electricien certifie RBQ. Services industriels, commerciaux et urgence 24/7 sur la Cote-Nord.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="w-4 h-4 text-revolt-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:4185875403" className="hover:text-white transition-colors">418-587-5403</a>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <svg className="w-4 h-4 text-revolt-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@revoltelectrique.com" className="hover:text-white transition-colors">info@revoltelectrique.com</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <svg className="w-4 h-4 text-revolt-red flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>162 route 138 ouest, Forestville, G0T 1E0</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-5">Certifications</h4>
            <div className="space-y-2 text-sm text-gray-400 font-medium">
              <div>RBQ: 5742-5362-01</div>
              <div>CMEQ</div>
              <div>ACQ</div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {currentYear} ReVolt Electrique. Tous droits reserves.</p>
          <div className="flex items-center gap-6">
            <Link href="/confidentialite" className="hover:text-gray-300 transition-colors">Politique de confidentialite</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
