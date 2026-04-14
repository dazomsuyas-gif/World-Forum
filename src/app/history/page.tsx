"use client"

import { motion } from 'framer-motion'

export default function History() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-32 px-8 bg-gradient-to-b from-parchment/50 to-earth-red/20"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1 className="text-7xl font-hero mb-12 text-navy text-center bg-gradient-to-r from-earth-red to-gold bg-clip-text text-transparent">
                    🏛️ Empires &amp; Wars
                </motion.h1>
                <motion.p className="text-2xl text-center mb-24 opacity-90 font-display">
                    Ancient civilizations, epic battles, empire strategies, and historical turning points.
                </motion.p>

                {/* Timeline Preview */}
                <div className="grid md:grid-cols-2 gap-8">
                    {[
                        { era: 'Ancient Empires', event: 'Rome, Egypt, Persia', year: '500 BC - 500 AD' },
                        { era: 'Medieval Wars', event: 'Crusades &amp; Mongols', year: '500-1500' },
                        { era: 'Modern Conflicts', event: 'World Wars &amp; Cold War', year: '1500-2000' },
                        { era: 'Future Strategies', event: 'AI Warfare &amp; Cyber', year: '2025+' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.era}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass p-12 rounded-3xl hover:shadow-gold-lg cursor-pointer relative overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-earth-red/20 to-gold/10" />
                            <h3 className="text-3xl font-bold mb-4 relative z-10">{item.era}</h3>
                            <p className="text-xl opacity-90 mb-4 relative z-10 font-ui">{item.event}</p>
                            <div className="text-gold text-2xl font-mono relative z-10">{item.year}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
