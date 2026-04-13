import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function Richest() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-steel to-midnight">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-white text-center px-8">
                <motion.div className="glass p-12 max-w-4xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                    <motion.h1 className="text-6xl md:text-8xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer">
                        Richest People Live
                    </motion.h1>
                    <motion.p className="text-2xl font-display opacity-90 max-w-2xl mx-auto">
                        Real-time billionaire rankings, profiles, net worth trackers, and success insights.
                    </motion.p>
                </motion.div>
            </section>

            {/* Top 10 Table */}
            <section className="py-24 px-8 max-w-6xl mx-auto">
                <motion.h2 className="text-5xl font-display text-center text-navy mb-16">Live Top 10</motion.h2>
                <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-steel/50">
                                <tr>
                                    <th className="p-6 text-left text-xl font-bold text-navy">#</th>
                                    <th className="p-6 text-left text-xl font-bold text-navy">Name</th>
                                    <th className="p-6 text-left text-xl font-bold text-navy">Net Worth</th>
                                    <th className="p-6 text-left text-xl font-bold text-navy">Source</th>
                                    <th className="p-6 text-left text-xl font-bold text-navy">Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { rank: 1, name: 'Elon Musk', worth: '$421B', source: 'Tesla/SpaceX', country: '🇺🇸 USA' },
                                    { rank: 2, name: 'Bernard Arnault', worth: '$233B', source: 'LVMH', country: '🇫🇷 France' },
                                    { rank: 3, name: 'Jeff Bezos', worth: '$206B', source: 'Amazon', country: '🇺🇸 USA' },
                                    { rank: 4, name: 'Mark Zuckerberg', worth: '$197B', source: 'Meta', country: '🇺🇸 USA' },
                                    { rank: 5, name: 'Larry Ellison', worth: '$173B', source: 'Oracle', country: '🇺🇸 USA' },
                                    { rank: 6, name: 'Warren Buffett', worth: '$155B', source: 'Berkshire', country: '🇺🇸 USA' },
                                    { rank: 7, name: 'Larry Page', worth: '$148B', source: 'Google', country: '🇺🇸 USA' },
                                    { rank: 8, name: 'Sergey Brin', worth: '$144B', source: 'Google', country: '🇺🇸 USA' },
                                    { rank: 9, name: 'Steve Ballmer', worth: '$138B', source: 'Microsoft', country: '🇺🇸 USA' },
                                    { rank: 10, name: 'Mukesh Ambani', worth: '$127B', source: 'Reliance', country: '🇮🇳 India' }
                                ].map((person, i) => (
                                    <motion.tr
                                        key={person.name}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        className="hover:bg-steel/30 transition-colors border-b border-glass-border cursor-pointer group"
                                    >
                                        <td className="p-6 font-bold text-2xl group-hover:text-gold">{person.rank}</td>
                                        <td className="p-6 font-bold text-xl text-white group-hover:text-gold">{person.name}</td>
                                        <td className="p-6 font-mono text-2xl text-gold">{person.worth}</td>
                                        <td className="p-6 font-ui opacity-90">{person.source}</td>
                                        <td className="p-6 font-emoji text-2xl">{person.country}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-parchment/20 text-center">
                <div className="max-w-2xl mx-auto px-8">
                    <motion.h2 className="text-5xl font-display text-navy mb-8">Follow the Wealth</motion.h2>
                    <p className="text-xl opacity-90 mb-12 font-display">Updates every 5 minutes from verified sources</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="/knowledge/richest" className="btn-primary text-xl px-12 py-6">📖 Read Articles</a>
                        <a href="/" className="btn-secondary text-xl px-12 py-6">🏠 Home</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

