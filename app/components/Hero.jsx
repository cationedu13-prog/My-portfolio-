'use client'
import { motion } from 'framer-motion'
import ProfileImage from './ProfileImage'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 bg-black relative overflow-hidden">
      {/* Premium Red Background Glow */}
      <div className="absolute top-[-30%] left-[-20%] w-[140%] h-[140%] bg-red-600/10 blur-3xl rounded-full -z-0 animate-pulse-slow" />
      <div className="absolute bottom-[-30%] right-[-20%] w-[140%] h-[140%] bg-red-600/5 blur-3xl rounded-full -z-0 animate-pulse-slow" />

      {/* Left - Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 text-center md:text-left space-y-6 md:space-y-8"
      >
        <p className="inline-block bg-red-600/20 text-red-500 font-mono text-xs md:text-sm px-4 py-2 rounded-full border border-red-600/30 tracking-widest">
          👋 BUILDING THE FUTURE
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Vibe Coder <br />
          <span className="bg-gradient-to-r from-red-600 via-white to-red-600 bg-clip-text text-transparent animate-pulse">
            & Problem Solver
          </span>
        </h1>
        <p className="text-gray-400 max-w-lg text-base md:text-lg">
          Full-stack developer building AI-native products, automation tools & premium web experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(220,38,38,0.6)] transition-all duration-300 transform hover:scale-105">
            Explore Work
          </a>
          {/* ⚠️ YAHAN APNA RESUME PDF LINK DAAL */}
          <a href="#" className="px-8 py-3 border border-red-600/40 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-red-600/10 transition-all duration-300">
            Resume
          </a>
        </div>
      </motion.div>

      {/* Right - 3D Style Profile Photo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-10 w-full md:w-1/2 flex justify-center"
      >
        {/* ⚠️ YAHAN 'src' MEIN APNI PHOTO KA PATH DAAL */}
        <ProfileImage src="/my-photo.png" alt="Vibe Coder" />
      </motion.div>
    </section>
  )
                  }
