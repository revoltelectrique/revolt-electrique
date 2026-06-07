'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Zap,
  ShieldCheck,
  Clock,
  ArrowRight,
  Factory,
  Building2,
  HardHat,
  ChevronRight
} from 'lucide-react'

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Home() {
  const services = [
    {
      title: "Industriel / Minier",
      description: "Expertise de pointe pour les infrastructures critiques et maintenance de haute puissance.",
      icon: <Factory className="w-7 h-7" />,
      link: "/services#industriel",
      accent: "group-hover:bg-blue-600",
    },
    {
      title: "Commercial",
      description: "Optimisation energetique et installations electriques pour vos espaces d'affaires.",
      icon: <Building2 className="w-7 h-7" />,
      link: "/services#commercial",
      accent: "group-hover:bg-amber-600",
    },
    {
      title: "Urgence 24/7",
      description: "Disponibilite totale pour securiser vos installations en cas de defaillance critique.",
      icon: <Zap className="w-7 h-7" />,
      link: "/services#urgence",
      accent: "group-hover:bg-revolt-red",
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(#64191E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-revolt-red/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-revolt-red/3 blur-[100px] rounded-full pointer-events-none" />

        <div className="container-custom relative z-10 mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-revolt-red text-sm font-bold mb-8"
            >
              <HardHat className="w-4 h-4" />
              <span className="tracking-wide uppercase">Maitres electriciens certifies</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-8xl font-black text-revolt-dark mb-8 tracking-tight leading-[1.05]"
              style={{ textWrap: 'balance' }}
            >
              L&apos;expertise <span className="text-revolt-red">electrique</span> <br />
              propulsee par l&apos;innovation.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-gray-500 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              De l&apos;industrie miniere aux projets commerciaux complexes, ReVolt Electrique livre des solutions haute performance avec une precision chirurgicale.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link
                href="/nous-joindre"
                className="group flex items-center justify-center gap-3 bg-revolt-red text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-revolt-red-dark transition-all duration-300 shadow-revolt hover:shadow-revolt-lg transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98]"
              >
                Demander une soumission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="flex items-center justify-center bg-white border-2 border-gray-100 text-revolt-dark px-10 py-5 rounded-2xl font-black text-lg hover:border-revolt-red hover:text-revolt-red transition-all duration-300 shadow-sm active:scale-[0.98]"
              >
                Nos expertises
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - Asymmetric Layout */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="text-revolt-red font-bold tracking-[0.2em] uppercase text-sm mb-6 block">Services & Solutions</motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black text-revolt-dark tracking-tighter leading-none">
                Une puissance maitrisee <br />pour chaque secteur.
              </motion.h2>
            </motion.div>
            <Link href="/services" className="group flex items-center gap-2 text-revolt-dark font-bold text-lg hover:text-revolt-red transition-colors underline decoration-2 underline-offset-8 decoration-revolt-red/30 hover:decoration-revolt-red">
              Tous nos services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Asymmetric: first card large, two smaller stacked */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Large featured card */}
            <motion.div
              variants={fadeUp}
              className="md:col-span-7 group"
            >
              <Link href={services[0].link} className="block p-10 md:p-14 bg-gray-50 rounded-[32px] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(56,51,55,0.08)] transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-8 text-revolt-dark ${services[0].accent} group-hover:text-white transition-all duration-500`}>
                    {services[0].icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-revolt-dark mb-5 tracking-tight group-hover:text-revolt-red transition-colors">{services[0].title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                    {services[0].description}
                  </p>
                  <span className="flex items-center gap-3 text-revolt-dark font-bold text-sm uppercase tracking-widest group-hover:text-revolt-red transition-colors">
                    Details de l&apos;offre
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Two stacked smaller cards */}
            <div className="md:col-span-5 flex flex-col gap-8">
              {services.slice(1).map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUp}
                  className="group flex-1"
                >
                  <Link href={service.link} className="block p-8 bg-gray-50 rounded-[32px] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(56,51,55,0.08)] transition-all duration-500 h-full">
                    <div className={`w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mb-6 text-revolt-dark ${service.accent} group-hover:text-white transition-all duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-black text-revolt-dark mb-3 tracking-tight group-hover:text-revolt-red transition-colors">{service.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <span className="flex items-center gap-3 text-revolt-dark font-bold text-sm uppercase tracking-widest group-hover:text-revolt-red transition-colors">
                      Details de l&apos;offre
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-revolt-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-revolt-red/5" />
        {/* Subtle noise texture on dark */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { value: '100%', label: 'Satisfaction' },
              { value: '24/7', label: 'Urgence' },
              { value: 'RBQ', label: 'Certifie' },
              { value: '$0', label: 'Soumission' },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeUp} className="text-center">
                <div className="text-5xl font-black text-revolt-red mb-3 tracking-tighter">{stat.value}</div>
                <div className="text-sm font-semibold tracking-widest uppercase opacity-50">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <motion.div
            className="bg-gray-50 rounded-[48px] p-12 md:p-24 text-center border border-gray-100 overflow-hidden relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {/* Ambient glow inside card */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-revolt-red/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10">
              <motion.h2 variants={fadeUp} className="text-4xl md:text-7xl font-black text-revolt-dark mb-10 tracking-tight leading-none" style={{ textWrap: 'balance' }}>
                Pret a mettre votre projet sous tension?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-gray-500 mb-14 max-w-2xl mx-auto font-medium">
                Nos experts sont prets a relever vos defis techniques les plus ambitieux. Contactez-nous des aujourd&apos;hui.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  href="/nous-joindre"
                  className="inline-flex items-center gap-5 bg-revolt-red text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-revolt-red-dark transition-all duration-300 shadow-revolt-lg transform hover:-translate-y-2 active:translate-y-0 active:scale-[0.98]"
                >
                  Lancer mon projet
                  <Zap className="w-6 h-6 fill-white" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
