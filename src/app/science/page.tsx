"use client"

import { motion } from 'framer-motion'

export default function Science() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen py-32 px-8 bg-gradient-to-b from-parchment/50 to-savanna-gold/20"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1 className="text-7xl font-hero mb-12 text-navy text-center bg-gradient-to-r from-science-blue to-science-purple bg-clip-text text-transparent">
                    🔬 Science &amp; Nature
                </motion.h1>
                <motion.p className="text-2xl text-center mb-24 opacity-90 font-display">
                    Latest breakthroughs, discoveries, ecology, and cutting-edge research from around the globe.
                </motion.p>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { title: 'Quantum Physics', desc: 'Subatomic world discoveries', color: 'science-blue' },
                        { title: 'Biotechnology', desc: 'Genetic engineering advances', color: 'science-green' },
                        { title: 'Climate Science', desc: 'Environmental research', color: 'earth-green' },
                        { title: 'Astronomy', desc: 'Cosmic explorations', color: 'space-purple' },
                        { title: 'Neuroscience', desc: 'Brain &amp; consciousness', color: 'brain-pink' },
                        { title: 'Materials Science', desc: 'Next-gen materials', color: 'tech-silver' }
                    ].map((cat, i) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className={`glass p-8 rounded-3xl hover:shadow-2xl cursor-pointer group border border-${cat.color}/20 hover:border-${cat.color}/40`}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <h3 className="text-3xl font-bold mb-4 text-navy group-hover:text-gold">{cat.title}</h3>
                            <p className="opacity-80 font-ui">{cat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
