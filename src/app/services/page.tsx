'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Zap,
  Factory,
  Building2,
  Cable,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Hammer,
  Lightbulb,
  HardHat
} from 'lucide-react'
import Link from 'next/link'
import {
  IndustrialIllustration,
  CommercialIllustration,
  PowerLineIllustration,
  EmergencyIllustration,
} from '@/components/ServiceIllustrations'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function ServicesPage() {
  const sections = [
    {
      id: "industriel",
      title: "Industriel / Minier",
      subtitle: "Haute puissance & Infrastructure",
      description: "Nous possedons une expertise unique pour les environnements exigeants. Nos electriciens sont formes pour intervenir sur des infrastructures complexes en respectant les normes de securite les plus strictes.",
      features: [
        "Maintenance preventive de transformateurs",
        "Installation de moteurs haute tension",
        "Cablage industriel structure",
        "Automatisation et controle de procedes",
        "Eclairage industriel haute performance"
      ],
      icon: <Factory className="w-12 h-12" />,
      color: "bg-blue-50 text-blue-600",
      illustration: <IndustrialIllustration />,
    },
    {
      id: "commercial",
      title: "Commercial",
      subtitle: "Solutions d'affaires & Efficacite",
      description: "Pour vos bureaux, commerces ou complexes immobiliers, nous livrons des installations qui allient esthetique, securite et efficacite energetique.",
      features: [
        "Systemes d'eclairage LED intelligents",
        "Renovation electrique complete",
        "Installation de bornes de recharge",
        "Distribution electrique de puissance",
        "Maintenance de batiments commerciaux"
      ],
      icon: <Building2 className="w-12 h-12" />,
      color: "bg-amber-50 text-amber-600",
      illustration: <CommercialIllustration />,
    },
    {
      id: "lignes",
      title: "Ligne electrique basse et moyenne tension",
      subtitle: "Distribution & Raccordement",
      description: "Installation, entretien et reparation de lignes electriques basse et moyenne tension pour les secteurs residentiel, commercial et industriel. De la distribution souterraine aux raccordements aeriens, notre equipe maitrise tous les aspects de la ligne electrique.",
      features: [
        "Installation de lignes aeriennes et souterraines",
        "Raccordement au reseau de distribution",
        "Mise a niveau de panneaux de distribution",
        "Cablage basse et moyenne tension",
        "Entretien preventif de lignes electriques",
        "Installation de poteaux et structures"
      ],
      icon: <Cable className="w-12 h-12" />,
      color: "bg-emerald-50 text-emerald-600",
      illustration: <PowerLineIllustration />,
    },
    {
      id: "urgence",
      title: "Service d'urgence 24/7",
      subtitle: "Reponse immediate & Securite",
      description: "Une panne electrique peut paralyser votre entreprise ou mettre en danger votre securite. Notre equipe d'urgence est prete a intervenir a tout moment, de La Malbaie a Sept-Iles et Fermont.",
      features: [
        "Depannage rapide 24h/24",
        "Securisation apres sinistre",
        "Reparation de bris majeurs",
        "Remplacement de panneaux d'urgence",
        "Diagnostic de pannes complexes"
      ],
      icon: <Zap className="w-12 h-12" />,
      color: "bg-red-50 text-red-600",
      illustration: <EmergencyIllustration />,
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black text-[#383337] mb-6 tracking-tight">
              Nos <span className="text-[#64191E]">expertises</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-500 leading-relaxed font-medium">
              Une gamme complete de solutions electriques pour propulser vos projets commerciaux, industriels et de distribution sur toute la Cote-Nord.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services details */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="space-y-32">
            {sections.map((section, idx) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}
              >
                <div className="flex-1">
                  <motion.div variants={fadeUp} className={`w-20 h-20 ${section.color} rounded-3xl flex items-center justify-center mb-8`}>
                    {section.icon}
                  </motion.div>
                  <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
                    {section.subtitle}
                  </motion.span>
                  <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
                    {section.title}
                  </motion.h2>
                  <motion.p variants={fadeUp} className="text-lg text-gray-500 mb-10 leading-relaxed">
                    {section.description}
                  </motion.p>

                  <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#64191E] shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div variants={fadeUp} className="mt-12">
                    <Link
                      href="/nous-joindre"
                      className="inline-flex items-center gap-2 text-[#383337] font-black hover:text-[#64191E] transition-colors group"
                    >
                      Demander une soumission pour ce service
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="flex-1 w-full h-[400px] md:h-[500px] rounded-[32px] relative overflow-hidden group border border-gray-100">
                  {section.illustration}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location de RDT — Highlight banner */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <Link href="/location-rdt" className="group block">
              <motion.div
                variants={fadeUp}
                className="relative overflow-hidden bg-[#383337] text-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row md:items-center gap-10"
              >
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#64191E]/20 blur-[120px] rounded-full pointer-events-none" />
                <div className="relative z-10 flex-1">
                  <span className="inline-flex items-center gap-2 text-[#64191E] bg-white px-4 py-2 rounded-full font-bold tracking-widest uppercase text-xs mb-6">
                    <ShieldCheck className="w-4 h-4" />
                    Conformité Hydro-Québec
                  </span>
                  <h2 className="text-3xl md:text-5xl font-black mb-5 tracking-tight">
                    Location de RDT habilités
                  </h2>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                    Notre réseau interne de responsables des travaux habilités au Code de sécurité des travaux (CDST 7e édition) d&apos;Hydro-Québec, prêts à intervenir sur vos chantiers en poste, centrale et réseau partout sur la Côte-Nord.
                  </p>
                  <span className="inline-flex items-center gap-3 mt-8 font-black uppercase tracking-widest text-sm group-hover:text-[#64191E] transition-colors">
                    Découvrir la location de RDT
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
                <div className="relative z-10 hidden md:flex w-32 h-32 bg-[#64191E] rounded-3xl items-center justify-center shrink-0">
                  <HardHat className="w-16 h-16 text-white" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us — Asymmetric */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-4 tracking-tight">L&apos;excellence ReVolt</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">Pourquoi nous sommes le partenaire privilegie des entreprises de la Cote-Nord.</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: <ShieldCheck className="w-10 h-10" />, title: "Securite sans compromis", desc: "Nous appliquons les protocoles les plus rigoureux pour proteger vos employes et vos actifs." },
              { icon: <Lightbulb className="w-10 h-10" />, title: "Innovation technique", desc: "Nous utilisons les dernieres technologies pour optimiser vos installations et reduire vos couts." },
              { icon: <Hammer className="w-10 h-10" />, title: "Precision d'execution", desc: "Chaque connexion, chaque cable est installe avec un souci du detail qui fait notre reputation." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-10 rounded-[28px] border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(100,25,30,0.08)] transition-all duration-500 group"
              >
                <div className="text-[#64191E] mb-6 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-black text-[#383337] mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-[#383337] mb-10 leading-none tracking-tight">Besoin d&apos;un diagnostic expert?</h2>
            <Link
              href="/nous-joindre"
              className="inline-flex items-center gap-4 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#4e1318] transition-all duration-300 shadow-revolt-lg transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
            >
              Parler a un electricien
              <Zap className="w-6 h-6 fill-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
