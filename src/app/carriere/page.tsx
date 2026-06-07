'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Users,
  GraduationCap,
  Rocket,
  MapPin,
  Clock,
  ChevronRight,
  Send
} from 'lucide-react'
import Link from 'next/link'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

const postes = [
  {
    id: 1,
    title: 'Electricien compagnon',
    type: 'Temps plein',
    location: 'Baie-Comeau / Cote-Nord',
    tags: ['CCQ', 'Experimente']
  },
  {
    id: 2,
    title: 'Apprenti electricien',
    type: 'Temps plein',
    location: 'Chantiers varies',
    tags: ['Motivation', 'Apprentissage']
  },
  {
    id: 3,
    title: 'Contremaitre de chantier',
    type: 'Temps plein',
    location: 'Secteur industriel',
    tags: ['Leadership', 'Expertise']
  },
]

export default function CarrierePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#64191E]/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Rejoignez l&apos;elite</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Propulsez votre <br /><span className="text-[#64191E]">carriere.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              Devenir un membre de ReVolt Electrique, c&apos;est choisir l&apos;excellence technique, la securite et des defis a la hauteur de votre talent.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: <Zap className="w-8 h-8" />, color: 'bg-red-50 text-[#64191E]', title: 'Salaire elite', desc: "Remuneration superieure aux standards de l'industrie et avantages complets CCQ." },
              { icon: <GraduationCap className="w-8 h-8" />, color: 'bg-blue-50 text-blue-600', title: 'Formation', desc: "Acces aux dernieres certifications et technologies de pointe du secteur electrique." },
              { icon: <Users className="w-8 h-8" />, color: 'bg-amber-50 text-amber-600', title: 'Equipe pro', desc: "Evoluez au sein d'une equipe soudee ou le respect et l'entraide sont fondamentaux." },
              { icon: <Rocket className="w-8 h-8" />, color: 'bg-green-50 text-green-600', title: 'Defis varies', desc: "De l'industriel lourd au commercial complexe, vos journees ne se ressemblent jamais." },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center md:text-left">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#383337] tracking-tight">Postes ouverts</h2>
              <p className="text-gray-500 text-xl font-medium mt-4">Votre place est peut-etre ici.</p>
            </div>
          </div>

          <motion.div
            className="space-y-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
             {postes.map((poste) => (
                <motion.div
                  key={poste.id}
                  variants={fadeUp}
                  className="group bg-white rounded-[28px] p-8 md:p-10 border border-gray-100 hover:border-[#64191E]/20 hover:shadow-[0_30px_60px_-15px_rgba(100,25,30,0.08)] transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                   <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                         {poste.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="bg-[#64191E]/5 text-[#64191E] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                               {tag}
                            </span>
                         ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-[#383337] mb-2">{poste.title}</h3>
                      <div className="flex items-center gap-6 text-gray-400 font-medium">
                         <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {poste.location}
                         </div>
                         <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {poste.type}
                         </div>
                      </div>
                   </div>
                   <Link
                    href="/nous-joindre"
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#383337] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#64191E] transition-all duration-300 active:scale-[0.98]"
                   >
                    Postuler
                    <ChevronRight className="w-5 h-5" />
                   </Link>
                </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Spontaneous Application */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-[#383337] mb-10 tracking-tight leading-none" style={{ textWrap: 'balance' }}>Pas de poste correspondant?</h2>
              <p className="text-xl text-gray-500 mb-14 leading-relaxed font-medium">
                Nous sommes toujours a la recherche de passionnes. Envoyez-nous votre candidature spontanee et faites-nous decouvrir votre expertise.
              </p>
              <Link
                href="/nous-joindre"
                className="inline-flex items-center gap-4 bg-[#64191E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#4e1318] transition-all duration-300 shadow-revolt-lg transform hover:-translate-y-2 active:translate-y-0 active:scale-[0.98]"
              >
                Envoyer mon CV
                <Send className="w-6 h-6" />
              </Link>
           </div>
        </div>
      </section>
    </main>
  )
}
