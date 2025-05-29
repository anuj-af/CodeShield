"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function WaveGeometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)

  const vertexShader = `
    uniform float uTime;
    uniform float uAmplitude;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      vUv = uv;
      
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      
      float elevation = sin(modelPosition.x * 0.5 + uTime * 2.0) * 0.3;
      elevation += sin(modelPosition.z * 0.3 + uTime * 1.5) * 0.2;
      elevation += sin(modelPosition.x * 0.8 + modelPosition.z * 0.6 + uTime * 3.0) * 0.1;
      
      modelPosition.y += elevation * uAmplitude;
      vElevation = elevation;
      
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
      
      gl_Position = projectedPosition;
    }
  `

  const fragmentShader = `
    uniform float uTime;
    varying vec2 vUv;
    varying float vElevation;

    void main() {
      float alpha = 0.1 + vElevation * 0.3;
      alpha *= (1.0 - vUv.y) * 0.8;
      
      vec3 color = mix(vec3(0.0, 0.8, 0.4), vec3(0.2, 1.0, 0.6), vElevation + 0.5);
      
      gl_FragColor = vec4(color, alpha);
    }
  `

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.3, 0, 0]} position={[0, -8, -5]}>
      <planeGeometry args={[50, 50, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uAmplitude: { value: 2.0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function WaveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 2, 10], fov: 75 }}>
        <WaveGeometry />
      </Canvas>
    </div>
  )
}
