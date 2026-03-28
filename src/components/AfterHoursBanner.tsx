'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, X, Clock } from 'lucide-react'
import EmergencyButton from '@/components/EmergencyButton'

function isOfficeOpen(): boolean {
  const now = new Date()
  const day = now.getDay() // 0=dim, 1=lun, ..., 5=ven, 6=sam
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const time = hours * 60 + minutes

  // Lundi à Jeudi: 08h00 - 16h30
  if (day >= 1 && day <= 4) {
    return time >= 480 && time < 990 // 8*60=480, 16*60+30=990
  }
  // Vendredi: 08h00 - 12h00
  if (day === 5) {
    return time >= 480 && time < 720 // 12*60=720
  }
  // Samedi, Dimanche: fermé
  return false
}

export default function AfterHoursBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [emergencyOpen, setEmergencyOpen] = useState(false)

  useEffect(() => {
    setVisible(!isOfficeOpen())
  }, [])

  if (!visible || dismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        className="relative z-[60] bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-2xl"
      >
        <div className="container-custom mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0 animate-pulse">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-black text-base">
                  Nos bureaux sont présentement fermés
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  Heures d&apos;ouverture : Lundi au jeudi 08h00 à 16h30 | Vendredi 08h00 à 12h00
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setEmergencyOpen(true)}
                className="group flex items-center gap-2 bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-sm transition-all duration-300 shadow-lg shadow-red-900/30 shrink-0"
              >
                <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                Service d&apos;urgence 24/7
              </button>
              <button
                onClick={() => setDismissed(true)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white rounded-full hover:bg-white/10 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Modal d'urgence */}
      <EmergencyButton
        hideButton
        externalOpen={emergencyOpen}
        onExternalClose={() => setEmergencyOpen(false)}
      />
    </AnimatePresence>
  )
}
