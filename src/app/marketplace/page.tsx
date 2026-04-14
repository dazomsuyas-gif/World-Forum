"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import confetti from 'canvas-confetti'
import { ShoppingCart, TrendingUp, DollarSign, Package, Global, LocalFlorist } from 'lucide-react'

export default function Marketplace() {
    const productsRef = useRef(null)
    const statsRef = useRef(null)

    useEffect(() => {
        // GSAP product staggers
        gsap.from('.product-card', {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: productsRef.current,
                start: 'top 85%'
            }
        })

        // Stats animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target.querySelectorAll('.count-num'), {
                        textContent: (i, el) => el.dataset.target,
                        duration: 3,
                        ease: 'power2.out',
                        stagger: 0.2,
                        snap: { textContent: 1 }
                    })
                }
            })
        })
        if (statsRef.current) observer.observe(statsRef.current)

        // Confetti on buy buttons
        const buyBtns = document.querySelectorAll('.buy-btn')
        buyBtns.forEach(btn => {
            btn.addEventListener('mouseenter', () => {
                confetti({
                    particleCount: 40,
                    spread: 60,
                    origin: { y: 0.7 }
                })
            })
        })

        return () => observer.disconnect()
    }, [])

    const categories = [
        { name: 'Digital Tech', icon: '💻', count: 245, color: 'blue' },
        { name: 'Local Goods', icon: '👞', count: 178, color: 'green' },
        { name: 'Fresh Foods', icon: '🥦', count: 312, color: 'orange' },
        { name: 'Electronics', icon: '📱', count: 89, color: 'purple' }
    ]

    const products = [
        // Digital Products
        { name: 'Smartwatch Pro', category: 'Digital', priceWB: '$299', priceTZ: '790,000 TZS', trend: '+12%', emoji: '⌚', color: 'blue' },
        { name: 'iPhone 16 Ultra', category: 'Digital', priceWB: '$1,199', priceTZ: '3,200,000 TZS', trend: '+8%', emoji: '📱', color: 'purple' },
        { name: 'DSLR Camera Pro', category: 'Digital', priceWB: '$899', priceTZ: '2,400,000 TZS', trend: '-3%', emoji: '📷', color: 'indigo' },
        { name: 'Gaming Laptop', category: 'Digital', priceWB: '$1,799', priceTZ: '4,800,000 TZS', trend: '+25%', emoji: '💻', color: 'gray' },
        { name: 'Smart TV 65\"', category: 'Digital', priceWB: '$699', priceTZ: '1,850,000 TZS', trend: '+5%', emoji: '📺', color: 'silver' },

        // Local Products
        { name: 'Masai Beads', category: 'Local', priceWB: '$45', priceTZ: '120,000 TZS', trend: '+18%', emoji: '🧵', color: 'red' },
        { name: 'Handmade Shoes', category: 'Local', priceWB: '$89', priceTZ: '240,000 TZS', trend: '+7%', emoji: '👞', color: 'brown' },
        { name: 'Maasai Shuka', category: 'Local', priceWB: '$120', priceTZ: '320,000 TZS', trend: '+14%', emoji: '👗', color: 'orange' },
        { name: 'Carved Wood Art', category: 'Local', priceWB: '$199', priceTZ: '530,000 TZS', trend: '+22%', emoji: '🪵', color: 'wood' },

        // Food Products
        { name: 'Fresh Chicken KG', category: 'Food', priceWB: '$4.5', priceTZ: '12,000 TZS', trend: '+6%', emoji: '🐔', color: 'yellow' },
        { name: 'Tilapia Fish KG', category: 'Food', priceWB: '$6.8', priceTZ: '18,000 TZS', trend: '-2%', emoji: '🐟', color: 'blue' },
        { name: 'Rice 10KG', category: 'Food', priceWB: '$18', priceTZ: '48,000 TZS', trend: '+3%', emoji: '🍚', color: 'white' },
        { name: 'Maize Flour 5KG', category: 'Food', priceWB: '$8.5', priceTZ: '22,500 TZS', trend: '+9%', emoji: '🌽', color: 'yellow' },
        { name: 'Organic Beans KG', category: 'Food', priceWB: '$2.2', priceTZ: '5,800 TZS', trend: '+11%', emoji: '🌱', color: 'green' },
        { name: 'Eggs 30pcs', category: 'Food', priceWB: '$4.8', priceTZ: '12,800 TZS', trend: '+4%', emoji: '🥚', color: 'white' },
        { name: 'Mixed Veggies KG', category: 'Food', priceWB: '$1.9', priceTZ: '5,000 TZS', trend: '+7%', emoji: '🥕', color: 'orange' },
        { name: 'Wheat Flour 5KG', category: 'Food', priceWB: '$7.2', priceTZ: '19,000 TZS', trend: '-1%', emoji: '🌾', color: 'golden' }
    ]

    return (
        <div className=\"relative min-h-screen bg-gradient-to-br from-market-green/60 via-gold/10 to-savanna-gold/30 overflow-hidden\">
    {/* Parallax market overlay */ }
    <div className=\"absolute inset-0 bg-[url('/images/tanzania-savanna-bg.svg')] opacity-20 mix-blend-overlay parallax\" />

    {/* Floating market particles */ }
    <div className=\"absolute inset-0 pointer-events-none\">
        < div className =\"w-4 h-4 bg-green-400 rounded-full absolute top-20 left-10 animate-bounce\" />
            < div className =\"w-3 h-3 bg-yellow-400 rounded-full absolute top-40 right-20 animate-pulse delay-1000\" />
                < div className =\"w-6 h-6 bg-gold absolute bottom-1/4 left-1/4 animate-twinkle\" />
            </div >

        <Navbar />

    {/* Hero */ }
    <section className=\"relative h-screen flex items-center justify-center text-white\">
        < motion.div
    initial = {{ opacity: 0, scale: 0.9 }
}
animate = {{ opacity: 1, scale: 1 }}
className =\"text-center max-w-5xl mx-auto p-8 glass\"
    >
    <motion.h1 className=\"text-7xl md:text-9xl font-hero mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-gold to-orange-500 shimmer\">
                        DIGITAL MARKETPLACE
                    </motion.h1 >
    <motion.p className=\"text-3xl md:text-5xl font-display mb-12 opacity-90 max-w-3xl mx-auto\">
                        World Bank & Tanzania Live Prices • AI Price Prediction
                    </motion.p >
    <motion.div className=\"flex flex-col lg:flex-row gap-6 justify-center items-center\"
initial = {{ opacity: 0, y: 40 }}
animate = {{ opacity: 1, y: 0 }}
transition = {{ delay: 0.6 }}
                    >
    <motion.button className=\"buy-btn btn-primary text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-green-lg glow-pulse\">
                            🛒 Start Shopping
                        </motion.button >
    <motion.a href=\"#products\" className=\"btn-secondary text-xl px-12 py-6 font-bold hover:scale-105\">
                            📊 View Prices
                        </motion.a >
                    </motion.div >
                </motion.div >
            </section >

    {/* Stats */ }
    < motion.section ref = { statsRef } className =\"py-24\" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        < div className =\"max-w-6xl mx-auto px-8 grid lg:grid-cols-4 gap-12 text-center\">
{
    [
        { num: '500+', label: 'Products', icon: Package },
        { num: '98.7%', label: 'Accuracy', icon: TrendingUp },
        { num: '$50M', label: 'Volume', icon: DollarSign },
        { num: '42', label: 'Countries', icon: Global }
    ].map((stat, i) => (
        <div key={i} className=\"glass p-8 rounded-2xl hover:shadow-gold-lg\">
    < stat.icon className =\"w-16 h-16 mx-auto mb-4 text-green-500 animate-spin-slow\" />
    < div className =\"text-4xl font-hero mb-3 count-num\" data-target={stat.num}>{stat.num}</div>
    < p className =\"font-bold text-xl opacity-80 capitalize\">{stat.label}</p>
                        </div >
                    ))
}
                </div >
            </motion.section >

    {/* Categories */ }
    < section className =\"py-24 bg-parchment/40\">
        < div className =\"max-w-6xl mx-auto px-8\">
            < motion.h2 className =\"text-5xl font-display text-center mb-20 text-navy\">Shop by Category</motion.h2>
                < div className =\"grid md:grid-cols-2 lg:grid-cols-4 gap-6\">
{
    categories.map((cat, i) => (
        <motion.a href=\"#\" key={i} className={`glass p-10 rounded-3xl group cursor-pointer border-4 border-${cat.color}-200/50 hover:border-${cat.color}-400/80 hover:shadow-2xl hover:shadow-${cat.color}-500/30 bg-gradient-to-br from-white to-${cat.color}-50/30`}
                                whileHover = {{ y: -12, scale: 1.05 }}
                            >
    <div className=\"text-6xl mb-6 group-hover:scale-125 transition-all duration-500\">{cat.icon}</div>
        < h3 className =\"text-2xl font-bold mb-6 text-navy group-hover:text-gray-800\">{cat.name}</h3>
            < div className =\"text-3xl font-hero text-${cat.color}-600 group-hover:text-${cat.color}-700 mb-3\">{cat.count}+</div>
                < div className =\"inline-flex items-center bg-${cat.color}-100 text-${cat.color}-700 px-4 py-2 rounded-full text-sm font-bold group-hover:bg-${cat.color}-200\">
                                    Shop Now →
                                </div >
                            </motion.a >
                        ))}
                    </div >
                </div >
            </section >

    {/* Featured Products */ }
    < section ref = { productsRef } className =\"py-32 bg-gradient-to-b from-green-50/70 to-yellow-50/50\">
        < div className =\"max-w-7xl mx-auto px-8\">
            < motion.h2 className =\"text-5xl font-display text-center mb-24 text-navy\">🔥 Featured Products (Live Prices)</motion.h2>
                < div className =\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8\">
{
    products.map((product, i) => (
                            <motion.div key={i} className={`product-card glass p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-${product.color}-500/40 border border-${product.color}-200/50 bg-white group cursor-pointer hover:-translate-y-4 transition-all duration-500`}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className=\"text-6xl mb-6 group-hover:scale-110 transition-transform mx-auto\">{product.emoji}</div>
                                <h3 className=\"text-xl font-bold mb-4 text-navy line-clamp-2 group-hover:text-gray-800\">{product.name}</h3>
    < div className =\"space-y-3 mb-6\">
    < div className =\"flex items-center justify-between p-3 bg-gradient-to-r from-${product.color}-50 to-${product.color}-100 rounded-xl\">
    < span className =\"font-bold text-lg text-gray-700\">WB Global</span>
    < span className = {`font-hero text-2xl ${product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        { product.priceWB }
                                        </span >
                                    </div >
    <div className=\"flex items-center justify-between p-3 bg-gradient-to-r from-savanna-gold/20 to-gold/30 rounded-xl border border-gold/30 shadow-sm\">
        < span className =\"font-bold text-lg text-gray-700\">TZ Local</span>
            < span className =\"font-hero text-2xl text-gold-bright\">{product.priceTZ}</span>
                                    </div >
    <div className={`flex items-center p-2 bg-white/80 rounded-lg border ${product.trend.startsWith('+') ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
        <TrendingUp size={16} className={`mr-2 ${product.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`} />
        <span className={`font-bold text-sm ${product.trend.startsWith('+') ? 'text-green-700' : 'text-red-700'}`}>
            {product.trend} Prediction
        </span>
    </div>
                                </div >
    <div className=\"flex items-center justify-between pt-6 border-t border-gray-200\">
        < span className =\"text-2xl font-bold text-green-600\">Quick Buy</span>
            < motion.button className =\"buy-btn px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-all duration-300\">
                                        🛒 Add Cart
                                    </motion.button >
                                </div >
                            </motion.div >
                        ))}
                    </div >
                </div >
            </section >

    <Footer />
        </div >
    )
}
