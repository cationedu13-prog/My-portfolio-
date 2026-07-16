'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProfileImage({ src, alt }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    // 3D Tilt effect (max 10 degree)
    const rotateXVal = ((y - centerY) / centerY) * -10
    const rotateYVal = ((x - centerX) / centerX) * 10
    setRotateX(rotateXVal)
    setRotateY(rotateYVal)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
    >
      <motion.div
        className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 relative cursor-pointer"
        style={{ perspective: 1000 }}
        animate={{ y: [0, -12, 0] }} // Floating Animation
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="w-full h-full"
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 🔥 Premium Red Glowing Shadow (Behind the image) */}
          <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-80 -z-10 scale-110 animate-pulse" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/20 to-transparent -z-10 scale-105 blur-2xl" />
          
          {/* Tu apni photo yahan daalega */}
          <img
            src={src || '/my-photo.png'}
            alt={alt || 'Profile'}
            className="w-full h-full object-cover rounded-full relative z-10"
            style={{ transform: 'translateZ(20px)' }} // 3D pop effect
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
