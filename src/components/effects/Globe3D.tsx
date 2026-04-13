'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Cloud } from '@react-three/drei'
import { motion } from 'framer-motion'

const Globe = () => {
    return (
        <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial
                emissive="#111133"
                emissiveIntensity={0.3}
                color="#1e3a8a"
                roughness={0.8}
                metalness={0.2}
            />
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
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Globe />
                <Stars count={1000} />
                <OrbitControls enableZoom={false} />
            </Canvas>
        </motion.div>
    )
}

