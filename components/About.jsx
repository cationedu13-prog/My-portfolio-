'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-red-600/5 blur-3xl rounded-full -z-0" />
      <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-red-500">Me</span></h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
      </motion.div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
          <div className="relative w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.2)] flex items-center justify-center bg-gradient-to-br from-red-600/20 to-black text-7xl">👨‍💻</div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/40 transition"><div className="text-2xl font-bold text-red-500">6+</div><div className="text-xs text-gray-400">Projects</div></div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/40 transition"><div className="text-2xl font-bold text-red-500">3+</div><div className="text-xs text-gray-400">Bots</div></div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/40 transition"><div className="text-2xl font-bold text-red-500">100%</div><div className="text-xs text-gray-400">Vibe</div></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6 text-center lg:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Who is <span className="text-red-500">This Guy?</span></h3>
          <p className="text-gray-300 leading-relaxed">I'm a passionate <span className="text-red-400 font-semibold">Full-Stack Developer</span> who loves building AI-native products, automation tools, and premium web experiences. I turn complex problems into simple, beautiful, and functional solutions.</p>
          <p className="text-gray-400 leading-relaxed">From farming marketplaces to 3D portfolios and Telegram bots — I've done it all. I believe in shipping fast, iterating faster, and always keeping the user experience pixel-perfect.</p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-red-400">#AI-Native</span>
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-red-400">#Next.js</span>
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-red-400">#Supabase</span>
            <span className="px-4 py-2 bg-red-600/10 border border-red-600/30 rounded-full text-sm text-red-400">#VibeCoder</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
