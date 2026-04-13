import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Globe3D from '@/components/effects/Globe3D'

export const metadata: Metadata = {
    title: 'World Forum - Knowledge Without Borders',
    description: 'Global knowledge platform with articles, languages, stories, community, marketplace.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className="font-ui antialiased min-h-screen relative overflow-x-hidden">
                <div className="fixed inset-0 bg-gradient-to-br from-savanna-gold/10 via-transparent to-earth-brown/20" />
                <div className="savanna-dust-particle w-4 h-4 top-20 left-20" style={{ animationDelay: '0s' }} />
                <div className="savanna-dust-particle w-3 h-3 top-60 right-32" style={{ animationDelay: '5s' }} />
                <div className="savanna-dust-particle w-2 h-2 bottom-40 left-80" style={{ animationDelay: '10s' }} />
                <Navbar />
                <main className="relative z-10 pt-[var(--nav-height)] parallax-container">
                    <div className="tz-hero-overlay" />
                    <div className="relative z-10">
                        {children}
                    </div>
                </main>
                <Globe3D />
                <Footer />
                <div id="custom-cursor" className="custom-cursor hidden lg:block pointer-events-none z-50" />
            </body>
        </html>
    )
}

