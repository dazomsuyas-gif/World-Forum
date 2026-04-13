import { motion } from 'framer-motion'

export default function Stories() {
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-midnight via-navy/50 to-steel overflow-hidden">
            {/* Hero */}
            <section className="h-screen flex items-center justify-center text-white text-center px-8 relative horrorFlicker">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, type: 'spring' }}
                    className="glass p-20 max-w-5xl mx-auto rounded-4xl backdrop-blur-3xl"
                >
                    <motion.h1
                        className="text-8xl md:text-10xl font-hero mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gold to-crimson shimmer animate-heartBeat"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                    >
                        STORIES NETWORK
                    </motion.h1>
                    <motion.p
                        className="text-4xl md:text-6xl font-display mb-16 opacity-85 leading-tight max-w-4xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: 0.6 }}
                    >
                        Infinite Worlds of Horror • Romance • Sci-Fi • Fantasy
                    </motion.p>
                    <motion.div
                        className="flex flex-col xl:flex-row gap-8 justify-center items-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        <motion.button
                            className="btn-primary glow-pulse text-3xl px-20 py-10 shadow-4xl relative overflow-hidden"
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            <span>👻 Horror Vault</span>
                            <div className="absolute inset-0 bg-crimson/30 blur-xl animate-pulse opacity-0 hover:opacity-100 transition-opacity" />
                        </motion.button>
                        <motion.button
                            className="btn-secondary text-3xl px-20 py-10"
                            whileHover={{ scale: 1.05 }}
                        >
                            💕 Romance
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Floating book elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="float w-20 h-24 bg-gold/20 rounded-lg absolute top-1/4 left-10 animate-twinkle blur-sm" />
                    <div className="w-32 h-8 bg-crimson/30 absolute top-2/3 right-20 rotate-12 animate-bounce-gentle" />
                    <div className="w-16 h-20 bg-purple/25 rounded absolute bottom-32 left-1/4 animate-pulse delay-1000" />
                </div>
            </section>

            {/* Genres Grid */}
            <section className="py-32 px-8 max-w-7xl mx-auto">
                <motion.h2 className="text-6xl xl:text-7xl font-display text-center mb-28 text-gold mb-8">
                    Epic Genres Await
                </motion.h2>
                <div className="grid lg:grid-cols-4 gap-12">
                    {[
                        { genre: '👻 Horror', desc: 'Psychological thrillers to supernatural terror', color: 'crimson', stories: 247 },
                        { genre: '💕 Romance', desc: 'Passionate love stories across cultures', color: 'pink', stories: 189 },
                        { genre: '🪐 Sci-Fi', desc: 'Futuristic worlds and space odysseys', color: 'blue', stories: 312 },
                        { genre: '🧙 Fantasy', desc: 'Magic realms and mythical creatures', color: 'purple', stories: 276 }
                    ].map((genre, i) => (
                        <motion.div
                            key={genre.genre}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 * i }}
                            whileHover={{ scale: 1.03, rotateY: 5 }}
                            className={`glass p-12 rounded-4xl relative overflow-hidden group cursor-pointer border-2 border-${genre.color}/30 hover:border-${genre.color}/60 transition-all duration-700`}
                        >
                            <div className={`absolute top-8 right-8 text-6xl opacity-20 group-hover:opacity-40 transition-opacity`}>{genre.genre.split(' ')[0]}</div>
                            <div className="relative z-10">
                                <h3 className={`text-4xl font-hero mb-6 bg-gradient-to-r from-${genre.color} to-white bg-clip-text text-transparent`}>{genre.genre.split(' ')[1]}</h3>
                                <p className="text-xl opacity-90 mb-8 font-display leading-relaxed">{genre.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-mono text-gold">{genre.stories}+ Stories</span>
                                    <motion.div
                                        className={`w-24 h-2 bg-${genre.color} rounded-full group-hover:w-32 transition-all`}
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                    />
                                </div>
                            </div>
                            <div className={`absolute inset-0 bg-gradient-to-br from-${genre.color}/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl`} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center relative">
                <div className="max-w-4xl mx-auto px-8 glass p-20 rounded-4xl mx-8">
                    <motion.h2
                        className="text-7xl font-hero mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gold via-crimson to-purple animate-shimmerText"
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                    >
                        Your Story Starts Here
                    </motion.h2>
                    <motion.p className="text-3xl opacity-90 mb-16 font-display">
                        Join thousands lost in infinite worlds - horror that haunts, romance that heals, sci-fi that inspires
                    </motion.p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <motion.button className="btn-primary text-2xl px-20 py-10 glow-pulse mx-auto md:mx-0">
                            📖 Dive Into Horror (Free)
                        </motion.button>
                        <motion.a href="/" className="btn-secondary text-2xl px-20 py-10">
                            🏠 Back to Home
                        </motion.a>
                    </div>
                </div>
            </section>
        </div>
    )
}

