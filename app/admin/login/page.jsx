'use client'
import { useState } from 'react'
// @/lib ko hatao, seedha ../../../lib se import karo
import { supabase } from '../../../lib/supabase'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      alert(error.message)
    } else {
      router.push('/admin')
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="bg-white/5 border border-red-500/30 p-8 rounded-2xl backdrop-blur-xl w-full max-w-md shadow-[0_0_50px_rgba(220,38,38,0.1)]">
        <h1 className="text-3xl font-bold text-white text-center">Admin <span className="text-red-500">Login</span></h1>
        <p className="text-gray-400 text-center text-sm mb-8">Enter credentials to manage projects</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition" required />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none transition" required />
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 transition py-3 rounded-lg font-bold text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]">Sign In</button>
        </form>
      </div>
    </div>
  )
                                                                                                    }
