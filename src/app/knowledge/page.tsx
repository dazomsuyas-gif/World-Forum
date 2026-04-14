"use client"

import { motion } from 'framer-motion'

export default function Knowledge() {
    const categories = [
        { icon: '📚', title: 'World Knowledge', desc: 'Comprehensive articles across all domains', color: 'science', href: '/knowledge' },
        { icon: '💰', title: 'Richest People', desc: 'Billionaire rankings & success stories', color: 'richest', href: '/richest' },
        { icon: '🗣️', title: 'Languages', desc: '50+ languages with AI tutors', color: 'lang-english', href: '/languages' },
        { icon: '📖', title: 'Stories', desc: 'Horror, romance, sci-fi epics', color: 'stories', href: '/stories' },
        { icon: '👥', title: 'Community', desc: 'Global forums & members', color: 'community', href: '/community' },
        { icon: '🛒', title: 'Marketplace', desc: 'Books, courses, content', color: 'marketplace', href: '/marketplace' },
        { icon: '🔬', title: 'Science', desc: 'Breakthroughs & discoveries', color: 'science', href: '/science' },
        { icon: '🌿', title: 'Nature', desc: 'Ecology & wildlife', color: 'nature', href: '/nature' },
        { icon: '🏛️', title: 'Empires', desc: 'Ancient civilizations', color: 'empires', href: '/empires' },
        { icon: '⚔️', title: 'Wars', desc: 'Military history & strategy', color: 'wars', href: '/wars' },
        { icon: '❤️', title: 'Health', desc: 'Wellness & medicine', color: 'health', href: '/health' },
        { icon: '🎭', title: 'Culture', desc: 'Arts & traditions', color: 'culture', href: '/culture' },
        { icon: '🍲', title: 'Food', desc: 'Cuisine & nutrition', color: 'food', href: '/food' },
        { icon: '✈️', title: 'Tourism', desc: 'Travel & destinations', color: 'tourism', href: '/tourism' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-steel to-midnight relative overflow-hidden">
            {/* Hero */}
            <section className="relative h-[70vh] flex items-center justify-center text-white text-center px-8">
                <motion.div className="glass p-16 max-w-5xl mx-auto rounded-3xl" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
                    <motion.h1 className="text-7xl md:text-9xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer">
                        Knowledge Hub
                    </motion.h1>
                    <motion.p className="text-3xl font-display opacity-90 max-w-3xl mx-auto">
                        250+ Articles Across 14 Categories • Breaking Borders of Understanding
                    </motion.p>
                </motion.div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 px-8 max-w-7xl mx-auto">
                <motion.h2 className="text-6xl font-display text-center text-navy mb-20">
                    14 Knowledge Pillars
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                    {categories.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className={`glass p-10 rounded-3xl cursor-pointer hover:shadow-gold-lg border border-${category.color}/20 hover:border-${category.color}/50 transition-all duration-500`}
                        >
                            <div className="text-6xl mb-6">{category.icon}</div>
                            <h3 className="text-3xl font-bold text-navy mb-4">{category.title}</h3>
                            <p className="opacity-80 text-steel font-ui mb-6">{category.desc}</p>
                            <a href={category.href} className={`text-${category.color} font-bold hover:text-gold-bright`}>Explore →</a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-parchment/20 text-center">
                <div className="max-w-3xl mx-auto px-8 glass p-16 rounded-3xl">
                    <motion.h2 className="text-6xl font-hero mb-8 bg-gradient-to-r from-navy to-steel bg-clip-text text-transparent shimmer">
                        Start Learning Today
                    </motion.h2>
                    <p className="text-2xl opacity-90 mb-12 font-display">Unlimited knowledge at your fingertips</p>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <a href="/signup" className="btn-primary text-2xl px-16 py-8">🚀 Begin Journey</a>
                        <a href="/" className="btn-secondary text-2xl px-16 py-8">🏠 Home</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
