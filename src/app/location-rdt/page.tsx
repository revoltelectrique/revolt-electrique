'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  HardHat,
  Award,
  Zap,
  Building2,
  Factory,
  UtilityPole,
  ChevronDown,
} from 'lucide-react'
import RdtContactForm from '@/components/RdtContactForm'

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function LocationRdtPage() {
  const offre = [
    'RDT habilités CDST 7e édition (Poste, Centrale, Ligne de transport)',
    'Réseau interne de RDT basés sur la Côte-Nord et partout au Québec',
    'RDT détenant l\'ensemble des modules d\'habilitation du complexe Manicouagan',
    'Disponibilité pour petits et grands projets',
    'Support et soutien technique CDST inclus',
    'Équipement de protection individuelle complet fourni (incluant arc-flash)',
    'Immatriculation CCQ',
  ]

  const avantages = [
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Maître électricien RBQ',
      desc: "Nos RDT viennent du terrain, pas seulement de la paperasse. Une expertise industrielle réelle, appuyée par une entreprise de maîtres électriciens certifiés RBQ.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: 'Sécurité sans compromis',
      desc: "Application rigoureuse du Code de sécurité des travaux et des encadrements d'Hydro-Québec. La protection de votre personnel et de vos installations passe avant tout.",
    },
  ]

  const secteurs = [
    { icon: <Building2 className="w-7 h-7" />, label: 'Poste' },
    { icon: <Factory className="w-7 h-7" />, label: 'Centrale' },
    { icon: <UtilityPole className="w-7 h-7" />, label: 'Ligne de transport' },
  ]

  const faqs = [
    {
      question: "Qu'est-ce qu'un responsable des travaux (RDT) habilité?",
      answer:
        "Le responsable des travaux (RDT) est la personne habilitée qui applique les mesures du Code de sécurité des travaux (CDST) d'Hydro-Québec sur le chantier. Il coordonne le travail dans la zone de travail, assure la maîtrise des risques électriques et fait le lien avec les encadrements de sécurité du donneur d'ordre.",
    },
    {
      question: "Pourquoi un entrepreneur a-t-il besoin d'un RDT pour des travaux Hydro-Québec?",
      answer:
        "Pour tout entrepreneur dont le client est Hydro-Québec, disposer d'un RDT habilité est une exigence contractuelle incontournable. Mobiliser et maintenir ce personnel certifié à l'interne est un défi : ReVolt prend cette responsabilité en charge avec un réseau de RDT déjà habilités et disponibles.",
    },
    {
      question: "Quels types de RDT ReVolt peut-il fournir?",
      answer:
        "Nos RDT sont habilités au CDST 7e édition pour les chantiers en Poste, en Centrale et sur les Lignes de transport. Ils détiennent également l'ensemble des modules d'habilitation du complexe Manicouagan.",
    },
    {
      question: "Vos RDT sont-ils disponibles ailleurs que sur la Côte-Nord?",
      answer:
        "Oui. Notre réseau interne de RDT est basé sur la Côte-Nord, ce qui assure réactivité et déploiement rapide dans la région, mais nos responsables des travaux sont disponibles partout au Québec selon vos besoins de chantier.",
    },
    {
      question: "Qu'est-ce qui est inclus dans la location d'un RDT?",
      answer:
        "La location comprend un RDT habilité CDST, le support et le soutien technique CDST, l'équipement de protection individuelle complet (incluant arc-flash) et l'immatriculation CCQ. Nous nous adaptons aussi bien aux petits qu'aux grands projets.",
    },
    {
      question: "Comment obtenir un RDT pour mon prochain chantier?",
      answer:
        "Remplissez le formulaire de demande de rencontre sur cette page ou communiquez avec nous au 418-587-5403. Un expert RDT validera vos exigences de conformité et la disponibilité de nos responsables des travaux habilités.",
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-50 border-b border-gray-100">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#64191E 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-[#64191E] text-sm font-bold mb-8"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="tracking-wide uppercase">Conformité Hydro-Québec</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-7xl font-black text-[#383337] mb-8 tracking-tight leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              Vos <span className="text-[#64191E]">RDT habilités</span>, prêts à intervenir
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              ReVolt met à disposition son réseau interne de responsables des travaux habilités au Code de sécurité des travaux (CDST, 7e édition) pour les entrepreneurs qui exécutent des travaux dans les installations d&apos;Hydro-Québec : postes, centrales et lignes de transport. Nos RDT détiennent l&apos;ensemble des modules d&apos;habilitation du complexe Manicouagan et sont disponibles partout au Québec.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
              <Link
                href="#rencontre"
                className="group flex items-center justify-center gap-3 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#4e1318] transition-all duration-300 shadow-revolt hover:shadow-revolt-lg transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
              >
                Parler à un expert RDT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Qu'est-ce qu'un RDT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
              Le rôle clé sur vos chantiers HQ
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
              Qu&apos;est-ce qu&apos;un responsable des travaux?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-gray-500 mb-6 leading-relaxed">
              Le responsable des travaux (RDT) est la personne habilitée qui applique les mesures du Code de sécurité des travaux d&apos;Hydro-Québec sur le chantier. Il coordonne le travail dans la zone de travail, assure la maîtrise des risques électriques et fait le lien avec les encadrements de sécurité du donneur d&apos;ordre.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-gray-500 leading-relaxed">
              Pour tout entrepreneur dont le client est Hydro-Québec, disposer d&apos;un RDT habilité est une exigence contractuelle incontournable. Mobiliser et maintenir ce personnel certifié à l&apos;interne représente toutefois un défi : c&apos;est exactement ce que ReVolt prend en charge pour vous, avec un réseau de RDT déjà habilités — détenant l&apos;ensemble des modules du complexe Manicouagan — et disponibles sur la Côte-Nord comme partout au Québec.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 3. Notre offre de location */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="flex flex-col md:flex-row gap-16 items-start"
          >
            <div className="flex-1">
              <motion.div variants={fadeUp} className="w-20 h-20 bg-[#64191E]/5 text-[#64191E] rounded-3xl flex items-center justify-center mb-8">
                <HardHat className="w-12 h-12" />
              </motion.div>
              <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
                Service de location
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
                Notre offre de location de RDT
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-gray-500 leading-relaxed max-w-md">
                Une solution clé en main pour répondre à vos exigences de conformité, sans alourdir votre structure. Des RDT habilités, équipés et soutenus, prêts à se joindre à votre équipe de chantier.
              </motion.p>
            </div>

            <motion.ul variants={fadeUp} className="flex-1 w-full grid grid-cols-1 gap-4">
              {offre.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#64191E] shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* 4. Pourquoi ReVolt */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
          <span className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
            L&apos;avantage ReVolt
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-4 tracking-tight">
            Pourquoi louer vos RDT chez nous
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium">
            Une expertise terrain réelle, un ancrage régional et une culture de sécurité sans compromis.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {avantages.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-10 rounded-[28px] border border-gray-100 hover:shadow-[0_30px_60px_-15px_rgba(100,25,30,0.08)] transition-all duration-500 group"
              >
                <div className="text-[#64191E] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-[#383337] mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 5. Secteurs / chapitres couverts */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
              Champs d&apos;intervention
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#383337] tracking-tight">
              Secteurs et contextes couverts
            </h2>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {secteurs.map((secteur, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 bg-[#64191E]/5 text-[#64191E] rounded-2xl flex items-center justify-center">
                  {secteur.icon}
                </div>
                <span className="text-[#383337] font-bold">{secteur.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <span className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
              Questions fréquentes
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#383337] tracking-tight">
              Tout savoir sur la location de RDT
            </h2>
          </div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            {faqs.map((faq, idx) => (
              <motion.details
                key={idx}
                variants={fadeUp}
                className="group bg-gray-50 border border-gray-100 rounded-3xl px-6 md:px-8 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none py-6 text-lg md:text-xl font-black text-[#383337] marker:hidden [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="w-6 h-6 text-[#64191E] shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="text-gray-500 leading-relaxed pb-6 -mt-1">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Formulaire — planifier une rencontre */}
      <section id="rencontre" className="py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <span className="text-[#64191E] font-bold tracking-widest uppercase text-sm mb-4 block">
              Planifier une rencontre
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
              Discutons de vos besoins RDT
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Remplissez le formulaire ci-dessous pour planifier une rencontre avec un expert RDT de ReVolt Électrique. Nous validerons vos exigences de conformité et la disponibilité de nos responsables des travaux habilités.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-[40px] p-6 md:p-12 shadow-sm">
            <RdtContactForm />
          </div>
        </div>
      </section>

      {/* 7. CTA final */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-[#383337] mb-10 leading-none tracking-tight" style={{ textWrap: 'balance' }}>
              Besoin d&apos;un RDT habilité pour votre prochain chantier Hydro-Québec?
            </h2>
            <Link
              href="/nous-joindre"
              className="inline-flex items-center gap-4 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#4e1318] transition-all duration-300 shadow-revolt-lg transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
            >
              Parler à un expert RDT
              <Zap className="w-6 h-6 fill-white" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
