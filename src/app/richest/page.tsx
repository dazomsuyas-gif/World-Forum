"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CountUp } from 'react-countup'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import confetti from 'canvas-confetti'

gsap.registerPlugin(ScrollTrigger)

export default function Richest() {
    const tableRef = useRef(null)
    const heroRef = useRef(null)
    const ctaRef = useRef(null)
    const isTableInView = useInView(tableRef, { once: true, margin: "-20%" })
    const isHeroInView = useInView(heroRef, { once: true })

    useEffect(() => {
        // Hero stagger GSAP
        if (isHeroInView && heroRef.current) {
            gsap.fromTo(heroRef.current.children,
                { opacity: 0, y: 40, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.2,
                    stagger: 0.2,
                    ease: "back.out(1.7)"
                }
            )
        }

        // Table GSAP scroll staggers
        if (isTableInView && tableRef.current) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: tableRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })
                .fromTo("thead th", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" })
                .fromTo("tbody tr", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.7)" }, "-=0.3")
                .fromTo(".rank-cell", { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 0.6, stagger: 0.15 }, "-=0.5")
                .fromTo(".worth-cell .count-num", { innerHTML: 0 }, { innerHTML: 421, duration: 2.5, stagger: 0.2, snap: { innerHTML: 1 }, ease: "power2.out" }, "-=1")
        }

        // CTA confetti hover
        const ctaBtn = ctaRef.current?.querySelector('.confetti-cta')
        if (ctaBtn) {
            ctaBtn.addEventListener('mouseenter', () => {
                confetti({
                    particleCount: 80,
                    spread: 60,
                    origin: { y: 0.7, x: 0.5 },
                    colors: ['#FCD34D', '#FBBF24', '#EAB308']
                })
            })
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [isTableInView, isHeroInView])

    const tableData = [
        { rank: 1, name: 'Elon Musk', worth: 421, source: 'Tesla/SpaceX', country: '🇺🇸 USA' },
        { rank: 2, name: 'Bernard Arnault', worth: 233, source: 'LVMH', country: '🇫🇷 France' },
        { rank: 3, name: 'Jeff Bezos', worth: 206, source: 'Amazon', country: '🇺🇸 USA' },
        { rank: 4, name: 'Mark Zuckerberg', worth: 197, source: 'Meta', country: '🇺🇸 USA' },
        { rank: 5, name: 'Larry Ellison', worth: 173, source: 'Oracle', country: '🇺🇸 USA' },
        { rank: 6, name: 'Warren Buffett', worth: 155, source: 'Berkshire', country: '🇺🇸 USA' },
        { rank: 7, name: 'Larry Page', worth: 148, source: 'Google', country: '🇺🇸 USA' },
        { rank: 8, name: 'Sergey Brin', worth: 144, source: 'Google', country: '🇺🇸 USA' },
        { rank: 9, name: 'Steve Ballmer', worth: 138, source: 'Microsoft', country: '🇺🇸 USA' },
        { rank: 10, name: 'Mukesh Ambani', worth: 127, source: 'Reliance', country: '🇮🇳 India' }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    }

    const rowVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy via-steel to-midnight relative overflow-hidden">
            {/* Savanna dust overlay like home */}
            <div className="absolute inset-0 pointer-events-none animate-safari-dust z-10">
                <div className="float w-2 h-2 bg-savanna-gold/30 rounded-full absolute top-10 left-20 animate-twinkle" />
                <div className="float w-1.5 h-1.5 bg-earth-brown/40 absolute top-40 right-10 animate-float delay-1000" />
                <div className="float w-3 h-3 bg-gold/20 absolute bottom-60 left-80 animate-pulse delay-2000" />
            </div>

            {/* Navbar */}
            <Navbar />

            {/* Hero */}
            <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center text-white text-center px-8 z-20">
                <motion.div
                    className="glass p-12 max-w-4xl mx-auto rounded-3xl backdrop-blur-xl shadow-2xl border border-glass-border/50 hover:shadow-gold-lg transition-all duration-500"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-bright shimmer glow-pulse"
                        custom={0}
                        variants={{
                            hidden: { scale: 0.8, opacity: 0 },
                            visible: { scale: 1, opacity: 1 }
                        }}
                    >
                        Richest People Live
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-3xl font-display opacity-90 max-w-2xl mx-auto leading-relaxed"
                        custom={1}
                        variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: { y: 0, opacity: 1 }
                        }}
                    >
                        Real-time billionaire rankings, profiles, net worth trackers, and success insights from around the globe.
                    </motion.p>
                </motion.div>
            </section>

            {/* Top 10 Table */}
            <section ref={tableRef} className="py-24 px-8 max-w-7xl mx-auto z-20">
                <motion.h2
                    className="text-5xl md:text-6xl font-display text-center text-navy mb-20 bg-gradient-to-r from-navy to-steel bg-clip-text shimmer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    🌍 Live Top 10 Billionaires
                </motion.h2>
                <div className="glass rounded-3xl overflow-hidden shadow-3xl border border-gold/20 hover:shadow-gold-xl/50 transition-all duration-700 backdrop-blur-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-white">
                            <thead className="bg-steel/70 backdrop-blur-md sticky top-0 z-10">
                                <tr>
                                    <th className="p-8 text-left text-2xl font-bold text-gold rank-header">#</th>
                                    <th className="p-8 text-left text-2xl font-bold text-navy name-header">Name</th>
                                    <th className="p-8 text-left text-2xl font-bold text-gold worth-header">Net Worth</th>
                                    <th className="p-8 text-left text-xl font-bold text-steel source-header">Source</th>
                                    <th className="p-8 text-left text-2xl font-bold text-emerald country-header">Country</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((person, i) => (
                                    <motion.tr
                                        key={person.name}
                                        className="hover:bg-steel/40 transition-all duration-300 group cursor-pointer border-b border-glass-border/50 hover:border-gold/50 hover:shadow-xl hover:scale-[1.01] hover:rounded-2xl mx-2 my-1"
                                        variants={rowVariants}
                                        custom={i}
                                    >
                                        <td className="p-8 font-hero text-3xl rank-cell group-hover:text-gold-bright glow-pulse">{person.rank}</td>
                                        <td className="p-8 font-bold text-2xl md:text-xl text-white group-hover:text-gold">{person.name}</td>
                                        <td className="p-8 font-mono text-3xl worth-cell text-gold">
                                            $<CountUp end={person.worth} duration={2} separator="," prefix="" suffix="B" className="count-num font-hero" />
                                        </td>
                                        <td className="p-8 font-ui opacity-90 group-hover:opacity-100">{person.source}</td>
                                        <td className="p-8 font-emoji text-3xl">{person.country}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="text-center mt-12 text-steel text-lg opacity-75 font-ui">
                    * Updates every 5 minutes from verified sources • Last update: {new Date().toLocaleTimeString()}
                </div>
            </section>

            {/* CTA */}
            <section ref={ctaRef} className="py-32 bg-gradient-to-r from-parchment/40 to-savanna-gold/10 text-center relative z-20">
                <div className="max-w-3xl mx-auto px-8 glass p-16 rounded-3xl shadow-2xl border border-gold/30 hover:shadow-gold-xl/70 transition-all duration-700 backdrop-blur-xl">
                    <motion.h2
                        className="text-5xl md:text-6xl font-hero mb-8 bg-gradient-to-r from-navy via-steel to-navy bg-clip-text text-transparent shimmer"
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                    >
                        Follow the Wealth Journey
                    </motion.h2>
                    <motion.p
                        className="text-2xl opacity-90 mb-16 font-display max-w-2xl mx-auto leading-relaxed"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Track the world's most successful minds, learn their strategies, and insights from billionaire lifestyles.
                    </motion.p>
                    <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
                        <motion.a
                            href="/knowledge/richest"
                            className="confetti-cta btn-primary text-2xl px-16 py-8 font-bold shadow-2xl hover:shadow-gold-2xl hover:scale-110 transition-all duration-500 glow-pulse"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            whileHover={{ scale: 1.1, y: -8 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            📖 Richest Articles & Profiles
                        </motion.a>
                        <motion.a
                            href="/"
                            className="btn-secondary text-2xl px-16 py-8 font-bold shadow-xl hover:shadow-gold-lg hover:scale-110 transition-all duration-500"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            🏠 Explore Home
                        </motion.a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />

            {/* Scroll Progress */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-gold-bright z-50 origin-left transform scale-x-0 group/progress" id="progress-bar">
                <div className="progress-fill h-full bg-gold shadow-gold-glow" />
            </div>
        </div>
    )
}

