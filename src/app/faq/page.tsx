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
    title: 'Services Commerciaux',
    icon: <Building2 className="w-6 h-6" />,
    items: [
      {
        question: 'Quels types de services électriques offrez-vous pour les commerces?',
        answer: 'Nous offrons l\'installation et la rénovation complète de systèmes électriques commerciaux, incluant l\'éclairage intelligent, les panneaux de distribution, les bornes de recharge pour véhicules électriques, la mise aux normes, l\'entretien préventif et les systèmes d\'alimentation d\'urgence. Nous desservons tout le territoire de La Malbaie à Sept-Îles et Fermont.',
      },
      {
        question: 'Combien coûte une installation électrique commerciale?',
        answer: 'Le coût varie selon l\'ampleur du projet, la superficie du bâtiment et les équipements requis. Nous offrons des soumissions gratuites et détaillées pour chaque projet. Contactez-nous pour obtenir une estimation précise adaptée à vos besoins.',
      },
      {
        question: 'Est-ce que vous installez des bornes de recharge pour véhicules électriques?',
        answer: 'Oui, nous sommes spécialisés dans l\'installation de bornes de recharge de niveau 2 et niveau 3 pour les commerces, stationnements publics et entreprises sur toute la Côte-Nord. Nous nous occupons de l\'analyse de capacité électrique, de l\'installation et de la mise en service.',
      },
      {
        question: 'Offrez-vous des contrats d\'entretien pour les bâtiments commerciaux?',
        answer: 'Oui, nous offrons des programmes d\'entretien préventif sur mesure pour les systèmes électriques commerciaux. L\'entretien régulier prévient les pannes, prolonge la durée de vie de vos équipements et assure la conformité aux normes du Code de construction du Québec.',
      },
      {
        question: 'Pouvez-vous effectuer une mise aux normes électriques de mon commerce?',
        answer: 'Absolument. En tant que maîtres électriciens certifiés RBQ, nous effectuons des inspections complètes et des mises aux normes selon le Code de construction du Québec. Nous identifions les non-conformités et réalisons les travaux correctifs nécessaires.',
      },
    ],
  },
  {
    title: 'Services Industriels et Miniers',
    icon: <Factory className="w-6 h-6" />,
    items: [
      {
        question: 'Avez-vous de l\'expérience dans le secteur minier?',
        answer: 'Oui, nous avons une vaste expérience dans le secteur minier, particulièrement à Fermont et sur la Côte-Nord. Nous réalisons l\'installation et l\'entretien de systèmes haute tension, l\'automatisation de procédés, le câblage industriel et la maintenance de transformateurs pour les sites miniers.',
      },
      {
        question: 'Quels services industriels offrez-vous exactement?',
        answer: 'Nos services industriels incluent : maintenance de transformateurs, installation de moteurs haute tension, câblage industriel lourd, automatisation de procédés, éclairage industriel, distribution de puissance et systèmes de contrôle. Nous intervenons dans les usines, mines, scieries et autres installations industrielles.',
      },
      {
        question: 'Intervenez-vous sur les sites éloignés comme Fermont?',
        answer: 'Oui, nous avons un point de service à Fermont (2 rue Garnier) et nous intervenons régulièrement sur les sites miniers et industriels éloignés de la Côte-Nord. Notre équipe est habituée à travailler dans des conditions nordiques exigeantes.',
      },
      {
        question: 'Est-ce que vos électriciens sont qualifiés pour le travail haute tension?',
        answer: 'Oui, nos électriciens sont des compagnons et maîtres électriciens certifiés, formés spécifiquement pour les travaux haute tension industriels. Nous détenons les licences RBQ requises et respectons toutes les normes de sécurité CSA et du Code de construction du Québec.',
      },
      {
        question: 'Pouvez-vous effectuer de l\'automatisation industrielle?',
        answer: 'Oui, nous offrons des services d\'automatisation de procédés industriels incluant la programmation d\'automates (PLC), l\'installation de systèmes de contrôle, l\'instrumentation et la mise en service. Ces systèmes optimisent la productivité et la sécurité de vos opérations.',
      },
    ],
  },
  {
    title: 'Lignes Électriques et Distribution',
    icon: <Cable className="w-6 h-6" />,
    items: [
      {
        question: 'Effectuez-vous des travaux sur les lignes électriques?',
        answer: 'Nous effectuons l\'installation et l\'entretien de systèmes de distribution électrique pour les bâtiments commerciaux et industriels. Pour les lignes de transport d\'Hydro-Québec, celles-ci sont sous leur juridiction, mais nous pouvons vous accompagner pour les raccordements et l\'interface avec le réseau.',
      },
      {
        question: 'Que faire si une ligne électrique est tombée près de mon commerce ou bâtiment?',
        answer: 'Restez à distance d\'au moins 10 mètres de la ligne. Appelez immédiatement Hydro-Québec au 1-800-790-2424 pour signaler la situation. Si votre installation est endommagée, contactez-nous ensuite pour les réparations de votre système électrique interne.',
      },
      {
        question: 'Pouvez-vous installer un panneau électrique de plus grande capacité?',
        answer: 'Oui, nous effectuons régulièrement des changements et mises à niveau de panneaux électriques pour augmenter la capacité de votre installation. Que ce soit pour un panneau résidentiel de 200A, commercial ou un panneau industriel haute capacité, nous réalisons le dimensionnement, l\'installation et la coordination avec Hydro-Québec.',
      },
      {
        question: 'Comment savoir si mon panneau électrique doit être remplacé?',
        answer: 'Signes courants : disjoncteurs qui sautent fréquemment, odeur de brûlé, panneau chaud au toucher, rouille ou corrosion, panneau Federal Pioneer ou Zinsco (modèles rappelés), ou si votre bâtiment a plus de 30 ans sans mise à niveau. Contactez-nous pour une inspection gratuite.',
      },
    ],
  },
  {
    title: 'Urgences et Pannes Électriques',
    icon: <Zap className="w-6 h-6" />,
    items: [
      {
        question: 'Que faire en cas de panne électrique?',
        answer: 'Vérifiez d\'abord si la panne est générale (voisins aussi affectés) en consultant le site d\'Hydro-Québec. Si la panne est limitée à votre bâtiment, vérifiez votre panneau de disjoncteurs. Si le problème persiste, contactez notre service d\'urgence 24/7 via notre site web ou au 418-587-5403. Ne tentez jamais de réparer vous-même une installation électrique.',
      },
      {
        question: 'Votre service d\'urgence est-il vraiment disponible 24h/24?',
        answer: 'Oui, notre service d\'urgence électrique est disponible 24 heures sur 24, 7 jours sur 7, incluant les fins de semaine et jours fériés. Utilisez le bouton « Service d\'urgence » sur notre page de contact pour déclencher une alerte immédiate à nos électriciens de garde.',
      },
      {
        question: 'Combien coûte un appel d\'urgence électrique?',
        answer: 'Des frais de service supplémentaires s\'appliquent pour les interventions d\'urgence en dehors des heures normales d\'ouverture (lundi au jeudi 8h-16h30, vendredi 8h-12h). Le coût exact dépend de la nature de l\'intervention et de votre localisation. Un devis est fourni avant le début des travaux.',
      },
      {
        question: 'Quelles régions couvrez-vous pour le service d\'urgence?',
        answer: 'Notre service d\'urgence 24/7 couvre tout le territoire de La Malbaie à Sept-Îles, incluant Tadoussac, Les Escoumins, Forestville, Pessamit, Baie-Comeau, Port-Cartier, Sept-Îles et Fermont. Les délais d\'intervention varient selon votre localisation.',
      },
      {
        question: 'Mon commerce a subi un dégât d\'eau qui a affecté le système électrique. Que faire?',
        answer: 'Coupez immédiatement l\'alimentation au panneau principal si vous pouvez le faire en toute sécurité. Ne touchez aucun appareil électrique dans les zones inondées. Contactez notre service d\'urgence 24/7 immédiatement. Un électricien doit inspecter et certifier votre installation avant toute remise sous tension.',
      },
      {
        question: 'Comment fonctionne votre système d\'appel d\'urgence en ligne?',
        answer: 'Sur notre page « Nous joindre », cliquez sur le bouton « Service d\'urgence ». Remplissez le formulaire avec vos coordonnées et la description de l\'urgence. Un code de vérification est envoyé par texto à votre téléphone. Une fois confirmé, nos électriciens de garde reçoivent automatiquement un appel et un SMS avec vos informations et vous contactent dans les minutes suivantes.',
      },
    ],
  },
]

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-gray-50 transition-colors"
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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
} as const

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
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl">
            <span className="text-[#64191E] font-black tracking-[0.2em] uppercase text-sm mb-6 block">
              Foire aux questions
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-[#383337] mb-8 tracking-tight">
              Vos <span className="text-[#64191E]">Questions.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed font-medium">
              Trouvez les réponses aux questions les plus fréquentes sur nos services
              électriques commerciaux, industriels et d&apos;urgence sur la Côte-Nord.
            </p>
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
              variants={fadeInUp}
              className="mb-16 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#64191E] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#64191E]/20">
                  {category.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#383337] tracking-tight">
                  {category.title}
                </h2>
              </div>
              <div className="space-y-3">
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
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t border-gray-100">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-[#383337] mb-6 tracking-tight">
            Vous n&apos;avez pas trouvé votre réponse?
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
            Contactez-nous pour une soumission gratuite.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/nous-joindre"
              className="group inline-flex items-center justify-center gap-3 bg-[#64191E] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#383337] transition-all duration-300 shadow-xl shadow-[#64191E]/20"
            >
              Nous contacter
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:4185875403"
              className="inline-flex items-center justify-center gap-3 bg-white border-2 border-gray-100 text-[#383337] px-10 py-5 rounded-2xl font-black text-lg hover:border-[#64191E] hover:text-[#64191E] transition-all duration-300"
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
