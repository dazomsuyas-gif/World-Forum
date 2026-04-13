'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Clouds } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import { Cloud } from '@react-three/drei'

const Globe = () => {
    // Africa highlight - TZ coords ~ -6.37 lat, 34.88 long
    const africaMaterial = [
        new THREE.Color(0x228B22), // Africa green
        new THREE.Color(0x90EE90), // Light green highlight
        new THREE.Color(0x006400)  // Dark green
    ];

    return (
        <mesh rotation={[0, -1.2, 0]}> {/* Rotate Africa facing front */}
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhongMaterial
                map={null}
                emissive="#0a3d0a"
                emissiveIntensity={0.4}
                color="#1b5e20"
                shininess={100}
                specular="#4fc3f7"
                roughness={0.3}
                metalness={0.1}
            >
                <meshStandardMaterial />
            </meshPhongMaterial>
            {/* Africa glow highlight */}
            <mesh scale={[1.02, 1.02, 1.02]}>
                <sphereGeometry args={[1, 32, 32]} />
                <meshBasicMaterial color="rgba(34,139,34,0.3)" wireframe />
            </mesh>
            {/* TZ pinpoint */}
            <mesh position={[0.55, -0.1, 0.8]}>
                <sphereGeometry args={[0.02, 8, 8]} />
                <meshBasicMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.8} />
            </mesh>
        </mesh>
    )
}

export default function Globe3D() {
    return (
        <motion.div
            className="fixed inset-0 z-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[1, 1, 1]} intensity={1.2} />
                <pointLight position={[5, 2, 5]} intensity={1} color="#FFD700" />
                <spotLight position={[-2, 2, 2]} angle={0.3} penumbra={1} castShadow />
                <Globe />
                <Stars count={3000} radius={100} factor={8} saturation={0} fade speed={1} />
                <Clouds position={[0, 0.5, 0]} speed={0.1} opacity={0.4} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </motion.div>
    )
}

