import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Globe3D from '@/components/effects/Globe3D'

export default function Languages() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-tanzania-savanna/50 via-savanna-gold/10 to-navy/20 overflow-hidden">
            {/* Hero */}
            <section className="parallax-container h-screen flex items-center justify-center text-white text-center px-8 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="glass p-16 max-w-5xl mx-auto rounded-3xl"
                >
                    <motion.h1
                        className="text-7xl md:text-9xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                    >
                        Language Academy
                    </motion.h1>
                    <motion.p
                        className="text-3xl md:text-5xl font-display mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.5 }}
                    >
                        Master 50+ Languages with AI-Powered Tutors and Immersive Practice
                    </motion.p>
                    <motion.div
                        className="flex flex-col lg:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <motion.button
                            className="btn-primary glow-pulse text-2xl px-12 py-8 shadow-2xl hover:shadow-gold-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            🎯 Start Learning Swahili
                        </motion.button>
                        <motion.a
                            href="/"
                            className="btn-secondary text-2xl px-12 py-8"
                            whileHover={{ scale: 1.05 }}
                        >
                            🏠 Explore Home
                        </motion.a>
                    </motion.div>
                </motion.div>
            </section>

            {/* Languages Grid */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <motion.h2 className="text-6xl font-display text-center mb-24 text-navy">
                    World Languages by Popularity
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { lang: '🇺🇸 English', level: 'A1-C2', speakers: '1.5B', color: 'blue' },
                        { lang: '🇨🇳 Mandarin', level: 'HSK1-6', speakers: '1.1B', color: 'red' },
                        { lang: '🇪🇸 Spanish', level: 'A1-C2', speakers: '559M', color: 'orange' },
                        { lang: '🇹🇿 Kiswahili', level: 'A1-C2', speakers: '200M', color: 'green' },
                        { lang: '🇫🇷 French', level: 'A1-C2', speakers: '310M', color: 'purple' },
                        { lang: '🇦🇷 Arabic', level: 'A1-C2', speakers: '274M', color: 'gold' },
                        { lang: '🇧🇷 Portuguese', level: 'A1-C2', speakers: '279M', color: 'pink' },
                        { lang: '🇮🇳 Hindi', level: 'A1-C3', speakers: '602M', color: 'navy' },
                        { lang: '🇩🇪 German', level: 'A1-C2', speakers: '134M', color: 'steel' }
                    ].map((language, i) => (
                        <motion.div
                            key={language.lang}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`glass p-10 rounded-3xl cursor-pointer hover:shadow-${language.color}-lg border border-${language.color}/20 hover:border-${language.color}/50 transition-all duration-500`}
                        >
                            <div className="flex items-center gap-6 mb-6">
                                <div className={`text-4xl`}>{language.lang.split(' ')[0]}</div>
                                <div>
                                    <h3 className={`text-3xl font-bold text-${language.color}`}>{language.lang.split(' ')[1]}</h3>
                                    <p className="opacity-75 font-ui">{language.level}</p>
                                </div>
                            </div>
                            <p className="text-2xl font-mono text-gold mb-4">{language.speakers} Speakers</p>
                            <div className="flex items-center gap-2 text-gold font-bold">
                                <span>Start Now →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* TZ Highlight */}
            <section className="py-24 bg-gradient-to-r from-green-500/20 to-gold/20 text-center">
                <div className="max-w-4xl mx-auto px-8">
                    <motion.h2 className="text-5xl md:text-6xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-gold">
                        🌍 Tanzania Languages Special
                    </motion.h2>
                    <motion.p
                        className="text-2xl opacity-90 mb-12 font-display"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Master Swahili, Chaga, Maasai with local instructors and cultural immersion programs
                    </motion.p>
                    <motion.a
                        href="#swahili"
                        className="btn-primary text-xl px-16 py-8 mx-auto block max-w-md"
                        whileHover={{ scale: 1.05 }}
                    >
                        🇹🇿 Learn Swahili Now (Hakuna Matata!)
                    </motion.a>
                </div>
            </section>
        </div>
    )
}

