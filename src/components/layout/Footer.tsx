export default function Footer() {
    return (
        <footer className="bg-navy text-white-soft py-16 mt-32">
            <motion.div
                className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ staggerChildren: 0.2 }}
            >
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
                    <motion.h3
                        className="text-3xl font-display bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent mb-6 wave-anim"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    >
                        WORLD FORUM
                    </motion.h3>
                    <motion.p className="opacity-75 mb-8" initial={{ x: -20 }} whileInView={{ x: 0 }}>
                        Knowledge Without Borders
                    </motion.p>
                    <div className="flex gap-4">
                        <motion.a
                            href="https://twitter.com/officialmsuya"
                            className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-gold transition-all bounce-in"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            𝕏
                        </motion.a>
                        <motion.a
                            href="https://instagram.com/mk_africa21"
                            className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-gold transition-all bounce-in"
                            whileHover={{ scale: 1.2, rotate: -360 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            📷
                        </motion.a>
                        <motion.a
                            href="tel:+255768868546"
                            className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-all bounce-in"
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            📱
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><motion.a href="/richest" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Richest People</motion.a></li>
                        <li><motion.a href="/languages" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Language Academy</motion.a></li>
                        <li><motion.a href="/stories" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Stories</motion.a></li>
                        <li><motion.a href="/marketplace" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Marketplace</motion.a></li>
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-2">
                        <li><motion.a href="/about" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>About</motion.a></li>
                        <li><motion.a href="/why-choose-us" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Why Choose Us</motion.a></li>
                        <li><motion.a href="/contact" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Contact</motion.a></li>
                        <li><motion.a href="/privacy-policy" className="hover:text-gold transition-all" whileHover={{ x: 10 }}>Privacy</motion.a></li>
                    </ul>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                    <h4 className="font-bold text-lg mb-6">Contact</h4>
                    <motion.p initial={{ x: 20 }} whileInView={{ x: 0 }}>+255 768 868 546</motion.p>
                    <motion.p initial={{ x: 20 }} whileInView={{ x: 0 }}>+255 767 456 512</motion.p>
                    <motion.p initial={{ x: 20 }} whileInView={{ x: 0 }}>dazomsuyas@gmail.com</motion.p>
                    <motion.p initial={{ x: 20 }} whileInView={{ x: 0 }}>kelvinmsuya63@gmail.com</motion.p>
                </motion.div>
            </motion.div>

            <div className="border-t border-steel mt-12 pt-8 text-center opacity-75">
                <p>&copy; 2024 World Forum. All rights reserved. Owner: Kelvin Juma Msuya</p>
            </div>
        </footer>
    )
}

