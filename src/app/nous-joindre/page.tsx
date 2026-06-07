'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  Zap,
  MapPin,
  Building2
} from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import EmergencyButton from '@/components/EmergencyButton'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function NousJoindrePage() {
  const contactDetails = [
    {
      title: "Telephone",
      value: "418-587-5403",
      icon: <Phone className="w-6 h-6" />,
      sub: "Lundi au vendredi, 8h - 17h"
    },
    {
      title: "Courriel",
      value: "info@revoltelectrique.com",
      icon: <Mail className="w-6 h-6" />,
      sub: "Reponse sous 24h"
    },
    {
      title: "Urgence 24/7",
      value: "Service de garde",
      icon: <Zap className="w-6 h-6 fill-revolt-red" />,
      sub: "Disponible en tout temps"
    }
  ]

  const places = [
    { city: "Forestville (Siege)", address: "162 route 138 ouest, G0T 1E0" },
    { city: "Baie-Comeau", address: "2592 Bd Lafleche, G5C 1E4" },
    { city: "Fermont", address: "2 rue Garnier, G0G 1J0" },
    { city: "Pessamit", address: "40 Utipan, G0H 1B0" }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Contactez l&apos;expertise</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Parlons de votre <br /><span className="text-[#64191E]">projet.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-500 leading-relaxed font-medium">
              Une question technique ou une demande de soumission? Notre equipe est prete a vous repondre avec precision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Left Column */}
            <div className="lg:col-span-5 space-y-16">

              {/* Contact Cards */}
              <motion.div
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {contactDetails.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex items-center gap-6 p-6 rounded-[28px] bg-gray-50 border border-transparent hover:border-gray-100 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(100,25,30,0.06)] group"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#64191E] shadow-sm group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{item.title}</div>
                      <div className="text-xl font-black text-[#383337]">{item.value}</div>
                      <div className="text-sm text-gray-500 font-medium">{item.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Emergency Button */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <EmergencyButton />
              </motion.div>

              {/* Business Places */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-[#1a1819] rounded-[32px] p-10 text-white relative overflow-hidden shadow-2xl shadow-black/40 border border-white/5"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-revolt-red/10 blur-[80px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-12">
                    <div className="w-12 h-12 bg-revolt-red rounded-2xl flex items-center justify-center shadow-lg shadow-revolt-red/20">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight">Nos points de service</h3>
                  </div>

                  <div className="space-y-10">
                    {places.map((place, idx) => (
                      <motion.div
                        key={idx}
                        className="group flex gap-5 items-start cursor-default"
                        whileHover={{ x: 6 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="mt-1 w-9 h-9 shrink-0 bg-revolt-red/20 rounded-full flex items-center justify-center group-hover:bg-revolt-red transition-all duration-300">
                          <MapPin className="w-4 h-4 text-revolt-red group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <div className="text-white font-black text-lg group-hover:text-revolt-red transition-colors">
                            {place.city}
                          </div>
                          <div className="text-gray-500 font-medium text-sm mt-1 group-hover:text-gray-300 transition-colors">
                            {place.address}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-14 border border-gray-100 shadow-[0_40px_80px_-20px_rgba(56,51,55,0.06)] relative">
               <div className="mb-12">
                  <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-4 tracking-tight">Demande de soumission</h2>
                  <p className="text-gray-500 font-medium">Remplissez ce formulaire et nous analyserons vos besoins gratuitement.</p>
               </div>
               <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Bottom decorative */}
      <section className="py-20 bg-slate-50 text-center border-t border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8">
           <div className="flex flex-col items-center gap-6">
              <div className="w-12 h-1 bg-[#64191E] rounded-full" />
              <p className="text-[#383337] font-black uppercase tracking-[0.3em] text-sm">Expertise technique au sommet</p>
           </div>
        </div>
      </section>
    </main>
  )
}
