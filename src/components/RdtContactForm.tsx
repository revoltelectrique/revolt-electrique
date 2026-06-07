'use client'

import React, { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Building2,
  Mail,
  Phone,
  CalendarClock,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from 'lucide-react'

type FormData = {
  nom: string
  entreprise: string
  courriel: string
  telephone: string
  typeBesoin: string
  periode: string
  message: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function RdtContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    entreprise: '',
    courriel: '',
    telephone: '',
    typeBesoin: '',
    periode: '',
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

    try {
      const response = await fetch('/api/location-rdt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setFormData({
          nom: '',
          entreprise: '',
          courriel: '',
          telephone: '',
          typeBesoin: '',
          periode: '',
          message: '',
        })
        setTimeout(() => setStatus('idle'), 6000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-4 focus:ring-[#64191E]/5 focus:border-[#64191E] outline-none transition-all duration-300 placeholder:text-gray-300 font-medium shadow-sm'
  const labelClasses =
    'block text-sm font-black text-[#383337] uppercase tracking-widest mb-3 ml-1'

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-green-50 border border-green-100 p-10 rounded-[40px] text-center"
          >
            <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-black text-green-900 mb-4 tracking-tight">
              Demande envoyée !
            </h3>
            <p className="text-green-800 text-lg font-medium">
              Merci de votre confiance. Un courriel de confirmation vous a été envoyé.
              <br />Un expert RDT de ReVolt Électrique vous contactera pour planifier la rencontre.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Nom */}
              <div className="relative">
                <label htmlFor="rdt-nom" className={labelClasses}>Votre nom *</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                  <input
                    type="text" id="rdt-nom" name="nom" required
                    value={formData.nom} onChange={handleChange}
                    className={inputClasses} placeholder="Jean Tremblay"
                  />
                </div>
              </div>

              {/* Entreprise */}
              <div className="relative">
                <label htmlFor="rdt-entreprise" className={labelClasses}>Entreprise</label>
                <div className="relative group">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                  <input
                    type="text" id="rdt-entreprise" name="entreprise"
                    value={formData.entreprise} onChange={handleChange}
                    className={inputClasses} placeholder="Nom de votre entreprise"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Courriel */}
              <div className="relative">
                <label htmlFor="rdt-courriel" className={labelClasses}>Courriel professionnel *</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                  <input
                    type="email" id="rdt-courriel" name="courriel" required
                    value={formData.courriel} onChange={handleChange}
                    className={inputClasses} placeholder="jean@entreprise.com"
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div className="relative">
                <label htmlFor="rdt-telephone" className={labelClasses}>Téléphone *</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                  <input
                    type="tel" id="rdt-telephone" name="telephone" required
                    value={formData.telephone} onChange={handleChange}
                    className={inputClasses} placeholder="(418) 000-0000"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Type de besoin */}
              <div className="relative">
                <label htmlFor="rdt-typeBesoin" className={labelClasses}>Type de besoin RDT</label>
                <div className="relative group">
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  <select
                    id="rdt-typeBesoin" name="typeBesoin"
                    value={formData.typeBesoin} onChange={handleChange}
                    className={`${inputClasses} appearance-none pl-4 pr-12`}
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="poste">RDT Poste</option>
                    <option value="centrale">RDT Centrale</option>
                    <option value="transport">Ligne de transport</option>
                    <option value="autre">Autre / à préciser</option>
                  </select>
                </div>
              </div>

              {/* Période de rencontre */}
              <div className="relative">
                <label htmlFor="rdt-periode" className={labelClasses}>Période de rencontre souhaitée</label>
                <div className="relative group">
                  <CalendarClock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                  <input
                    type="text" id="rdt-periode" name="periode"
                    value={formData.periode} onChange={handleChange}
                    className={inputClasses} placeholder="Ex. : semaine du 15 juin, avant-midi"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="rdt-message" className={labelClasses}>Détails du chantier / besoins *</label>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-5 w-5 h-5 text-gray-400 group-focus-within:text-[#64191E] transition-colors" />
                <textarea
                  id="rdt-message" name="message" required rows={5}
                  value={formData.message} onChange={handleChange}
                  className={`${inputClasses} resize-none min-h-[150px]`}
                  placeholder="Décrivez le chantier Hydro-Québec, la durée prévue, le nombre de RDT requis, le lieu d'intervention..."
                />
              </div>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="bg-red-50 border border-red-100 text-red-800 p-4 rounded-2xl flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5" />
                <p className="text-sm font-bold">Une erreur est survenue. Veuillez nous appeler directement au 418-587-5403.</p>
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full group flex items-center justify-center gap-4 bg-[#64191E] text-white py-5 rounded-[28px] font-black text-xl hover:bg-[#383337] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 shadow-xl shadow-[#64191E]/20 hover:shadow-[#383337]/30 transform hover:-translate-y-1"
            >
              {status === 'submitting' ? (
                <span className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full"
                  />
                  Transmission...
                </span>
              ) : (
                <>
                  Planifier une rencontre
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
