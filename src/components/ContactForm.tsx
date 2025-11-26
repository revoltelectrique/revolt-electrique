'use client'

import { useState, FormEvent } from 'react'

type FormData = {
  nom: string
  courriel: string
  telephone: string
  typeService: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    courriel: '',
    telephone: '',
    typeService: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    // TODO: Implémenter l'envoi du formulaire
    // Options:
    // 1. Formspree (gratuit): https://formspree.io
    // 2. EmailJS (gratuit): https://www.emailjs.com
    // 3. API Route Next.js avec Nodemailer

    // Simulation d'envoi pour le moment
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Pour le moment, afficher les données dans la console
      console.log('Formulaire soumis:', formData)

      setStatus('success')
      setFormData({
        nom: '',
        courriel: '',
        telephone: '',
        typeService: '',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
          Nom complet *
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          value={formData.nom}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-revolt-red focus:border-transparent transition-colors"
          placeholder="Votre nom"
        />
      </div>

      {/* Courriel */}
      <div>
        <label htmlFor="courriel" className="block text-sm font-medium text-gray-700 mb-2">
          Courriel *
        </label>
        <input
          type="email"
          id="courriel"
          name="courriel"
          required
          value={formData.courriel}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-revolt-red focus:border-transparent transition-colors"
          placeholder="votre@courriel.com"
        />
      </div>

      {/* Téléphone */}
      <div>
        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone *
        </label>
        <input
          type="tel"
          id="telephone"
          name="telephone"
          required
          value={formData.telephone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-revolt-red focus:border-transparent transition-colors"
          placeholder="(514) 123-4567"
        />
      </div>

      {/* Type de service */}
      <div>
        <label htmlFor="typeService" className="block text-sm font-medium text-gray-700 mb-2">
          Type de service
        </label>
        <select
          id="typeService"
          name="typeService"
          value={formData.typeService}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-revolt-red focus:border-transparent transition-colors bg-white"
        >
          <option value="">Sélectionnez un service</option>
          <option value="residentiel">Résidentiel</option>
          <option value="commercial">Commercial</option>
          <option value="borne-recharge">Borne de recharge</option>
          <option value="urgence">Urgence</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-revolt-red focus:border-transparent transition-colors resize-none"
          placeholder="Décrivez votre projet ou votre demande..."
        />
      </div>

      {/* Message de succès */}
      {status === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
          Merci! Votre message a été envoyé. Nous vous contacterons sous peu.
        </div>
      )}

      {/* Message d'erreur */}
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.
        </div>
      )}

      {/* Bouton submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer ma demande'}
      </button>

      <p className="text-sm text-gray-500">
        * Champs obligatoires. Nous vous répondrons dans les 24 à 48 heures ouvrables.
      </p>
    </form>
  )
}
