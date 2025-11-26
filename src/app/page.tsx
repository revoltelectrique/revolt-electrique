import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-revolt-dark mb-6">
              Services électriques <span className="text-revolt-red">professionnels</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ReVolt Électrique offre des services électriques de qualité pour vos projets résidentiels et commerciaux.
              Expertise, fiabilité et satisfaction garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/nous-joindre" className="btn-primary text-center">
                Demander une soumission
              </Link>
              <Link href="/services" className="btn-secondary text-center">
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-revolt-dark mb-4">
              Nos services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de services électriques pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Industriel / Minier</h3>
              <p className="text-gray-600">
                Solutions électriques pour le secteur industriel et minier.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Commercial</h3>
              <p className="text-gray-600">
                Solutions électriques complètes pour commerces et entreprises.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Urgence</h3>
              <p className="text-gray-600">
                Service d'urgence disponible pour vos besoins immédiats.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-revolt-dark mb-4">
              Pourquoi choisir ReVolt Électrique?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-revolt-red mb-2">100%</div>
              <p className="text-revolt-dark">Satisfaction garantie</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-revolt-red mb-2">24/7</div>
              <p className="text-revolt-dark">Service d'urgence</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-revolt-red mb-2">Pro</div>
              <p className="text-revolt-dark">Électriciens certifiés</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-revolt-red mb-2">Gratuit</div>
              <p className="text-revolt-dark">Soumission sans frais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-revolt-dark mb-6">
            Prêt à démarrer votre projet?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une soumission gratuite et sans engagement.
          </p>
          <Link
            href="/nous-joindre"
            className="btn-primary"
          >
            Nous joindre
          </Link>
        </div>
      </section>
    </>
  )
}
