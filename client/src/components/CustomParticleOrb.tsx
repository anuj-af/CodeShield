"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface OrbProps {
  isListening: boolean
  isSpeaking: boolean
  isDarkMode?: boolean
}

function ParticleOrb({ isListening, isSpeaking, isDarkMode = true }: OrbProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const particleCount = 1000
  const sphereRadius = 2.8

  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      // Create particles distributed throughout the sphere volume, not just on surface
      const r = Math.cbrt(Math.random()) * sphereRadius // Cube root for even distribution
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta)
      const z = r * Math.cos(phi)

      temp.push({
        position: new THREE.Vector3(x, y, z),
        originalPosition: new THREE.Vector3(x, y, z),
        scale: 0.5 + Math.random() * 0.8,
        speed: 0.5 + Math.random() * 1.5,
        phase: Math.random() * Math.PI * 2,
        originalRadius: r,
      })
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime
    const intensity = isSpeaking ? 2.0 : isListening ? 1.5 : 1.0
    const pulseSpeed = isSpeaking ? 4 : isListening ? 2 : 1

    particles.forEach((particle, i) => {
      // Create pulsing effect
      const pulse = Math.sin(time * pulseSpeed + particle.phase) * 0.3 * intensity
      const breathe = Math.sin(time * 0.5) * 0.1

      // Position particles with slight movement but keep them within sphere bounds
      dummy.position.copy(particle.originalPosition)

      // Add slight orbital movement
      const orbitX = Math.cos(time * particle.speed + particle.phase) * 0.1
      const orbitY = Math.sin(time * particle.speed + particle.phase) * 0.1
      dummy.position.x += orbitX
      dummy.position.y += orbitY

      // Apply pulsing but constrain to sphere
      const currentRadius = dummy.position.length()
      const maxRadius = sphereRadius * (1 + pulse + breathe)

      if (currentRadius > maxRadius) {
        dummy.position.normalize().multiplyScalar(maxRadius)
      }

      // Scale based on state and distance from center
      const scaleMultiplier = 1 + (intensity - 1) * 0.5
      dummy.scale.setScalar(particle.scale * scaleMultiplier * (1 + pulse * 0.5))

      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })

    // Rotate the entire orb
    meshRef.current.rotation.y += 0.005
    meshRef.current.rotation.x += 0.002

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  // Color scheme based on theme and state
  const getParticleColor = () => {
    if (isDarkMode) {
      return isSpeaking ? "#00ff66" : isListening ? "#22ff88" : "#44ff99"
    } else {
      return isSpeaking ? "#8b5cf6" : isListening ? "#6366f1" : "#3b82f6"
    }
  }

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color={getParticleColor()} transparent opacity={0.8} />
    </instancedMesh>
  )
}

export default function CustomParticleOrb({ isListening, isSpeaking, isDarkMode = true }: OrbProps) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color={isDarkMode ? "#22ff66" : "#8b5cf6"} />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color={isDarkMode ? "#44ff99" : "#6366f1"} />
        <ParticleOrb isListening={isListening} isSpeaking={isSpeaking} isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  )
}
