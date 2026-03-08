'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const realisations = [
  {
    id: 1,
    title: 'Optimisation Industrielle',
    category: 'Industriel',
    description: 'Mise à niveau complète du système de distribution électrique pour une usine de transformation.',
    size: 'large'
  },
  {
    id: 2,
    title: 'Complexe Commercial',
    category: 'Commercial',
    description: 'Installation de systèmes d\'éclairage intelligents et distribution de puissance.',
    size: 'small'
  },
  {
    id: 3,
    title: 'Infrastructures Minières',
    category: 'Minier',
    description: 'Maintenance préventive haute tension sur site isolé.',
    size: 'small'
  },
  {
    id: 4,
    title: 'Rénovation Institutionnelle',
    category: 'Commercial',
    description: 'Mise aux normes complète des systèmes électriques d\'un établissement scolaire.',
    size: 'small'
  },
  {
    id: 5,
    title: 'Projet Résidentiel Premium',
    category: 'Résidentiel',
    description: 'Domotique avancée et entrée électrique souterraine pour une résidence de luxe.',
    size: 'large'
  },
  {
    id: 6,
    title: 'Bornes de Recharge',
    category: 'Commercial',
    description: 'Déploiement d\'une flotte de bornes de recharge rapide pour un parc industriel.',
    size: 'small'
  },
]

export default function RealisationsPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-[#64191E] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Portfolio</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Nos <br /><span className="text-[#64191E]">Réalisations.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Découvrez comment nous propulsons les projets de nos clients avec des solutions électriques de précision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid Réalisations */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {realisations.map((projet, idx) => (
              <motion.div 
                key={projet.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`group relative bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 ${projet.size === 'large' ? 'lg:col-span-2' : ''}`}
              >
                {/* Image Placeholder */}
                <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#64191E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <ImageIcon className="w-16 h-16 text-gray-200 group-hover:scale-110 group-hover:text-[#64191E]/20 transition-all duration-700" />
                   
                   <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md text-[#383337] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm border border-white/20">
                        {projet.category}
                      </span>
                   </div>
                </div>

                <div className="p-10">
                   <h3 className="text-2xl font-black text-[#383337] mb-4 group-hover:text-[#64191E] transition-colors tracking-tight">
                    {projet.title}
                   </h3>
                   <p className="text-gray-500 text-lg leading-relaxed mb-8">
                    {projet.description}
                   </p>
                   <Link 
                    href="/nous-joindre"
                    className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#383337] hover:text-[#64191E] transition-colors"
                   >
                    Demander une expertise similaire
                    <ArrowRight className="w-4 h-4" />
                   </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Réalisations */}
      <section className="py-24 md:py-32 bg-slate-50">
         <div className="container-custom mx-auto px-4 md:px-8">
            <div className="bg-[#383337] rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#64191E]/20 blur-[100px] rounded-full" />
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight">
                    Votre projet mérite <br />une attention de maître.
                  </h2>
                  <Link
                    href="/nous-joindre"
                    className="inline-flex items-center gap-4 bg-[#64191E] text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-[#7a2027] transition-all duration-300 shadow-2xl shadow-red-900/40 transform hover:-translate-y-2"
                  >
                    Lancer mon projet
                    <ArrowRight className="w-6 h-6" />
                  </Link>
               </div>
            </div>
         </div>
      </section>
    </main>
  )
}
