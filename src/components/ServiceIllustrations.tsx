'use client'

import { motion } from 'framer-motion'

const lineAnim = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: 'easeInOut' as const } },
}

// Industriel / Minier
export function IndustrialIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-950 to-slate-900 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] relative z-10">
        {/* Usine */}
        <motion.rect x="50" y="180" width="120" height="140" rx="4" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} />
        <motion.rect x="70" y="140" width="30" height="40" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} />
        <motion.rect x="120" y="120" width="30" height="60" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1.5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
        {/* Fenêtres */}
        {[0, 1, 2].map(i => (
          <motion.rect key={i} x={70 + i * 35} y="210" width="20" height="25" rx="2" fill="#3b82f6" fillOpacity="0.3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
        ))}
        {/* Transformateur */}
        <motion.rect x="230" y="200" width="80" height="120" rx="8" fill="#1e3a5f" stroke="#f59e0b" strokeWidth="2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
        <motion.circle cx="270" cy="250" r="25" fill="none" stroke="#f59e0b" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} />
        <motion.circle cx="270" cy="250" r="12" fill="#f59e0b" fillOpacity="0.2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        {/* Lignes électriques */}
        <motion.path d="M170 220 L230 220" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" variants={lineAnim} initial="hidden" animate="visible" />
        <motion.path d="M310 250 L360 250 L360 180" stroke="#3b82f6" strokeWidth="2" variants={lineAnim} initial="hidden" animate="visible" />
        {/* Éclairs */}
        <motion.path d="M355 170 L360 155 L365 170 L360 165 Z" fill="#f59e0b" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
        {/* Sol */}
        <motion.line x1="30" y1="320" x2="370" y2="320" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-[40px]" />
    </div>
  )
}

// Commercial
export function CommercialIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-amber-950 to-stone-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.3) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] relative z-10">
        {/* Bâtiment commercial */}
        <motion.rect x="80" y="100" width="160" height="220" rx="6" fill="#292524" stroke="#d97706" strokeWidth="1.5" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} />
        {/* Fenêtres illuminées */}
        {[0, 1, 2, 3].map(row => (
          [0, 1, 2].map(col => (
            <motion.rect key={`${row}-${col}`} x={100 + col * 45} y={130 + row * 45} width="30" height="25" rx="3" fill="#fbbf24" fillOpacity={0.15 + (row * 0.1)} stroke="#d97706" strokeWidth="0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + (row * 0.1 + col * 0.05) }} />
          ))
        ))}
        {/* Borne de recharge */}
        <motion.rect x="280" y="240" width="50" height="80" rx="6" fill="#292524" stroke="#22c55e" strokeWidth="1.5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.5 }} />
        <motion.circle cx="305" cy="265" r="12" fill="none" stroke="#22c55e" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} />
        <motion.path d="M302 260 L305 255 L305 265 L308 260" stroke="#22c55e" strokeWidth="2" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        {/* Câble borne */}
        <motion.path d="M305 290 L305 310 L270 310" stroke="#22c55e" strokeWidth="1.5" strokeDasharray="4 3" variants={lineAnim} initial="hidden" animate="visible" />
        {/* Panneau LED */}
        <motion.rect x="100" y="60" width="120" height="30" rx="4" fill="#d97706" fillOpacity="0.15" stroke="#d97706" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.text x="160" y="80" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>COMMERCIAL</motion.text>
        {/* Sol */}
        <motion.line x1="60" y1="320" x2="350" y2="320" stroke="#d97706" strokeWidth="1" strokeOpacity="0.3" />
      </svg>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-[60px]" />
    </div>
  )
}

