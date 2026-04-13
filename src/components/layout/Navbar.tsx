'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-glass-border px-8 py-4"
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.a href="/" className="text-3xl font-display bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">
                    WORLD FORUM
                </motion.a>

                <div className="hidden md:flex items-center gap-8">
                    <a href="/richest" className="font-ui text-lg hover:text-gold transition-colors">💰 Richest</a>
                    <a href="/languages" className="font-ui text-lg hover:text-gold transition-colors">🗣️ Languages</a>
                    <a href="/stories" className="font-ui text-lg hover:text-gold transition-colors">📖 Stories</a>
                    <a href="/community" className="font-ui text-lg hover:text-gold transition-colors">👥 Community</a>
                    <a href="/marketplace" className="font-ui text-lg hover:text-gold transition-colors">🛒 Marketplace</a>
                    <a href="/why-choose-us" className="btn-primary">⭐ Why Us</a>
                </div>

                <button
                    className="md:hidden text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass mt-2 p-4 rounded-xl"
                >
                    <a href="/richest" className="block py-2 hover:text-gold">💰 Richest</a>
                    <a href="/languages" className="block py-2 hover:text-gold">🗣️ Languages</a>
                    <a href="/stories" className="block py-2 hover:text-gold">📖 Stories</a>
                    <a href="/community" className="block py-2 hover:text-gold">👥 Community</a>
                    <a href="/marketplace" className="block py-2 hover:text-gold">🛒 Marketplace</a>
                </motion.div>
            )}
        </motion.nav>
    )
}

