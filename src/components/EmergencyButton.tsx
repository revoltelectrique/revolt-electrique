'use client'

import React, { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Zap,
  X,
  User,
  MapPin,
  Phone,
  MessageSquare,
  ShieldAlert,
  Send,
  CheckCircle2,
  AlertCircle,
  KeyRound,
} from 'lucide-react'

type EmergencyData = {
  nom: string
  adresse: string
  telephone: string
  description: string
  acceptConditions: boolean
}

type Step = 'form' | 'verification' | 'success'
type Status = 'idle' | 'submitting' | 'error'

type EmergencyButtonProps = {
  externalOpen?: boolean
  onExternalClose?: () => void
  hideButton?: boolean
}

export default function EmergencyButton({ externalOpen, onExternalClose, hideButton }: EmergencyButtonProps = {}) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isOpen = externalOpen ?? internalOpen
  const setIsOpen = (v: boolean) => {
    if (!v && onExternalClose) onExternalClose()
    setInternalOpen(v)
  }
  const [step, setStep] = useState<Step>('form')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [verificationToken, setVerificationToken] = useState('')
  const [verificationCode, setVerificationCode] = useState('')

  const [formData, setFormData] = useState<EmergencyData>({
    nom: '',
    adresse: '',
    telephone: '',
    description: '',
    acceptConditions: false,
  })

  const resetAll = () => {
    setStep('form')
    setStatus('idle')
    setErrorMsg('')
    setVerificationToken('')
    setVerificationCode('')
    setFormData({ nom: '', adresse: '', telephone: '', description: '', acceptConditions: false })
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(resetAll, 300)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  // Étape 1 : Envoyer le formulaire et demander un code SMS
  const handleSubmitForm = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/urgence/envoyer-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Erreur lors de l\'envoi.')
      }

      setVerificationToken(data.token)
      setStep('verification')
      setStatus('idle')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inattendue.')
      setStatus('error')
    }
  }

  // Étape 2 : Vérifier le code et envoyer l'alerte
  const handleVerifyCode = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/urgence/verifier-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: verificationToken,
          code: verificationCode,
          nom: formData.nom,
          adresse: formData.adresse,
          telephone: formData.telephone,
          description: formData.description,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Code invalide.')
      }

      setStep('success')
      setStatus('idle')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inattendue.')
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/10 focus:border-red-700 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium'

  return (
    <>
      {/* Bouton d'urgence */}
      {!hideButton && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-full group flex items-center gap-6 p-6 rounded-[32px] bg-gradient-to-r from-red-700 to-red-900 text-white border-2 border-red-600 hover:from-red-800 hover:to-red-950 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-red-900/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="w-14 h-14 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center shrink-0">
            <Zap className="w-7 h-7 text-yellow-300 fill-yellow-300" />
          </div>
          <div className="text-left">
            <div className="text-sm font-black uppercase tracking-widest text-red-200 mb-1">
              Urgence 24/7
            </div>
            <div className="text-xl font-black tracking-tight">
              Service d&apos;urgence
            </div>
            <div className="text-sm text-red-200 font-medium">
              Intervention rapide en tout temps
            </div>
          </div>
          <ShieldAlert className="w-8 h-8 text-red-300 ml-auto shrink-0 group-hover:text-white transition-colors" />
        </motion.button>
      )}

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-[40px] w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-red-700 to-red-900 rounded-t-[40px] p-8 text-white z-10">
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/15 rounded-full flex items-center justify-center hover:bg-white/25 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black tracking-tight">Service d&apos;urgence</h2>
                    <p className="text-red-200 text-sm font-medium">Disponible 24h/24, 7j/7</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Description du service */}
                {step === 'form' && (
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 mb-6 text-sm text-gray-600 font-medium leading-relaxed">
                    Ce formulaire est réservé aux <strong className="text-gray-800">situations d&apos;urgence électrique</strong> nécessitant une intervention immédiate en dehors des heures régulières (soir, nuit, fin de semaine, jours fériés). Pour toute demande non urgente, veuillez utiliser notre formulaire de contact standard ou nous appeler durant les heures d&apos;ouverture. Une fois le code de vérification saisi, le système envoie automatiquement un appel vers les électriciens de garde qui vous contacteront dans les minutes suivantes.
                  </div>
                )}

                <AnimatePresence mode="wait">
                  {/* ÉTAPE 1 : Formulaire */}
                  {step === 'form' && (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmitForm}
                      className="space-y-5"
                    >
                      {/* Nom complet */}
                      <div>
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                          Nom complet *
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-700 transition-colors" />
                          <input
                            type="text" name="nom" required
                            value={formData.nom} onChange={handleChange}
                            className={inputClasses} placeholder="Jean Tremblay"
                          />
                        </div>
                      </div>

                      {/* Adresse des travaux */}
                      <div>
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                          Adresse des travaux *
                        </label>
                        <div className="relative group">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-700 transition-colors" />
                          <input
                            type="text" name="adresse" required
                            value={formData.adresse} onChange={handleChange}
                            className={inputClasses} placeholder="123 rue Principale, Forestville"
                          />
                        </div>
                      </div>

                      {/* Téléphone */}
                      <div>
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                          Numéro de téléphone *
                        </label>
                        <div className="relative group">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-red-700 transition-colors" />
                          <input
                            type="tel" name="telephone" required
                            value={formData.telephone} onChange={handleChange}
                            className={inputClasses} placeholder="(418) 000-0000"
                          />
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-sm font-black text-gray-700 uppercase tracking-widest mb-2">
                          Description de l&apos;urgence *
                        </label>
                        <div className="relative group">
                          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-red-700 transition-colors" />
                          <textarea
                            name="description" required rows={3}
                            value={formData.description} onChange={handleChange}
                            className={`${inputClasses} resize-none min-h-[100px]`}
                            placeholder="Décrivez votre situation d'urgence..."
                          />
                        </div>
                      </div>

                      {/* Checkbox conditions */}
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox" name="acceptConditions" required
                            checked={formData.acceptConditions}
                            onChange={handleChange}
                            className="mt-1 w-5 h-5 rounded border-gray-300 text-red-700 focus:ring-red-500 shrink-0 accent-red-700"
                          />
                          <span className="text-sm text-amber-900 font-medium leading-relaxed">
                            Je comprends qu&apos;en utilisant ce service d&apos;urgence, des{' '}
                            <strong>frais de service supplémentaires</strong> pourront m&apos;être facturés.
                            J&apos;utilise cette option uniquement pour obtenir un service en urgence.
                          </span>
                        </label>
                      </div>

                      {/* Erreur */}
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl flex items-center gap-3"
                        >
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <p className="text-sm font-bold">{errorMsg}</p>
                        </motion.div>
                      )}

                      {/* Bouton envoyer */}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-700 to-red-900 text-white py-4 rounded-2xl font-black text-lg hover:from-red-800 hover:to-red-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-red-900/20"
                      >
                        {status === 'submitting' ? (
                          <span className="flex items-center gap-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full"
                            />
                            Envoi en cours...
                          </span>
                        ) : (
                          <>
                            Envoyer le code de vérification
                            <Send className="w-5 h-5" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  )}

                  {/* ÉTAPE 2 : Vérification du code */}
                  {step === 'verification' && (
                    <motion.form
                      key="verification"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      onSubmit={handleVerifyCode}
                      className="space-y-6"
                    >
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <KeyRound className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-black text-gray-800 mb-2">Vérification par texto</h3>
                        <p className="text-gray-500 text-sm font-medium">
                          Un code à 6 chiffres a été envoyé au{' '}
                          <strong className="text-gray-700">{formData.telephone}</strong>.
                          <br />Entrez-le ci-dessous pour confirmer votre appel d&apos;urgence.
                        </p>
                      </div>

                      <div>
                        <input
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          required
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, ''))}
                          className="w-full text-center text-3xl font-black tracking-[0.5em] py-5 bg-gray-50 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-red-500/10 focus:border-red-700 outline-none transition-all"
                          placeholder="000000"
                        />
                      </div>

                      {/* Erreur */}
                      {status === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 text-red-800 p-4 rounded-2xl flex items-center gap-3"
                        >
                          <AlertCircle className="w-5 h-5 shrink-0" />
                          <p className="text-sm font-bold">{errorMsg}</p>
                        </motion.div>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting' || verificationCode.length !== 6}
                        className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-red-700 to-red-900 text-white py-4 rounded-2xl font-black text-lg hover:from-red-800 hover:to-red-950 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-red-900/20"
                      >
                        {status === 'submitting' ? (
                          <span className="flex items-center gap-3">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full"
                            />
                            Vérification...
                          </span>
                        ) : (
                          <>
                            Confirmer l&apos;appel d&apos;urgence
                            <ShieldAlert className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => { setStep('form'); setStatus('idle'); setErrorMsg(''); }}
                        className="w-full text-center text-sm text-gray-400 hover:text-gray-600 font-medium transition-colors"
                      >
                        Retour au formulaire
                      </button>
                    </motion.form>
                  )}

                  {/* ÉTAPE 3 : Succès */}
                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-6"
                    >
                      <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/20">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-black text-green-900 mb-3">Urgence confirmée</h3>
                      <p className="text-green-800 font-medium mb-6 leading-relaxed">
                        Votre demande d&apos;urgence a été transmise à notre équipe.
                        <br />Un technicien vous contactera dans les plus brefs délais.
                      </p>
                      <button
                        onClick={handleClose}
                        className="bg-green-600 text-white px-8 py-3 rounded-2xl font-black hover:bg-green-700 transition-colors"
                      >
                        Fermer
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
