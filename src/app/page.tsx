'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Zap, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Lightbulb, 
  Factory, 
  Building2,
  HardHat,
  ChevronRight
} from 'lucide-react'

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const services = [
    {
      title: "Industriel / Minier",
      description: "Expertise de pointe pour les infrastructures critiques et maintenance de haute puissance.",
      icon: <Factory className="w-8 h-8" />,
      link: "/services#industriel"
    },
    {
      title: "Commercial",
      description: "Optimisation énergétique et installations électriques pour vos espaces d'affaires.",
      icon: <Building2 className="w-8 h-8" />,
      link: "/services#commercial"
    },
    {
      title: "Urgence 24/7",
      description: "Disponibilité totale pour sécuriser vos installations en cas de défaillance critique.",
      icon: <Zap className="w-8 h-8" />,
      link: "/services#urgence"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section - Plus Lumineux et Professionnel */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
        {/* Motif de grille discret en arrière-plan */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#64191E 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <div className="container-custom relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 text-revolt-red text-sm font-bold mb-8"
            >
              <HardHat className="w-4 h-4" />
              <span className="tracking-wide uppercase">Maîtres Électriciens Certifiés</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-8xl font-black text-revolt-dark mb-8 tracking-tight leading-[1.05]"
            >
              L'expertise <span className="text-revolt-red">électrique</span> <br />
              propulsée par l'innovation.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed"
            >
              De l'industrie minière aux projets commerciaux complexes, ReVolt Électrique livre des solutions haute performance avec une précision chirurgicale.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link 
                href="/nous-joindre" 
                className="group flex items-center justify-center gap-3 bg-revolt-red text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-revolt-red-dark transition-all duration-300 shadow-xl shadow-revolt-red/20 hover:shadow-revolt-red/30 transform hover:-translate-y-1"
              >
                Demander une soumission
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/services" 
                className="flex items-center justify-center bg-white border-2 border-gray-100 text-revolt-dark px-10 py-5 rounded-2xl font-black text-lg hover:border-revolt-red hover:text-revolt-red transition-all duration-300 shadow-sm"
              >
                Nos expertises
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Élément graphique moderne */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-revolt-red/5 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Services Section - Clean & Structured */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-revolt-red font-black tracking-[0.2em] uppercase text-sm mb-6 block">Services & Solutions</h2>
              <h3 className="text-4xl md:text-6xl font-black text-revolt-dark tracking-tighter leading-none">
                Une puissance maîtrisée <br />pour chaque secteur.
              </h3>
            </div>
            <Link href="/services" className="group flex items-center gap-2 text-revolt-dark font-black text-lg hover:text-revolt-red transition-colors underline decoration-2 underline-offset-8 decoration-revolt-red/30 hover:decoration-revolt-red">
              Tous nos services
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                className="group p-10 bg-gray-50 rounded-[40px] border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm border border-gray-100 flex items-center justify-center mb-10 text-revolt-red group-hover:bg-revolt-red group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-black text-revolt-dark mb-5 tracking-tight group-hover:text-revolt-red transition-colors">{service.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="flex items-center gap-3 text-revolt-dark font-black text-sm uppercase tracking-widest hover:text-revolt-red transition-colors"
                >
                  Détails de l'offre
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators - Simple & Direct */}
      <section className="py-20 bg-revolt-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-revolt-red/5" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-black text-revolt-red mb-3">100%</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-60">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-revolt-red mb-3">24/7</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-60">Urgence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-revolt-red mb-3">RBQ</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-60">Certifié</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-revolt-red mb-3">$0</div>
              <div className="text-sm font-bold tracking-widest uppercase opacity-60">Soumission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Plus Clair */}
      <section className="py-24 md:py-40 bg-white">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="bg-gray-50 rounded-[60px] p-12 md:p-24 text-center border border-gray-100 overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-revolt-dark mb-10 tracking-tight leading-none">
                Prêt à mettre votre projet <br />sous tension?
              </h2>
              <p className="text-xl text-gray-500 mb-14 max-w-2xl mx-auto font-medium">
                Nos experts sont prêts à relever vos défis techniques les plus ambitieux. Contactez-nous dès aujourd'hui.
              </p>
              <Link
                href="/nous-joindre"
                className="inline-flex items-center gap-5 bg-revolt-red text-white px-12 py-6 rounded-3xl font-black text-xl hover:bg-revolt-red-dark transition-all duration-300 shadow-2xl shadow-revolt-red/30 transform hover:-translate-y-2"
              >
                Lancer mon projet
                <Zap className="w-6 h-6 fill-white" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
