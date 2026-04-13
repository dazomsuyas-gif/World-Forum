import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-steel to-midnight">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-white text-center px-8">
                <motion.div className="glass p-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <motion.h1 className="text-6xl md:text-8xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer">
                        About World Forum
                    </motion.h1>
                    <motion.p className="text-2xl font-display opacity-90 max-w-2xl mx-auto">
                        Knowledge platform connecting global minds across 14 categories, 50+ languages, live rankings.
                    </motion.p>
                </motion.div>
            </section>

            {/* Mission */}
            <section className="py-24 px-8 max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                        <h2 className="text-5xl font-display text-navy mb-8">Our Mission</h2>
                        <p className="text-xl text-steel leading-relaxed mb-8">Break knowledge borders. 250+ articles, billionaire insights, language mastery, epic stories - all in one place.</p>
                        <ul className="space-y-4 text-steel font-ui">
                            <li className="flex items-start gap-4"><span className="text-gold text-2xl mt-1">•</span> Global community of thinkers</li>
                            <li className="flex items-start gap-4"><span className="text-gold text-2xl mt-1">•</span> Real-time richest rankings</li>
                            <li className="flex items-start gap-4"><span className="text-gold text-2xl mt-1">•</span> AI-powered learning</li>
                        </ul>
                    </motion.div>
                    <motion.div className="glass p-12 rounded-3xl" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                        <h3 className="text-3xl font-bold text-navy mb-6">Stats</h3>
                        <div className="grid grid-cols-2 gap-8 text-center">
                            <div><div className="text-4xl font-hero shimmer mb-2">250+</div><p className="opacity-80">Articles</p></div>
                            <div><div className="text-4xl font-hero shimmer mb-2">50+</div><p className="opacity-80">Languages</p></div>
                            <div><div className="text-4xl font-hero shimmer mb-2">100k+</div><p className="opacity-80">Members</p></div>
                            <div><div className="text-4xl font-hero shimmer mb-2">14</div><p className="opacity-80">Categories</p></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team/Contact CTA */}
            <section className="py-24 bg-parchment/20">
                <div className="max-w-2xl mx-auto text-center px-8">
                    <motion.h2 className="text-5xl font-display text-navy mb-8">Join the Movement</motion.h2>
                    <p className="text-xl opacity-90 mb-12 font-display">Founded by Kelvin Juma Msuya</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/contact" className="btn-primary text-xl px-12 py-6">📞 Contact Us</a>
                        <a href="/" className="btn-secondary text-xl px-12 py-6">🏠 Home</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

