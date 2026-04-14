import { motion } from 'framer-motion'


export default function Contact() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-steel to-midnight">
            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center text-white text-center px-8">
                <motion.div className="glass p-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <motion.h1 className="text-6xl md:text-8xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer">
                        Get In Touch
                    </motion.h1>
                    <motion.p className="text-2xl font-display opacity-90">
                        Ready to collaborate? Let's build the future of knowledge together.
                    </motion.p>
                </motion.div>
            </section>

            {/* Contact Info */}
            <section className="py-24 px-8 max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-12">
                    <motion.div className="glass p-12 rounded-3xl text-center lg:text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="text-5xl mb-8">📱</div>
                        <h3 className="text-3xl font-bold text-navy mb-6">Phone</h3>
                        <div className="space-y-4 text-xl">
                            <a href="tel:+255768868546" className="block hover:text-gold transition-colors font-ui">+255 768 868 546</a>
                            <a href="tel:+255767456512" className="block hover:text-gold transition-colors font-ui">+255 767 456 512</a>
                        </div>
                    </motion.div>
                    <motion.div className="glass p-12 rounded-3xl text-center lg:text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <div className="text-5xl mb-8">✉️</div>
                        <h3 className="text-3xl font-bold text-navy mb-6">Email</h3>
                        <div className="space-y-4 text-xl">
                            <a href="mailto:dazomsuyas@gmail.com" className="block hover:text-gold transition-colors font-ui">dazomsuyas@gmail.com</a>
                            <a href="mailto:kelvinmsuya63@gmail.com" className="block hover:text-gold transition-colors font-ui">kelvinmsuya63@gmail.com</a>
                        </div>
                    </motion.div>
                    <motion.div className="glass p-12 rounded-3xl text-center lg:text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <div className="text-5xl mb-8">📍</div>
                        <h3 className="text-3xl font-bold text-navy mb-6">Social</h3>
                        <div className="space-y-4 text-xl">
                            <a href="https://twitter.com/officialmsuya" className="block hover:text-gold transition-colors font-ui">Twitter</a>
                            <a href="https://instagram.com/mk_africa21" className="block hover:text-gold transition-colors font-ui">Instagram</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-parchment/20 text-center">
                <div className="max-w-2xl mx-auto px-8">
                    <motion.h2 className="text-5xl font-display text-navy mb-8">Start a Conversation</motion.h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="mailto:dazomsuyas@gmail.com?subject=World%20Forum%20Inquiry" className="btn-primary text-xl px-12 py-6">📧 Send Email</a>
                        <a href="/" className="btn-secondary text-xl px-12 py-6">🏠 Back Home</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

