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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

const postes = [
  {
    id: 1,
    title: 'Électricien Compagnon',
    type: 'Temps plein',
    location: 'Baie-Comeau / Côte-Nord',
    tags: ['CCQ', 'Expérimenté']
  },
  {
    id: 2,
    title: 'Apprenti Électricien',
    type: 'Temps plein',
    location: 'Chantiers Variés',
    tags: ['Motivation', 'Apprentissage']
  },
  {
    id: 3,
    title: 'Contremaître de Chantier',
    type: 'Temps plein',
    location: 'Secteur Industriel',
    tags: ['Leadership', 'Expertise']
  },
]

export default function CarrierePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Carrière */}
      <section className="pt-40 pb-24 bg-slate-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#64191E]/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10 text-center md:text-left">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-[#64191E] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Rejoignez l'élite</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Propulsez votre <br /><span className="text-[#64191E]">Carrière.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              Devenir un membre de ReVolt Électrique, c'est choisir l'excellence technique, la sécurité et des défis à la hauteur de votre talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pourquoi nous? */}
      <section className="py-24 md:py-32">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center md:text-left">
                <div className="w-16 h-16 bg-red-50 text-[#64191E] rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                   <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4 uppercase tracking-tight">Salaire Élite</h3>
                <p className="text-gray-500">Rémunération supérieure aux standards de l'industrie et avantages complets CCQ.</p>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.1 }} className="text-center md:text-left">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                   <GraduationCap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4 uppercase tracking-tight">Formation</h3>
                <p className="text-gray-500">Accès aux dernières certifications et technologies de pointe du secteur électrique.</p>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.2 }} className="text-center md:text-left">
                <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                   <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4 uppercase tracking-tight">Équipe Pro</h3>
                <p className="text-gray-500">Évoluez au sein d'une équipe soudée où le respect et l'entraide sont fondamentaux.</p>
             </motion.div>

             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} transition={{ delay: 0.3 }} className="text-center md:text-left">
                <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0">
                   <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4 uppercase tracking-tight">Défis Variés</h3>
                <p className="text-gray-500">De l'industriel lourd au commercial complexe, vos journées ne se ressemblent jamais.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Postes Ouverts */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-[#383337] tracking-tight">Postes Ouverts</h2>
              <p className="text-gray-500 text-xl font-medium mt-4">Votre place est peut-être ici.</p>
            </div>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
             {postes.map((poste, idx) => (
                <motion.div 
                  key={poste.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 hover:border-[#64191E]/20 hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                   <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                         {poste.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="bg-[#64191E]/5 text-[#64191E] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
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
                    className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#383337] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#64191E] transition-all duration-300"
                   >
                    Postuler
                    <ChevronRight className="w-5 h-5" />
                   </Link>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Candidature Spontanée */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
           <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black text-[#383337] mb-10 tracking-tight leading-none">Pas de poste <br />correspondant?</h2>
              <p className="text-xl text-gray-500 mb-14 leading-relaxed font-medium">
                Nous sommes toujours à la recherche de passionnés. Envoyez-nous votre candidature spontanée et faites-nous découvrir votre expertise.
              </p>
              <Link
                href="/nous-joindre"
                className="inline-flex items-center gap-4 bg-[#64191E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#7a2027] transition-all duration-300 shadow-2xl shadow-red-900/40 transform hover:-translate-y-2"
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
