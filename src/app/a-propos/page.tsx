'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Trophy, Target, Award } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section - Plus Lumineux */}
      <section className="pt-40 pb-24 bg-slate-50 overflow-hidden relative border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-4xl"
          >
            <span className="text-[#64191E] font-black tracking-[0.2em] uppercase text-sm mb-6 block">Notre Identité</span>
            <h1 className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight leading-[1.05]">
              Propulsé par <br /><span className="text-[#64191E]">l'Excellence.</span>
            </h1>
            <p className="text-2xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              ReVolt Électrique n'est pas qu'une entreprise d'électricité. C'est un engagement envers la sécurité, l'innovation et la satisfaction totale de nos clients à travers le Québec.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire & Stats */}
      <section className="py-24 md:py-32">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
             >
                <h2 className="text-4xl md:text-5xl font-black text-[#383337] mb-8 tracking-tight">Notre Histoire</h2>
                <div className="space-y-6">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Fondée sur des valeurs de rigueur technique et de transparence, ReVolt Électrique a rapidement su s'imposer comme une référence dans le secteur industriel, commercial et minier.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Chaque projet que nous entreprenons est guidé par une mission simple : livrer une puissance électrique fiable, sécurisée et optimisée pour les besoins spécifiques de nos partenaires. Nos maîtres électriciens sont parmi les plus qualifiés de la province.
                  </p>
                </div>
             </motion.div>
             
             <motion.div 
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeInUp}
               className="bg-gray-50 p-12 rounded-[50px] border border-gray-100 grid grid-cols-2 gap-10"
             >
                <div className="text-center">
                   <div className="text-5xl font-black text-[#64191E] mb-2 tracking-tighter">10+</div>
                   <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Années d'expertise</div>
                </div>
                <div className="text-center">
                   <div className="text-5xl font-black text-[#64191E] mb-2 tracking-tighter">500+</div>
                   <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Projets livrés</div>
                </div>
                <div className="text-center">
                   <div className="text-5xl font-black text-[#64191E] mb-2 tracking-tighter">100%</div>
                   <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Conformité RBQ</div>
                </div>
                <div className="text-center">
                   <div className="text-5xl font-black text-[#64191E] mb-2 tracking-tighter">24/7</div>
                   <div className="text-xs font-black text-gray-400 uppercase tracking-widest">Support Urgence</div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#383337] mb-6 tracking-tight">Nos Valeurs Piliers</h2>
            <p className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">Ce qui définit chaque intervention de nos maîtres électriciens au quotidien.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-12 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 group"
             >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#64191E] mb-8 group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                   <ShieldCheck className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#383337] mb-5 tracking-tight">Intégrité</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Une transparence totale sur nos diagnostics et nos tarifs, sans mauvaises surprises pour nos clients.</p>
             </motion.div>

             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="p-12 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 group"
             >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#64191E] mb-8 group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                   <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#383337] mb-5 tracking-tight">Qualité Supérieure</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Nous ne faisons aucun compromis sur la qualité des matériaux et la précision de l'installation.</p>
             </motion.div>

             <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="p-12 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 group"
             >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#64191E] mb-8 group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                   <Target className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#383337] mb-5 tracking-tight">Innovation</h3>
                <p className="text-gray-600 text-lg leading-relaxed">Toujours à l'affût des nouvelles technologies pour vous offrir les solutions les plus durables et efficaces.</p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
           <Award className="w-16 h-16 text-[#64191E] mx-auto mb-8 opacity-20" />
           <h2 className="text-2xl font-black text-[#383337] mb-4 uppercase tracking-widest">Entreprise Certifiée</h2>
           <p className="text-gray-400 font-bold tracking-widest">RBQ: 5742-5362-01 | CMEQ | ACQ</p>
        </div>
      </section>
    </main>
  )
}