// Ligne électrique
export function PowerLineIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '0 50px' }} />
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] relative z-10">
        {/* Poteau 1 */}
        <motion.rect x="80" y="100" width="8" height="220" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} />
        <motion.rect x="55" y="100" width="58" height="6" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} />
        <motion.rect x="60" y="130" width="48" height="5" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} />
        {/* Isolateurs poteau 1 */}
        {[58, 78, 98].map((x, i) => (
          <motion.circle key={`iso1-${i}`} cx={x} cy="100" r="4" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 + i * 0.1 }} />
        ))}
        {/* Poteau 2 */}
        <motion.rect x="240" y="120" width="8" height="200" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} />
        <motion.rect x="215" y="120" width="58" height="6" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} />
        <motion.rect x="220" y="150" width="48" height="5" rx="2" fill="#064e3b" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} />
        {/* Isolateurs poteau 2 */}
        {[218, 238, 258].map((x, i) => (
          <motion.circle key={`iso2-${i}`} cx={x} cy="120" r="4" fill="#10b981" fillOpacity="0.4" stroke="#10b981" strokeWidth="1" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.1 }} />
        ))}
        {/* Lignes haute tension */}
        <motion.path d="M58 100 C140 85, 180 105, 218 120" stroke="#10b981" strokeWidth="1.5" fill="none" variants={lineAnim} initial="hidden" animate="visible" />
        <motion.path d="M78 100 C150 90, 190 110, 238 120" stroke="#34d399" strokeWidth="1.5" fill="none" variants={lineAnim} initial="hidden" animate="visible" />
        <motion.path d="M98 100 C160 95, 200 115, 258 120" stroke="#6ee7b7" strokeWidth="1.5" fill="none" variants={lineAnim} initial="hidden" animate="visible" />
        {/* Lignes basse tension */}
        <motion.path d="M64 130 C130 120, 180 135, 224 150" stroke="#10b981" strokeWidth="1" strokeOpacity="0.6" fill="none" variants={lineAnim} initial="hidden" animate="visible" />
        <motion.path d="M88 130 C150 125, 195 140, 244 150" stroke="#34d399" strokeWidth="1" strokeOpacity="0.6" fill="none" variants={lineAnim} initial="hidden" animate="visible" />
        {/* Éclairs sur les lignes */}
        <motion.path d="M148 92 L152 85 L152 92 L156 88" stroke="#fbbf24" strokeWidth="1.5" fill="none" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0, 1, 0] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }} />
        {/* Panneau de distribution */}
        <motion.rect x="310" y="180" width="50" height="70" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        <motion.path d="M288 200 L310 200" stroke="#10b981" strokeWidth="1.5" strokeDasharray="3 3" variants={lineAnim} initial="hidden" animate="visible" />
        {/* Indicateurs panneau */}
        {[195, 210, 225].map((y, i) => (
          <motion.circle key={`ind-${i}`} cx="325" cy={y} r="3" fill={i === 0 ? '#22c55e' : '#10b981'} initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
        ))}
        {/* Sol / Terrain */}
        <motion.line x1="40" y1="320" x2="370" y2="320" stroke="#10b981" strokeWidth="1" strokeOpacity="0.3" />
        <motion.path d="M40 320 Q100 330, 160 320 Q220 310, 280 320 Q340 330, 370 320" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
      </svg>
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-emerald-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-yellow-500/5 rounded-full blur-[40px]" />
    </div>
  )
}

// Urgence 24/7
export function EmergencyIllustration() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-950 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,.2) 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
      <svg viewBox="0 0 400 400" className="w-[80%] h-[80%] relative z-10">
        {/* Éclair central */}
        <motion.path d="M200 80 L170 190 L210 190 L180 320" stroke="#fbbf24" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" variants={lineAnim} initial="hidden" animate="visible" />
        <motion.path d="M200 80 L170 190 L210 190 L180 320" fill="#fbbf24" fillOpacity="0.1" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.2, 0] }} transition={{ duration: 2, repeat: Infinity }} />
        {/* Cercle d'alerte */}
        <motion.circle cx="200" cy="200" r="100" fill="none" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.3" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.circle cx="200" cy="200" r="70" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.5" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2.5, repeat: Infinity }} />
        {/* 24/7 */}
        <motion.text x="200" y="380" textAnchor="middle" fill="#ef4444" fontSize="28" fontWeight="900" fillOpacity="0.6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>24/7</motion.text>
        {/* Outils */}
        <motion.rect x="70" y="250" width="40" height="8" rx="4" fill="#991b1b" stroke="#ef4444" strokeWidth="1" transform="rotate(-45 90 254)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} />
        <motion.rect x="290" y="250" width="40" height="8" rx="4" fill="#991b1b" stroke="#ef4444" strokeWidth="1" transform="rotate(45 310 254)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} />
        {/* Points lumineux */}
        {[
          { cx: 120, cy: 120, r: 3 },
          { cx: 280, cy: 130, r: 2.5 },
          { cx: 100, cy: 280, r: 2 },
          { cx: 310, cy: 290, r: 3 },
          { cx: 150, cy: 350, r: 2 },
          { cx: 260, cy: 340, r: 2.5 },
        ].map((dot, i) => (
          <motion.circle key={i} {...dot} fill="#fbbf24" initial={{ opacity: 0 }} animate={{ opacity: [0, 0.8, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
        ))}
      </svg>
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-red-500/10 rounded-full blur-[80px]" />
      <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-[40px]" />
    </div>
  )
}
