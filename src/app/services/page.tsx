'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Factory, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Hammer,
  Lightbulb
} from 'lucide-react'
import Link from 'next/link'

// Correction de la variante d'animation
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
} as const

export default function ServicesPage() {
  const sections = [
    {
      id: "industriel",
      title: "Industriel / Minier",
      subtitle: "Haute puissance & Infrastructure",
      description: "Nous possédons une expertise unique pour les environnements exigeants. Nos électriciens sont formés pour intervenir sur des infrastructures complexes en respectant les normes de sécurité les plus strictes.",
      features: [
        "Maintenance préventive de transformateurs",
        "Installation de moteurs haute tension",
        "Câblage industriel structuré",
        "Automatisation et contrôle de procédés",
        "Éclairage industriel haute performance"
      ],
      icon: <Factory className="w-12 h-12" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "commercial",
      title: "Commercial",
      subtitle: "Solutions d'affaires & Efficacité",
      description: "Pour vos bureaux, commerces ou complexes immobiliers, nous livrons des installations qui allient esthétique, sécurité et efficacité énergétique.",
      features: [
        "Systèmes d'éclairage LED intelligents",
        "Rénovation électrique complète",
        "Installation de bornes de recharge",
        "Distribution électrique de puissance",
        "Maintenance de bâtiments commerciaux"
      ],
      icon: <Building2 className="w-12 h-12" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      id: "urgence",
      title: "Service d'Urgence 24/7",
      subtitle: "Réponse immédiate & Sécurité",
      description: "Une panne électrique peut paralyser votre entreprise ou mettre en danger votre sécurité. Notre équipe d'urgence est prête à intervenir à tout moment.",
      features: [
        "Dépannage rapide 24h/24",
        "Sécurisation après sinistre",
        "Réparation de bris majeurs",
        "Remplacement de panneaux d'urgence",
        "Diagnostic de pannes complexes"
      ],
      icon: <Zap className="w-12 h-12" />,
      color: "bg-red-50 text-red-600"
    }
  ]

  return (
    <main className="bg-white min-h-screen">
      {/* Header Services */}
      <section className="pt-32 pb-20 bg-slate-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black text-[#383337] mb-6 tracking-tight">
              Nos <span className="text-[#64191E]">Expertises</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed">
              Une gamme complète de solutions électriques pour propulser vos projets résidentiels, commerciaux et industriels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid des services détaillés */}
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
                variants={fadeInUp}
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-start`}
              >
                <div className="flex-1">
                  <div className={`w-20 h-20 ${section.color} rounded-3xl flex items-center justify-center mb-8`}>
                    {section.icon}
                  </div>
                  <span className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
                    {section.subtitle}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {section.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#64191E] shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <Link 
                      href="/nous-joindre"
                      className="inline-flex items-center gap-2 text-[#383337] font-black hover:text-[#64191E] transition-colors group"
                    >
                      Demander une soumission pour ce service
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full h-[400px] md:h-[500px] bg-gray-100 rounded-[40px] relative overflow-hidden group border border-gray-100">
                   <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-50 flex items-center justify-center">
                      <div className="text-gray-300 opacity-50 transform group-hover:scale-110 transition-transform duration-700">
                         {section.icon}
                      </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-4 tracking-tight">L'excellence ReVolt</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Pourquoi nous sommes le partenaire privilégié des entreprises du Québec.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <ShieldCheck className="w-10 h-10 text-[#64191E] mb-6" />
              <h3 className="text-xl font-black text-[#383337] mb-4">Sécurité sans compromis</h3>
              <p className="text-gray-500 leading-relaxed">Nous appliquons les protocoles les plus rigoureux pour protéger vos employés et vos actifs.</p>
            </motion.div>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <Lightbulb className="w-10 h-10 text-[#64191E] mb-6" />
              <h3 className="text-xl font-black text-[#383337] mb-4">Innovation Technique</h3>
              <p className="text-gray-500 leading-relaxed">Nous utilisons les dernières technologies pour optimiser vos installations et réduire vos coûts.</p>
            </motion.div>
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              variants={fadeInUp}
              className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm"
            >
              <Hammer className="w-10 h-10 text-[#64191E] mb-6" />
              <h3 className="text-xl font-black text-[#383337] mb-4">Précision d'exécution</h3>
              <p className="text-gray-500 leading-relaxed">Chaque connexion, chaque câble est installé avec un souci du détail qui fait notre réputation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-[#383337] mb-10 leading-none tracking-tight">Besoin d'un diagnostic expert?</h2>
            <Link 
              href="/nous-joindre"
              className="inline-flex items-center gap-4 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#7a2027] transition-all duration-300 shadow-xl"
            >
              Parler à un électricien
              <Zap className="w-6 h-6 fill-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
