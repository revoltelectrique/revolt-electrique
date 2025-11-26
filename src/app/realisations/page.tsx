import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Réalisations | ReVolt Électrique',
  description: 'Découvrez nos projets réalisés et notre portfolio de travaux électriques.',
}

// Placeholder pour vos réalisations - à remplacer par vos vraies données
const realisations = [
  {
    id: 1,
    title: 'Projet résidentiel 1',
    category: 'Résidentiel',
    description: 'Description du projet à compléter',
    image: null,
  },
  {
    id: 2,
    title: 'Projet commercial 1',
    category: 'Commercial',
    description: 'Description du projet à compléter',
    image: null,
  },
  {
    id: 3,
    title: 'Installation borne de recharge',
    category: 'Borne de recharge',
    description: 'Description du projet à compléter',
    image: null,
  },
  {
    id: 4,
    title: 'Projet résidentiel 2',
    category: 'Résidentiel',
    description: 'Description du projet à compléter',
    image: null,
  },
  {
    id: 5,
    title: 'Projet commercial 2',
    category: 'Commercial',
    description: 'Description du projet à compléter',
    image: null,
  },
  {
    id: 6,
    title: 'Rénovation électrique complète',
    category: 'Résidentiel',
    description: 'Description du projet à compléter',
    image: null,
  },
]

export default function Realisations() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-revolt-dark mb-4">
            Nos <span className="text-revolt-red">réalisations</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realisations.map((projet) => (
              <div
                key={projet.id}
                className="group bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image placeholder */}
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image à ajouter</span>
                </div>

                <div className="p-6">
                  <span className="inline-block bg-revolt-red/10 text-revolt-red text-sm font-medium px-3 py-1 rounded-full mb-3">
                    {projet.category}
                  </span>
                  <h3 className="text-xl font-semibold text-revolt-dark mb-2">
                    {projet.title}
                  </h3>
                  <p className="text-gray-600">
                    {projet.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note pour ajout de contenu */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-revolt-dark mb-4">
              Ajoutez vos réalisations
            </h2>
            <p className="text-gray-600">
              Cette section est prête à recevoir vos photos et descriptions de projets.
              Remplacez les placeholders par vos vraies réalisations pour montrer
              votre expertise à vos futurs clients.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
