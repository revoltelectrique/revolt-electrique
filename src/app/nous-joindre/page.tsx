'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Zap,
  Building2,
  ChevronRight
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function NousJoindrePage() {
  const contactDetails = [
    {
      title: "Téléphone",
      value: "418-587-5403",
      icon: <Phone className="w-6 h-6" />,
      sub: "Lundi au Vendredi, 8h - 17h"
    },
    {
      title: "Courriel",
      value: "info@revoltelectrique.com",
      icon: <Mail className="w-6 h-6" />,
      sub: "Réponse sous 24h"
    },
    {
      title: "Urgence 24/7",
      value: "Service de Garde",
      icon: <Zap className="w-6 h-6 fill-revolt-red" />,
      sub: "Disponible en tout temps"
    }
  ]

  const places = [
    { city: "Forestville (Siège)", address: "162 route 138 ouest, G0T 1E0" },
    { city: "Baie-Comeau", address: "2592 Bd Laflèche, G5C 1E4" },
    { city: "Fermont", address: "2 rue Garnier, G0G 1J0" },
    { city: "Pessamit", address: "40 Utipan, G0H 1B0" }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Contact */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-[#64191E] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Contactez l'expertise</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Parlons de votre <br /><span className="text-[#64191E]">Projet.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Une question technique ou une demande de soumission? Notre équipe est prête à vous répondre avec précision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Column: Info & Places */}
            <div className="lg:col-span-5 space-y-16">
              
              {/* Quick Info Cards */}
              <div className="space-y-6">
<<<<<<< HEAD
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
                    <p className="text-gray-600">Lundi - Vendredi: 8h - 16h</p>
                    <p className="text-gray-600">Urgences: 24/7</p>
                  </div>
                </div>
=======
                {contactDetails.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-6 p-6 rounded-[32px] bg-gray-50 border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#64191E] shadow-sm group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-black text-gray-400 uppercase tracking-widest mb-1">{item.title}</div>
                      <div className="text-xl font-black text-[#383337]">{item.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
>>>>>>> 627c2d2 (Refonte visuelle complète : design moderne, animations et bandeau cookie)
              </div>

              {/* Business Places - Refonte complète pour la lisibilité */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#1a1819] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
              >
                {/* Effet visuel en arrière-plan */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-revolt-red/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-revolt-red rounded-2xl flex items-center justify-center shadow-lg shadow-revolt-red/20">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight uppercase italic">Nos points de service</h3>
                  </div>

                  <div className="space-y-12">
                    {places.map((place, idx) => (
                      <motion.div 
                        key={idx} 
                        className="group flex gap-6 items-start cursor-default"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Pointeur de carte corrigé (Blanc sur Rouge) */}
                        <div className="mt-1 w-10 h-10 shrink-0 bg-revolt-red rounded-full flex items-center justify-center shadow-lg shadow-revolt-red/30 group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="w-5 h-5 text-white fill-white/20" />
                        </div>

                        <div className="space-y-2">
                          <div className="text-white font-black text-xl uppercase tracking-wider group-hover:text-revolt-red transition-colors">
                            {place.city}
                          </div>
                          <div className="text-gray-400 font-medium leading-relaxed max-w-[250px] group-hover:text-gray-200 transition-colors">
                            {place.address}
                          </div>
                          {/* Ligne de séparation subtile entre les items */}
                          {idx !== places.length - 1 && (
                            <div className="w-12 h-px bg-white/5 mt-8 group-hover:w-24 transition-all duration-500" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-[50px] p-8 md:p-14 border border-gray-100 shadow-2xl shadow-gray-100 relative">
               <div className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-4 tracking-tight">Demande de Soumission</h2>
                  <p className="text-gray-500 font-medium">Remplissez ce formulaire et nous analyserons vos besoins gratuitement.</p>
               </div>
               <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Placeholder or Visual Detail */}
      <section className="py-20 bg-slate-50 text-center border-t border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8">
           <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-1 bg-[#64191E] rounded-full" />
              <p className="text-[#383337] font-black uppercase tracking-[0.3em] text-sm">Expertise Technique au Sommet</p>
           </div>
        </div>
      </section>
    </main>
  )
}
