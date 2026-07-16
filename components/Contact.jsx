'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  async function handleSubmit(e) {
    e.preventDefault(); setLoading(true)
    const { error } = await supabase.from('messages').insert([form])
    if (error) alert('Error sending message. Please try again.')
    else { setSuccess(true); setForm({ name: '', email: '', message: '' }); setTimeout(() => setSuccess(false), 5000) }
    setLoading(false)
  }
  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[60%] h-[60%] bg-red-600/5 blur-3xl rounded-full -z-0" />
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white">Get In <span className="text-red-500">Touch</span></h2>
        <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]" />
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">Have a project in mind? Let's connect and build something amazing together.</p>
      </motion.div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 space-y-4">
          {/* ⚠️ YAHAN APNA EMAIL, GITHUB, LINKEDIN DAAL */}
          <a href="mailto:your@email.com" target="_blank" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-red-500/40 rounded-xl transition group"><span className="text-2xl">📧</span><div><p className="text-xs text-gray-500 uppercase">Email</p><p className="text-sm text-white group-hover:text-red-400 transition truncate">your@email.com</p></div></a>
          <a href="https://github.com/yourhandle" target="_blank" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-red-500/40 rounded-xl transition group"><span className="text-2xl">🐙</span><div><p className="text-xs text-gray-500 uppercase">GitHub</p><p className="text-sm text-white group-hover:text-red-400 transition truncate">/yourhandle</p></div></a>
          <a href="https://linkedin.com/in/yourhandle" target="_blank" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 hover:border-red-500/40 rounded-xl transition group"><span className="text-2xl">🔗</span><div><p className="text-xs text-gray-500 uppercase">LinkedIn</p><p className="text-sm text-white group-hover:text-red-400 transition truncate">/in/yourhandle</p></div></a>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm space-y-4">
          {success && <div className="bg-green-600/20 border border-green-500/50 text-green-400 p-3 rounded-lg text-center text-sm">✅ Message sent successfully!</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition" required />
            <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition" required />
          </div>
          <textarea rows={4} placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition resize-none" required />
          <button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] disabled:opacity-50">{loading ? '⏳ Sending...' : '🚀 Send Message'}</button>
        </form>
      </div>
    </section>
  )
          }
