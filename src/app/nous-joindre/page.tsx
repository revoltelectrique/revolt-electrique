import { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Nous joindre | ReVolt Électrique',
  description: 'Contactez ReVolt Électrique pour une soumission gratuite ou pour toute question.',
}

export default function NousJoindre() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-revolt-dark mb-4">
            <span className="text-revolt-red">Nous</span> joindre
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Contactez-nous pour une soumission gratuite ou pour toute question
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-2xl font-bold text-revolt-dark mb-6">
                Demande de soumission
              </h2>
              <ContactForm />
            </div>

            {/* Informations de contact */}
            <div>
              <h2 className="text-2xl font-bold text-revolt-dark mb-6">
                Coordonnées
              </h2>

              <div className="space-y-6">
                {/* Téléphone */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-revolt-red rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-revolt-dark mb-1">Téléphone</h3>
                    <p className="text-gray-600">418-587-5403</p>
                  </div>
                </div>

                {/* Courriel */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-revolt-red rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-revolt-dark mb-1">Courriel</h3>
                    <p className="text-gray-600">info@revoltelectrique.com</p>
                  </div>
                </div>

                {/* Siège social */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-revolt-red rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-revolt-dark mb-1">Siège social - Forestville</h3>
                    <p className="text-gray-600">162 route 138 ouest, Forestville, G0T 1E0</p>
                  </div>
                </div>

                {/* Heures d'ouverture */}
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-revolt-red rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-revolt-dark mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi - Vendredi: 8h - 17h</p>
                    <p className="text-gray-600">Urgences: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Nos places d'affaires */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-revolt-dark mb-4">Nos places d'affaires</h3>
                <div className="space-y-3 text-gray-600">
                  <div>
                    <p className="font-medium text-revolt-dark">Baie-Comeau</p>
                    <p>2592 Bd Laflèche, Baie-Comeau, QC G5C 1E4</p>
                  </div>
                  <div>
                    <p className="font-medium text-revolt-dark">Fermont</p>
                    <p>2 rue Garnier, Fermont, G0G 1J0</p>
                  </div>
                  <div>
                    <p className="font-medium text-revolt-dark">Bureau satellite - Pessamit</p>
                    <p>40 Utipan, Pessamit, G0H 1B0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
