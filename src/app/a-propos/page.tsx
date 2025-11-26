import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'À propos | ReVolt Électrique',
  description: 'Découvrez ReVolt Électrique, votre partenaire de confiance pour tous vos projets électriques.',
}

export default function APropos() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20">
        <div className="container-custom mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-revolt-dark mb-4">
            À propos de <span className="text-revolt-red">ReVolt Électrique</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Une équipe passionnée au service de vos projets électriques
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-revolt-dark mb-6">Notre histoire</h2>
              <p className="text-gray-600 mb-4">
                {/* À COMPLÉTER AVEC VOTRE CONTENU */}
                ReVolt Électrique est née de la passion pour l'excellence dans le domaine électrique.
                Notre équipe d'électriciens certifiés met son expertise au service de vos projets.
              </p>
              <p className="text-gray-600 mb-4">
                {/* À COMPLÉTER AVEC VOTRE CONTENU */}
                Nous nous engageons à offrir des services de qualité supérieure,
                en respectant les normes les plus strictes de l'industrie.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/team.png"
                alt="Équipe ReVolt Électrique"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-revolt-dark mb-12 text-center">Nos valeurs</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Qualité</h3>
              <p className="text-gray-600">
                Un travail impeccable, conforme aux normes les plus strictes de l'industrie.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Fiabilité</h3>
              <p className="text-gray-600">
                Respect des délais et engagement envers nos clients à chaque projet.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-14 h-14 bg-revolt-red rounded-lg flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-revolt-dark mb-3">Service client</h3>
              <p className="text-gray-600">
                Une communication claire et un service personnalisé pour chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-revolt-dark mb-12 text-center">
            Certifications et accréditations
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Placeholder pour les logos de certification */}
            <div className="bg-gray-100 w-40 h-24 rounded-lg flex items-center justify-center p-2">
              <Image
                src="/cmeq.gif"
                alt="CMEQ - Corporation des maîtres électriciens du Québec"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-gray-100 w-40 h-24 rounded-lg flex items-center justify-center p-2">
              <Image
                src="/rbq.png"
                alt="RBQ - Régie du bâtiment du Québec"
                width={120}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="bg-gray-100 w-40 h-24 rounded-lg flex items-center justify-center p-2">
              <span className="text-revolt-dark text-sm font-semibold text-center">RBQ : 5795-3226-01</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
