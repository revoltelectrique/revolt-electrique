export default function ConfidentialitePage() {
  return (
    <div className="bg-white py-16">
      <div className="container-custom mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-revolt-dark mb-8">
          Politique de confidentialité
        </h1>

        <p className="text-gray-600 mb-8">
          Dernière mise à jour : 28 novembre 2024
        </p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 mb-4">
              ReVolt Électrique Inc. ("nous", "notre", "nos") s'engage à protéger la vie privée des utilisateurs
              de notre application mobile "ReVolt Employé" et de notre portail client. Cette politique de
              confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              2. Informations collectées
            </h2>
            <p className="text-gray-600 mb-4">
              Nous collectons les informations suivantes :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Adresse courriel professionnelle</li>
              <li>Nom et prénom</li>
              <li>Informations relatives aux bons de commande et réquisitions</li>
              <li>Données d'utilisation de l'application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              3. Utilisation des informations
            </h2>
            <p className="text-gray-600 mb-4">
              Vos informations sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Authentifier votre accès à l'application</li>
              <li>Gérer les bons de commande et réquisitions de matériel</li>
              <li>Vous envoyer des notifications relatives à vos demandes</li>
              <li>Améliorer nos services et l'expérience utilisateur</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              4. Stockage et sécurité
            </h2>
            <p className="text-gray-600 mb-4">
              Vos données sont stockées de manière sécurisée sur des serveurs protégés (Supabase).
              Nous utilisons le chiffrement et des protocoles de sécurité standards de l'industrie
              pour protéger vos informations personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              5. Partage des informations
            </h2>
            <p className="text-gray-600 mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers.
              Vos données ne sont accessibles qu'aux employés autorisés de ReVolt Électrique qui ont
              besoin de ces informations pour effectuer leur travail.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              6. Conservation des données
            </h2>
            <p className="text-gray-600 mb-4">
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour
              fournir nos services et respecter nos obligations légales. Vous pouvez demander
              la suppression de vos données à tout moment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              7. Vos droits
            </h2>
            <p className="text-gray-600 mb-4">
              Vous avez le droit de :
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Accéder à vos informations personnelles</li>
              <li>Corriger des informations inexactes</li>
              <li>Demander la suppression de vos données</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              8. Contact
            </h2>
            <p className="text-gray-600 mb-4">
              Pour toute question concernant cette politique de confidentialité ou pour exercer
              vos droits, veuillez nous contacter :
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 font-semibold">ReVolt Électrique Inc.</p>
              <p className="text-gray-600">Courriel : info@revoltelectrique.com</p>
              <p className="text-gray-600">Téléphone : 418-XXX-XXXX</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-revolt-dark mb-4">
              9. Modifications
            </h2>
            <p className="text-gray-600 mb-4">
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
              Les modifications seront publiées sur cette page avec une date de mise à jour révisée.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
