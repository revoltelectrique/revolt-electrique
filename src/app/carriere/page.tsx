import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Carrière | ReVolt Électrique',
  description: 'Joignez-vous à l\'équipe ReVolt Électrique. Découvrez nos opportunités d\'emploi.',
}

// Placeholder pour vos postes - à modifier selon vos besoins
const postes = [
  {
    id: 1,
    title: 'Électricien compagnon',
    type: 'Temps plein',
    location: 'Baie-Comeau',
    description: 'Nous recherchons un électricien compagnon expérimenté pour rejoindre notre équipe.',
    requirements: [
      'Carte de compétence CCQ',
      'Minimum 3 ans d\'expérience',
      'Permis de conduire valide',
      'Autonomie et sens des responsabilités',
    ],
  },
  {
    id: 2,
    title: 'Apprenti électricien',
    type: 'Temps plein',
    location: 'Baie-Comeau',
    description: 'Opportunité pour un apprenti motivé de développer ses compétences.',
    requirements: [
      'DEP en électricité ou en cours',
      'Motivation et désir d\'apprendre',
      'Permis de conduire valide',
    ],
  },
  {
    id: 3,
    title: 'Commis d\'entrepôt et d\'inventaire',
    type: 'Temps plein',
    location: 'Baie-Comeau et Forestville',
    description: 'Nous recherchons une personne organisée pour gérer notre entrepôt et l\'inventaire de matériel électrique.',
    requirements: [
      'Expérience en gestion d\'inventaire (un atout)',
      'Bonne connaissance en informatique',
      'Sens de l\'organisation',
      'Capacité à travailler de façon autonome',
      'Permis de conduire valide',
    ],
  },
]

const avantages = [
  {
    title: 'Salaire compétitif',
    description: 'Rémunération selon la CCQ et avantages sociaux',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Formation continue',
    description: 'Développement professionnel et perfectionnement',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Équipe dynamique',
    description: 'Environnement de travail stimulant et respectueux',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Projets variés',
    description: "Diversité de projets et de secteur d'activité",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
]

export default function Carriere() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-revolt-dark mb-4">
            <span className="text-revolt-red">Carrière</span> chez ReVolt Électrique
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Joignez-vous à une équipe passionnée et faites progresser votre carrière
          </p>
        </div>
      </section>

      {/* Pourquoi nous rejoindre */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-revolt-dark mb-12 text-center">
            Pourquoi travailler avec nous?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {avantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-revolt-dark mb-2">
                  {avantage.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {avantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postes disponibles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-revolt-dark mb-12 text-center">
            Postes disponibles
          </h2>

          <div className="space-y-6 max-w-4xl mx-auto">
            {postes.map((poste) => (
              <div key={poste.id} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-revolt-dark mb-2">
                      {poste.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-revolt-red/10 text-revolt-red text-sm font-medium px-3 py-1 rounded-full">
                        {poste.type}
                      </span>
                      <span className="bg-gray-100 text-gray-600 text-sm font-medium px-3 py-1 rounded-full">
                        {poste.location}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{poste.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-revolt-dark mb-2">Exigences :</h4>
                  <ul className="space-y-1">
                    {poste.requirements.map((req, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-4 h-4 text-revolt-red mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/nous-joindre"
                  className="btn-primary inline-block"
                >
                  Postuler maintenant
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section className="section-padding bg-revolt-red">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Aucun poste ne correspond à votre profil?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Envoyez-nous une candidature spontanée. Nous sommes toujours à la recherche de talents!
          </p>
          <Link
            href="/nous-joindre"
            className="inline-block bg-white text-revolt-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Envoyer ma candidature
          </Link>
        </div>
      </section>
    </>
  )
}
