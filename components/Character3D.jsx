'use client'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls, useGLTF, Environment } from '@react-three/drei'

function Model() {
  // ⚠️ YAHAN APNA READY PLAYER ME GLB URL DAAL
  const { scene } = useGLTF('https://models.readyplayer.me/YOUR_AVATAR_ID.glb?textureQuality=high')
  return <primitive object={scene} scale={1.6} />
}

export default function Character3D() {
  return (
    <div className="w-full h-[400px] md:h-[550px] cursor-grab">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} />
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
          <Model />
        </Float>
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} />
      </Canvas>
    </div>
  )
}
