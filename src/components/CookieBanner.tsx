'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
        >
          <div className="bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-revolt-red/10 flex items-center justify-center text-revolt-red shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-revolt-dark mb-2">Respect de votre vie privée</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic, conformément à la Loi 25.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleAccept}
                    className="flex-1 bg-revolt-red text-white text-sm font-bold py-2.5 rounded-lg hover:bg-revolt-red-light transition-colors"
                  >
                    Accepter
                  </button>
                  <button
                    onClick={handleDecline}
                    className="flex-1 bg-gray-100 text-gray-600 text-sm font-bold py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Refuser
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
