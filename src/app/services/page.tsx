import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | ReVolt Électrique',
  description: 'Découvrez notre gamme complète de services électriques résidentiels et commerciaux.',
}

const services = [
  {
    title: 'Industriel lourd / Mines',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    items: [
      'Installation électrique industrielle',
      'Systèmes haute tension',
      'Équipements miniers',
      'Automatisation et contrôle',
      'Maintenance industrielle',
      'Conformité aux normes de sécurité minière',
    ],
  },
  {
    title: 'Commercial',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: [
      'Installation électrique commerciale',
      'Systèmes d\'éclairage commercial',
      'Câblage de données et réseau',
      'Installation de systèmes de sécurité',
      'Maintenance préventive',
      'Conformité aux normes',
    ],
  },
  {
    title: 'Dépannage et urgence',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    items: [
      'Service d\'urgence 24/7',
      'Diagnostic de pannes',
      'Réparation rapide',
      'Remplacement de disjoncteurs',
      'Problèmes de court-circuit',
      'Inspection de sécurité',
    ],
  },
  {
    title: 'Ligne électrique moyenne tension',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    items: [
      'Installation de lignes moyenne tension',
      'Raccordement au réseau',
      'Postes de transformation',
      'Câblage souterrain',
      'Maintenance de lignes',
      'Mise aux normes',
    ],
  },
  {
    title: 'Bornes de recharge',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: [
      'Installation de bornes résidentielles',
      'Bornes de recharge commerciales',
      'Évaluation de la capacité électrique',
      'Mise à niveau du panneau si nécessaire',
      'Configuration et programmation',
      'Service après-vente',
    ],
  },
  {
    title: 'Résidentiel',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    items: [
      'Installation électrique complète',
      'Mise à niveau de panneau électrique',
      'Installation de prises et interrupteurs',
      'Éclairage intérieur et extérieur',
      'Entrée électrique',
      'Câblage pour rénovations',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-revolt-dark mb-4">
            Nos <span className="text-revolt-red">services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Une gamme complète de services électriques pour répondre à tous vos besoins
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mr-4">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-revolt-dark">{service.title}</h2>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-revolt-red mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-revolt-red">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Besoin d'un service électrique?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactez-nous pour une soumission gratuite
          </p>
          <Link
            href="/nous-joindre"
            className="inline-block bg-white text-revolt-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Demander une soumission
          </Link>
        </div>
      </section>
    </>
  )
}
