'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { motion } from 'framer-motion'

export default function Projects() {
  const [projects, setProjects] = useState([])
  useEffect(() => { fetchProjects() }, [])
  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*').order('order', { ascending: true })
    if (data) setProjects(data)
  }
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Featured <span className="text-red-500">Projects</span></h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="group bg-white/5 border border-white/10 hover:border-red-500/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_50px_rgba(220,38,38,0.15)]">
            <div className="relative overflow-hidden h-48">
              <img src={project.image_url || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop'} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">{project.tech_stack?.map((tech, i) => <span key={i} className="text-xs bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-600/20">{tech}</span>)}</div>
              <div className="flex gap-4 pt-2">{project.live_url && <a href={project.live_url} target="_blank" className="text-sm text-white hover:text-red-500 transition">🔗 Live</a>}{project.github_url && <a href={project.github_url} target="_blank" className="text-sm text-white hover:text-red-500 transition">🐙 Code</a>}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
