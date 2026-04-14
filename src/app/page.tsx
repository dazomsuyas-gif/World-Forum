"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { CountUp } from 'react-countup'
import gsap from 'gsap'
import Globe3D from '@/components/effects/Globe3D'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import confetti from 'canvas-confetti'

export default function Home() {
    const statsRef = useRef(null)
    const parallaxRef = useRef(null)

    useEffect(() => {
        // GSAP parallax
        gsap.to(parallaxRef.current, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })

        // Countup trigger
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(entry.target.querySelectorAll('.count-num'), {
                        textContent: 0,
                        duration: 2.5,
                        ease: "power2.out",
                        snap: { textContent: 1 },
                        stagger: 0.3
                    })
                }
            })
        })
        if (statsRef.current) observer.observe(statsRef.current)

        // Confetti on CTA hover (mock)
        const cta = document.querySelector('.confetti-cta')
        if (cta) {
            cta.addEventListener('mouseenter', () => {
                confetti({
                    particleCount: 50,
                    spread: 70,
                    origin: { y: 0.8 }
                })
            })
        }

        return () => observer.disconnect()
    }, [])

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-tanzania-savanna/70 via-savanna-gold/20 to-earth-brown/30 overflow-hidden">
            {/* Parallax Kili overlay */}
            <div ref={parallaxRef} className="absolute inset-0 bg-kilimanjar o-hero opacity-50 mix-blend-overlay parallax" style={{ backgroundSize: 'cover', backgroundPosition: 'center 20%' }} />
            {/* Dust particles */}
            <div className="absolute inset-0 animate-safari-dust pointer-events-none">
                <div className="float w-2 h-2 bg-savanna-gold/40 rounded-full absolute top-20 left-10 animate-twinkle" />
                <div className="float w-1 h-1 bg-earth-brown/60 absolute top-40 right-20 animate-float delay-1000" />
            </div>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center text-white max-w-4xl mx-auto p-8 glass"
                >
                    <motion.h1
                        className="text-7xl md:text-9xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        WORLD FORUM
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-4xl font-display mb-12 opacity-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.9 }}
                        transition={{ delay: 0.5 }}
                    >
                        Knowledge Without Borders
                    </motion.p>
                    <motion.div
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, type: 'spring' }}
                    >
                        <motion.a
                            href="/richest"
                            className="btn-primary glow-pulse text-xl px-10 py-6 font-ui shadow-2xl hover:shadow-gold-lg hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            💰 Richest People Live
                        </motion.a>
                        <motion.a
                            href="/languages"
                            className="btn-secondary text-xl px-10 py-6 font-ui shadow-xl hover:shadow-gold/50 hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            🗣️ Language Academy
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="float w-[18px] h-[18px] bg-gradient-to-r from-gold to-gold-bright rounded-full absolute top-1/4 left-10 animate-pulse opacity-60" />
                    <div className="float w-12 h-12 bg-gradient-radial from-gold/30 rounded-full absolute top-1/3 right-16 blur-xl" />
                    <div className="w-[26px] h-[26px] bg-gold-bright rounded-full absolute bottom-40 left-1/4 animate-bounce opacity-70 delay-1000" />
                    <div className="w-8 h-8 bg-gradient-to-b from-white/20 absolute bottom-1/3 right-1/4 animate-ping" />
                    <div className="float w-3 h-3 bg-gold absolute top-[15%] right-[15%] animate-twinkle" />
                    <div className="float w-6 h-6 bg-gold/40 rounded-full absolute bottom-[20%] left-[75%] blur-sm animate-pulse delay-2000" />
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-32 bg-parchment/20">
                <div className="max-w-6xl mx-auto px-8">
                    <motion.h2 className="text-5xl font-display text-center mb-24 text-navy">
                        8 World-Class Pillars
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: '📚', title: 'Knowledge Hub', desc: '250+ articles across 14 categories', color: 'science', href: '/knowledge' },
                            { icon: '💰', title: 'Richest People', desc: 'Live billionaire rankings & profiles', color: 'richest', href: '/richest' },
                            { icon: '🗣️', title: 'Language Academy', desc: 'Learn 50+ languages with AI tutors', color: 'lang-english', href: '/languages' },
                            { icon: '📖', title: 'Stories Network', desc: 'Horror, romance, sci-fi epics', color: 'stories', href: '/stories' },
                            { icon: '👥', title: 'Global Community', desc: 'Connect with 100k+ members', color: 'community', href: '/community' },
                            { icon: '🛒', title: 'Digital Marketplace', desc: 'Books, courses, exclusive content', color: 'marketplace', href: '/marketplace' },
                            { icon: '🔬', title: 'Science & Nature', desc: 'Breakthroughs, discoveries, ecology', color: 'science', href: '/science' },
                            { icon: '🏛️', title: 'Empires & Wars', desc: 'History, strategy, ancient civilizations', color: 'empires', href: '/history' }
                        ].map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className={`glass p-8 rounded-3xl group cursor-pointer hover:shadow-2xl hover:shadow-${pillar.color} transition-all duration-500 border border-${pillar.color}/20 hover:border-${pillar.color}/40`}
                            >
                                <div className={`text-5xl mb-6 group-hover:scale-110 transition-transform`}>{pillar.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-navy group-hover:text-gold line-clamp-2">{pillar.title}</h3>
                                <p className="opacity-80 text-steel font-ui leading-relaxed">{pillar.desc}</p>
                                <a href={pillar.href} className="mt-6 inline-block text-gold hover:text-gold-bright font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">Explore →</a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats Row */}
                <motion.div ref={statsRef} className="flex flex-col md:flex-row gap-12 justify-center items-center mt-24 mb-16 countup-stats" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <div className="text-center">
                        <div className="text-5xl font-hero mb-2 shimmer count-num" data-target="250">+</div>
                        <p className="opacity-75 font-ui">Articles</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-hero mb-2 shimmer count-num" data-target="50">+</div>
                        <p className="opacity-75 font-ui">Languages</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl font-hero mb-2 shimmer count-num" data-target="14"></div>
                        <p className="opacity-75 font-ui">Categories</p>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    className="text-center mb-24 glass p-12 rounded-3xl max-w-2xl mx-auto hover:shadow-gold-lg cursor-pointer group"
                    initial={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <h2 className="text-4xl md:text-5xl font-hero mb-6 bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent">Ready to Explore?</h2>
                    <p className="text-xl opacity-90 mb-8 font-display">Join 100k+ global thinkers discovering the world together</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/signup" className="btn-primary text-lg px-12 py-4 glow-pulse confetti-cta">🚀 Get Started Free</a>
                        <a href="/why-choose-us" className="btn-secondary text-lg px-12 py-4">⭐ Why World Forum</a>
                    </div>
                </motion.div>
            </section>
        </div>
    )
}

