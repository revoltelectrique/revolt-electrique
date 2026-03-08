'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Zap,
  Building2
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

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
              </div>

              {/* Business Places - Refonte complète pour la lisibilité */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-[#1a1819] rounded-[40px] p-10 text-white relative overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
              >
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
