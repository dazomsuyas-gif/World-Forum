"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
// import { CountUp } from 'react-countup'
import gsap from 'gsap'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import confetti from 'canvas-confetti'
import { Users, MessageCircle, Users2, Award, Globe2, Link2 } from 'lucide-react'

export default function Community() {
    const statsRef = useRef(null)
    const membersRef = useRef(null)

    useEffect(() => {
        // GSAP animations
        gsap.from('.member-card', {
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: membersRef.current,
                start: 'top 80%'
            }
        })

        // Stats observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(entry.target.querySelectorAll('.count-num'), {
                        textContent: 0,
                        duration: 2.5,
                        ease: \"power2.out\",
                        stagger: 0.3
                    })
                }
            })
        })
        if (statsRef.current) observer.observe(statsRef.current)

        // Confetti on join button
        const joinBtn = document.querySelector('.join-btn')
        if (joinBtn) {
            joinBtn.addEventListener('mouseenter', () => {
                confetti({
                    particleCount: 60,
                    spread: 80,
                    origin: { y: 0.6 }
                })
            })
        }

        return () => observer.disconnect()
    }, [])

    const members = [
        { name: 'Aisha Mwamba', role: 'Tanzania Forum Lead', country: '🇹🇿 TZ', avatar: '😊', posts: 247, followers: 1.2 },
        { name: 'Dr. Jamal Kenyatta', role: 'Science Moderator', country: '🇰🇪 KE', avatar: '🔬', posts: 189, followers: 892 },
        { name: 'Fatima Al-Sayed', role: 'Language Tutor', country: '🇪🇬 EG', avatar: '🗣️', posts: 156, followers: 2.4 },
        { name: 'Kwame Osei', role: 'Richest People Analyst', country: '🇬🇭 GH', avatar: '💰', posts: 312, followers: 5.6 },
        { name: 'Zara Nkosi', role: 'Stories Editor', country: '🇿🇦 ZA', avatar: '📖', posts: 89, followers: 678 },
        { name: 'Marcus Bello', role: 'Community Ambassador', country: '🇳🇬 NG', avatar: '🌍', posts: 423, followers: 3.1 }
    ]

    const forums = [
        { name: 'General Discussions', posts: 2.4, icon: '💬' },
        { name: 'Tanzania Forum', posts: 1.8, icon: '🇹🇿' },
        { name: 'Science & Tech', posts: 3.2, icon: '🔬' },
        { name: 'Languages', posts: 1.1, icon: '🗣️' },
        { name: 'Richest People', posts: 2.9, icon: '💰' },
        { name: 'Storytelling', posts: 890, icon: '📖' }
    ]

    return (
        <div className=\"relative min-h-screen bg-gradient-to-b from-community-blue/70 via-savanna-gold/10 to-earth-brown/40 overflow-hidden\">
    {/* Parallax overlay */ }
    <div className=\"absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/20 parallax\" style={{ backgroundSize: 'cover' }} />

    {/* Hero Section */ }
    <section className=\"relative h-screen flex items-center justify-center overflow-hidden\">
        < motion.div
    initial = {{ opacity: 0, y: 50 }
}
animate = {{ opacity: 1, y: 0 }}
transition = {{ duration: 1 }}
className =\"text-center text-white max-w-4xl mx-auto p-8 glass backdrop-blur-xl\"
    >
    <motion.h1 className=\"text-6xl md:text-8xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold to-blue-400 shimmer\">
                        GLOBAL COMMUNITY
                    </motion.h1 >
    <motion.p className=\"text-2xl md:text-4xl font-display mb-12 opacity-90\">
                        Connect with 100k + thinkers worldwide
                    </motion.p >
    <motion.div className=\"flex flex-col sm:flex-row gap-6 justify-center\"
initial = {{ opacity: 0, y: 30 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.8 }}
                    >
    <motion.button className=\"join-btn btn-primary glow-pulse text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-gold-lg hover:scale-105\">
                            Join Community 🚀
                        </motion.button >
    <motion.a href=\"#members\" className=\"btn-secondary text-xl px-12 py-6 font-bold hover:scale-105\">
                            View Members 👥
                        </motion.a >
                    </motion.div >
                </motion.div >
            </section >

    {/* Stats */ }
    < motion.section ref = { statsRef } className =\"py-24 relative\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        < div className =\"max-w-6xl mx-auto px-8 grid md:grid-cols-4 gap-12 text-center\">
            < div >
            <div className=\"text-6xl font-hero mb-2 count-num\" data-target=\"100\">100</div>
                < p className =\"opacity-80 font-bold text-xl\">K+ Members</p>
                    < Users className =\"w-12 h-12 mx-auto mt-4 text-gold\" />
                    </div >
                    <div>
                        <div className=\"text-6xl font-hero mb-2 count-num\" data-target=\"5\">5</div>
                        <p className=\"opacity-80 font-bold text-xl\">M+ Posts</p>
    < MessageCircle className =\"w-12 h-12 mx-auto mt-4 text-gold\" />
                    </div >
                    <div>
                        <div className=\"text-6xl font-hero mb-2 count-num\" data-target=\"250\">250</div>
                        <p className=\"opacity-80 font-bold text-xl\">Countries</p>
    < Globe2 className =\"w-12 h-12 mx-auto mt-4 text-gold\" />
                    </div >
                    <div>
                        <div className=\"text-6xl font-hero mb-2 count-num\" data-target=\"98\">98</div>
                        <p className=\"opacity-80 font-bold text-xl\">% Active</p>
    < Award className =\"w-12 h-12 mx-auto mt-4 text-gold\" />
                    </div >
                </div >
            </motion.section >

    {/* Featured Members */ }
    < section ref = { membersRef } className =\"py-32 bg-parchment/30 relative\">
        < div className =\"max-w-6xl mx-auto px-8\">
            < motion.h2 className =\"text-5xl font-display text-center mb-20 text-navy\">Featured Members</motion.h2>
                < div className =\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
{
    members.map((member, i) => (
        <motion.div
            key={member.name}
            className=\"member-card glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-blue-500/30 border border-blue-500/20 hover:border-blue-500/50 cursor-pointer group bg-white/80\"
                                whileHover = {{ y: -10, scale: 1.02 }}
                            >
    <div className=\"flex items-center mb-6\">
        < div className =\"text-5xl mr-6 group-hover:scale-110 transition-transform\">{member.avatar}</div>
            < div >
            <h3 className=\"text-2xl font-bold text-navy group-hover:text-blue-600\">{member.name}</h3>
                < p className =\"text-steel font-bold opacity-80\">{member.role}</p>
                    < p className =\"text-sm opacity-60\">{member.country}</p>
                                    </div >
                                </div >
    <div className=\"space-y-3 text-sm\">
        < div className =\"flex items-center text-steel\"><MessageCircle size={16} className=\"mr-2\" /> <span className=\"font-bold\">{member.posts}K</span> posts</div>
            < div className =\"flex items-center text-steel\"><Users2 size={16} className=\"mr-2\" /> <span className=\"font-bold\">{member.followers}K</span> followers</div>
                                </div >
    <div className=\"mt-6 pt-6 border-t border-steel/30 flex justify-between items-center\">
        < span className =\"text-gold font-bold group-hover:underline\">Follow</span>
            < Link2 size = { 18} className =\"text-steel group-hover:text-blue-500\" />
                                </div >
                            </motion.div >
                        ))}
                    </div >
                </div >
            </section >

    {/* Forums Grid */ }
    < section className =\"py-32 bg-gradient-to-b from-blue-50 to-parchment/50\">
        < div className =\"max-w-6xl mx-auto px-8\">
            < motion.h2 className =\"text-5xl font-display text-center mb-20 text-navy\">Active Forums</motion.h2>
                < div className =\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
{
    forums.map((forum, i) => (
        <motion.a
            href=\"#\"
                                key = { forum.name }
                                className =\"glass p-10 rounded-3xl hover:shadow-2xl hover:shadow-gold/30 border border-gold/20 hover:border-gold/50 bg-white hover:bg-gold/5 transition-all duration-500 group\"
                                whileHover = {{ y: -8, scale: 1.03 }}
                            >
    <div className=\"text-5xl mb-6 group-hover:scale-110 transition-all duration-300\">{forum.icon}</div>
        < h3 className =\"text-2xl font-bold mb-4 text-navy group-hover:text-gold line-clamp-1\">{forum.name}</h3>
            < div className =\"inline-flex items-center bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-bold group-hover:bg-gold/20\">
{ forum.posts }K Posts
                                </div >
                            </motion.a >
                        ))}
                    </div >
                </div >
            </section >

    <Footer />
        </div >
    )
}
