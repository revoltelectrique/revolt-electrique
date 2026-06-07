'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Zap, Factory, Building2, Cable, Phone, ArrowRight } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  title: string
  icon: React.ReactNode
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    title: 'Services commerciaux',
    icon: <Building2 className="w-6 h-6" />,
    items: [
      {
        question: 'Quels types de services electriques offrez-vous pour les commerces?',
        answer: "Nous offrons l'installation et la renovation complete de systemes electriques commerciaux, incluant l'eclairage intelligent, les panneaux de distribution, les bornes de recharge pour vehicules electriques, la mise aux normes, l'entretien preventif et les systemes d'alimentation d'urgence. Nous desservons tout le territoire de La Malbaie a Sept-Iles et Fermont.",
      },
      {
        question: "Combien coute une installation electrique commerciale?",
        answer: "Le cout varie selon l'ampleur du projet, la superficie du batiment et les equipements requis. Nous offrons des soumissions gratuites et detaillees pour chaque projet. Contactez-nous pour obtenir une estimation precise adaptee a vos besoins.",
      },
      {
        question: 'Est-ce que vous installez des bornes de recharge pour vehicules electriques?',
        answer: "Oui, nous sommes specialises dans l'installation de bornes de recharge de niveau 2 et niveau 3 pour les commerces, stationnements publics et entreprises sur toute la Cote-Nord. Nous nous occupons de l'analyse de capacite electrique, de l'installation et de la mise en service.",
      },
      {
        question: "Offrez-vous des contrats d'entretien pour les batiments commerciaux?",
        answer: "Oui, nous offrons des programmes d'entretien preventif sur mesure pour les systemes electriques commerciaux. L'entretien regulier previent les pannes, prolonge la duree de vie de vos equipements et assure la conformite aux normes du Code de construction du Quebec.",
      },
      {
        question: 'Pouvez-vous effectuer une mise aux normes electriques de mon commerce?',
        answer: 'Absolument. En tant que maitres electriciens certifies RBQ, nous effectuons des inspections completes et des mises aux normes selon le Code de construction du Quebec. Nous identifions les non-conformites et realisons les travaux correctifs necessaires.',
      },
    ],
  },
  {
    title: 'Services industriels et miniers',
    icon: <Factory className="w-6 h-6" />,
    items: [
      {
        question: "Avez-vous de l'experience dans le secteur minier?",
        answer: "Oui, nous avons une vaste experience dans le secteur minier, particulierement a Fermont et sur la Cote-Nord. Nous realisons l'installation et l'entretien de systemes haute tension, l'automatisation de procedes, le cablage industriel et la maintenance de transformateurs pour les sites miniers.",
      },
      {
        question: 'Quels services industriels offrez-vous exactement?',
        answer: "Nos services industriels incluent : maintenance de transformateurs, installation de moteurs haute tension, cablage industriel lourd, automatisation de procedes, eclairage industriel, distribution de puissance et systemes de controle. Nous intervenons dans les usines, mines, scieries et autres installations industrielles.",
      },
      {
        question: 'Intervenez-vous sur les sites eloignes comme Fermont?',
        answer: "Oui, nous avons un point de service a Fermont (2 rue Garnier) et nous intervenons regulierement sur les sites miniers et industriels eloignes de la Cote-Nord. Notre equipe est habituee a travailler dans des conditions nordiques exigeantes.",
      },
      {
        question: 'Est-ce que vos electriciens sont qualifies pour le travail haute tension?',
        answer: 'Oui, nos electriciens sont des compagnons et maitres electriciens certifies, formes specifiquement pour les travaux haute tension industriels. Nous detenons les licences RBQ requises et respectons toutes les normes de securite CSA et du Code de construction du Quebec.',
      },
      {
        question: "Pouvez-vous effectuer de l'automatisation industrielle?",
        answer: "Oui, nous offrons des services d'automatisation de procedes industriels incluant la programmation d'automates (PLC), l'installation de systemes de controle, l'instrumentation et la mise en service. Ces systemes optimisent la productivite et la securite de vos operations.",
      },
    ],
  },
  {
    title: 'Lignes electriques et distribution',
    icon: <Cable className="w-6 h-6" />,
    items: [
      {
        question: 'Effectuez-vous des travaux sur les lignes electriques?',
        answer: "Nous effectuons l'installation et l'entretien de systemes de distribution electrique pour les batiments commerciaux et industriels. Pour les lignes de transport d'Hydro-Quebec, celles-ci sont sous leur juridiction, mais nous pouvons vous accompagner pour les raccordements et l'interface avec le reseau.",
      },
      {
        question: "Que faire si une ligne electrique est tombee pres de mon commerce ou batiment?",
        answer: "Restez a distance d'au moins 10 metres de la ligne. Appelez immediatement Hydro-Quebec au 1-800-790-2424 pour signaler la situation. Si votre installation est endommagee, contactez-nous ensuite pour les reparations de votre systeme electrique interne.",
      },
      {
        question: 'Pouvez-vous installer un panneau electrique de plus grande capacite?',
        answer: "Oui, nous effectuons regulierement des changements et mises a niveau de panneaux electriques pour augmenter la capacite de votre installation. Que ce soit pour un panneau residentiel de 200A, commercial ou un panneau industriel haute capacite, nous realisons le dimensionnement, l'installation et la coordination avec Hydro-Quebec.",
      },
      {
        question: 'Comment savoir si mon panneau electrique doit etre remplace?',
        answer: "Signes courants : disjoncteurs qui sautent frequemment, odeur de brule, panneau chaud au toucher, rouille ou corrosion, panneau Federal Pioneer ou Zinsco (modeles rappeles), ou si votre batiment a plus de 30 ans sans mise a niveau. Contactez-nous pour une inspection gratuite.",
      },
    ],
  },
  {
    title: 'Urgences et pannes electriques',
    icon: <Zap className="w-6 h-6" />,
    items: [
      {
        question: 'Que faire en cas de panne electrique?',
        answer: "Verifiez d'abord si la panne est generale (voisins aussi affectes) en consultant le site d'Hydro-Quebec. Si la panne est limitee a votre batiment, verifiez votre panneau de disjoncteurs. Si le probleme persiste, contactez notre service d'urgence 24/7 via notre site web ou au 418-587-5403. Ne tentez jamais de reparer vous-meme une installation electrique.",
      },
      {
        question: "Votre service d'urgence est-il vraiment disponible 24h/24?",
        answer: "Oui, notre service d'urgence electrique est disponible 24 heures sur 24, 7 jours sur 7, incluant les fins de semaine et jours feries. Utilisez le bouton \"Service d'urgence\" sur notre page de contact pour declencher une alerte immediate a nos electriciens de garde.",
      },
      {
        question: "Combien coute un appel d'urgence electrique?",
        answer: "Des frais de service supplementaires s'appliquent pour les interventions d'urgence en dehors des heures normales d'ouverture (lundi au jeudi 8h-16h30, vendredi 8h-12h). Le cout exact depend de la nature de l'intervention et de votre localisation. Un devis est fourni avant le debut des travaux.",
      },
      {
        question: "Quelles regions couvrez-vous pour le service d'urgence?",
        answer: "Notre service d'urgence 24/7 couvre tout le territoire de La Malbaie a Sept-Iles, incluant Tadoussac, Les Escoumins, Forestville, Pessamit, Baie-Comeau, Port-Cartier, Sept-Iles et Fermont. Les delais d'intervention varient selon votre localisation.",
      },
      {
        question: "Mon commerce a subi un degat d'eau qui a affecte le systeme electrique. Que faire?",
        answer: "Coupez immediatement l'alimentation au panneau principal si vous pouvez le faire en toute securite. Ne touchez aucun appareil electrique dans les zones inondees. Contactez notre service d'urgence 24/7 immediatement. Un electricien doit inspecter et certifier votre installation avant toute remise sous tension.",
      },
      {
        question: "Comment fonctionne votre systeme d'appel d'urgence en ligne?",
        answer: "Sur notre page \"Nous joindre\", cliquez sur le bouton \"Service d'urgence\". Remplissez le formulaire avec vos coordonnees et la description de l'urgence. Un code de verification est envoye par texto a votre telephone. Une fois confirme, nos electriciens de garde recoivent automatiquement un appel et un SMS avec vos informations et vous contactent dans les minutes suivantes.",
      },
    ],
  },
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="font-bold text-[#383337] text-lg leading-snug">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[#64191E]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-slate-50 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#64191E]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container-custom mx-auto px-4 md:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.span variants={fadeUp} className="text-[#64191E] font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Foire aux questions
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Vos <span className="text-[#64191E]">questions.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-gray-500 leading-relaxed font-medium">
              Trouvez les reponses aux questions les plus frequentes sur nos services
              electriques commerciaux, industriels et d&apos;urgence sur la Cote-Nord.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="container-custom mx-auto px-4 md:px-8 max-w-4xl">
          {faqData.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-16 last:mb-0"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#64191E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#64191E]/20">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#383337] tracking-tight">
                  {category.title}
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="space-y-3">
                {category.items.map((item, itemIdx) => {
                  const key = `${catIdx}-${itemIdx}`
                  return (
                    <FAQAccordion
                      key={key}
                      item={item}
                      isOpen={!!openItems[key]}
                      onToggle={() => toggleItem(key)}
                    />
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
            Vous n&apos;avez pas trouve votre reponse?
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
            Notre equipe est disponible pour repondre a toutes vos questions.
            Contactez-nous pour une soumission gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/nous-joindre"
              className="group inline-flex items-center justify-center gap-3 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#4e1318] transition-all duration-300 shadow-revolt active:scale-[0.98]"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:4185875403"
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-[#383337] px-10 py-5 rounded-2xl font-black text-lg hover:border-[#64191E] hover:text-[#64191E] transition-all duration-300 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              418-587-5403
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
