import type { Metadata } from 'next'
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
        <html lang="en">
            <body className="font-ui antialiased bg-gradient-to-br from-navy via-steel/50 to-midnight">
                <Navbar />
                <main className="relative z-10 pt-[var(--nav-height)]">
                    {children}
                </main>
                <Globe3D />
                <Footer />
                <div id="custom-cursor" className="custom-cursor hidden lg:block pointer-events-none z-50" />
            </body>
        </html>
    )
}

