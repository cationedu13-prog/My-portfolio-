'use client'
// @/lib ko hatao, seedha ../../lib se import karo
import { supabase } from '../../lib/supabase'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminPage() {
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])
  const [form, setForm] = useState({ title: '', description: '', live_url: '', github_url: '', image_url: '', tech_stack: '' })
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) router.push('/admin/login')
      else setLoading(false)
    })
    fetchProjects()
  }, [])

  async function fetchProjects() {
    const { data } = await supabase.from('projects').select('*').order('order', { ascending: true })
    setProjects(data || [])
  }

  async function addProject(e) {
    e.preventDefault()
    const techArray = form.tech_stack.split(',').map(t => t.trim())
    await supabase.from('projects').insert([{ ...form, tech_stack: techArray }])
    setForm({ title: '', description: '', live_url: '', github_url: '', image_url: '', tech_stack: '' })
    fetchProjects()
  }

  async function deleteProject(id) {
    if (confirm('Delete this project?')) {
      await supabase.from('projects').delete().eq('id', id)
      fetchProjects()
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (loading) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-red-500">⚡ Admin Dashboard</h1>
        <button onClick={handleLogout} className="px-4 py-2 border border-white/20 rounded-lg hover:bg-red-600/20 transition">Logout</button>
      </div>

      <form onSubmit={addProject} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-6 md:p-8 rounded-2xl border border-red-500/20 backdrop-blur-lg">
        <input className="bg-black border border-white/10 rounded-lg p-3 text-white" placeholder="Project Title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
        <input className="bg-black border border-white/10 rounded-lg p-3 text-white" placeholder="Image URL" value={form.image_url} onChange={e => setForm({...form, image_url: e.target.value})} />
        <textarea className="bg-black border border-white/10 rounded-lg p-3 text-white col-span-2" placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})} />
        <input className="bg-black border border-white/10 rounded-lg p-3 text-white" placeholder="Live URL" value={form.live_url} onChange={e => setForm({...form, live_url: e.target.value})} />
        <input className="bg-black border border-white/10 rounded-lg p-3 text-white" placeholder="GitHub URL" value={form.github_url} onChange={e => setForm({...form, github_url: e.target.value})} />
        <input className="bg-black border border-white/10 rounded-lg p-3 text-white col-span-2" placeholder="Tech Stack (comma: React, AI)" value={form.tech_stack} onChange={e => setForm({...form, tech_stack: e.target.value})} />
        <button type="submit" className="col-span-2 bg-red-600 hover:bg-red-700 transition p-3 rounded-lg font-bold shadow-[0_0_20px_rgba(220,38,38,0.3)]">+ Add Project</button>
      </form>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(p => (
          <div key={p.id} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:border-red-500/50 transition group">
            <img src={p.image_url || 'https://via.placeholder.com/400x200/1a1a1a/ffffff?text=No+Image'} className="h-40 w-full object-cover rounded-lg mb-3" />
            <h2 className="text-xl font-bold text-white">{p.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-2">{p.description}</p>
            <button onClick={() => deleteProject(p.id)} className="mt-3 text-red-500 text-sm hover:underline transition">🗑 Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
