'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Trophy, Target, Award } from 'lucide-react'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-slate-50 overflow-hidden relative border-b border-gray-100">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Notre identite</motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight leading-[1.05]">
              Propulse par <br /><span className="text-[#64191E]">l&apos;excellence.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-2xl text-gray-500 leading-relaxed font-medium max-w-2xl">
              ReVolt Electrique n&apos;est pas qu&apos;une entreprise d&apos;electricite. C&apos;est un engagement envers la securite, l&apos;innovation et la satisfaction totale de nos clients a travers le Quebec.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story & Stats */}
      <section className="py-24 md:py-32">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={stagger}
             >
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#383337] mb-8 tracking-tight">Notre histoire</motion.h2>
                <motion.div variants={fadeUp} className="space-y-6">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Fondee sur des valeurs de rigueur technique et de transparence, ReVolt Electrique a rapidement su s&apos;imposer comme une reference dans le secteur industriel, commercial et minier.
                  </p>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Chaque projet que nous entreprenons est guide par une mission simple : livrer une puissance electrique fiable, securisee et optimisee pour les besoins specifiques de nos partenaires. Nos maitres electriciens sont parmi les plus qualifies de la province.
                  </p>
                </motion.div>
             </motion.div>

             <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={stagger}
               className="bg-gray-50 p-12 rounded-[40px] border border-gray-100 grid grid-cols-2 gap-10"
             >
                {[
                  { value: '10+', label: "Annees d'expertise" },
                  { value: '500+', label: 'Projets livres' },
                  { value: '100%', label: 'Conformite RBQ' },
                  { value: '24/7', label: 'Support urgence' },
                ].map((stat, idx) => (
                  <motion.div key={idx} variants={fadeUp} className="text-center">
                    <div className="text-5xl font-black text-[#64191E] mb-2 tracking-tighter">{stat.value}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
             </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-[#383337] mb-6 tracking-tight">Nos valeurs piliers</motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 text-xl font-medium max-w-2xl mx-auto">Ce qui definit chaque intervention de nos maitres electriciens au quotidien.</motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: 'Integrite', desc: "Une transparence totale sur nos diagnostics et nos tarifs, sans mauvaises surprises pour nos clients." },
              { icon: <Trophy className="w-10 h-10" />, title: 'Qualite superieure', desc: "Nous ne faisons aucun compromis sur la qualite des materiaux et la precision de l'installation." },
              { icon: <Target className="w-10 h-10" />, title: 'Innovation', desc: "Toujours a l'affut des nouvelles technologies pour vous offrir les solutions les plus durables et efficaces." },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="p-12 bg-white rounded-[32px] border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(100,25,30,0.08)] transition-all duration-500 group"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-[#64191E] mb-8 group-hover:bg-[#64191E] group-hover:text-white transition-all duration-500">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-black text-[#383337] mb-5 tracking-tight">{val.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
           <Award className="w-16 h-16 text-[#64191E] mx-auto mb-8 opacity-20" />
           <h2 className="text-2xl font-black text-[#383337] mb-4 uppercase tracking-widest">Entreprise certifiee</h2>
           <p className="text-gray-400 font-bold tracking-widest">RBQ: 5742-5362-01 | CMEQ | ACQ</p>
        </div>
      </section>
    </main>
  )
}
