"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function LightWaveGeometry() {
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
      
      float elevation = sin(modelPosition.x * 0.4 + uTime * 1.8) * 0.25;
      elevation += sin(modelPosition.z * 0.25 + uTime * 1.2) * 0.18;
      elevation += sin(modelPosition.x * 0.6 + modelPosition.z * 0.5 + uTime * 2.5) * 0.08;
      
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
      float alpha = 0.08 + vElevation * 0.25;
      alpha *= (1.0 - vUv.y) * 0.6;
      
      // Purple aurora colors for light theme
      vec3 color1 = vec3(0.55, 0.36, 0.96); // Purple
      vec3 color2 = vec3(0.39, 0.40, 0.94); // Indigo
      vec3 color3 = vec3(0.23, 0.51, 0.96); // Blue
      
      vec3 color = mix(color1, color2, vElevation + 0.5);
      color = mix(color, color3, sin(uTime * 0.5 + vUv.x * 3.14159) * 0.3 + 0.3);
      
      gl_FragColor = vec4(color, alpha);
    }
  `

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime
    }
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI * 0.25, 0, 0]} position={[0, -6, -8]}>
      <planeGeometry args={[60, 60, 128, 128]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTime: { value: 0 },
          uAmplitude: { value: 1.8 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

export default function LightWaveBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 1, 12], fov: 70 }}>
        <LightWaveGeometry />
      </Canvas>
    </div>
  )
}
