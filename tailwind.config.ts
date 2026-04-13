import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                navy: '#0A1628',
                gold: '#C9A84C',
                'gold-bright': '#FFD700',
                red: '#E63946',
                parchment: '#F8F5F0',
                midnight: '#070B14',
                steel: '#1E2A3A',
                'white-soft': '#F0EDE8',
                // Language colors
                'lang-english': '#003087',
                'lang-chinese': '#DE2910',
                'lang-spanish': '#AA151B',
                'lang-french': '#002395',
                'lang-german': '#000000',
                'lang-swahili': '#1B5E20',
                // Section accents
                richest: '#C9A84C',
                science: '#00b4d8',
                nature: '#40916c',
                empires: '#E63946',
                wars: '#6d6875',
                health: '#4cc9f0',
                culture: '#f72585',
                food: '#e76f51',
                tourism: '#06d6a0',
                stories: '#7b2ff7',
                community: '#f72585',
                marketplace: '#e76f51',
            },
            backgroundImage: {
                'grad-hero': 'linear-gradient(135deg, #0A1628 0%, #1a237e 50%, #0A1628 100%)',
                'grad-gold': 'linear-gradient(135deg, #C9A84C, #FFD700, #C9A84C)',
                'grad-fire': 'linear-gradient(135deg, #E63946, #ff6b35, #ffd700)',
                'grad-ocean': 'linear-gradient(135deg, #0077b6, #00b4d8, #90e0ef)',
                'grad-forest': 'linear-gradient(135deg, #1b4332, #40916c, #95d5b2)',
                'grad-cosmic': 'linear-gradient(135deg, #10002b, #240046, #7b2ff7)',
                'grad-chinese': 'linear-gradient(135deg, #1a0000, #8B0000, #DE2910)',
                'grad-german': 'linear-gradient(135deg, #000000, #DD0000, #FFCE00)',
                'grad-swahili': 'linear-gradient(135deg, #001a00, #0d3b00, #1B5E20)',
                'grad-stories': 'linear-gradient(135deg, #0d0221, #1b0044, #3a0ca3)',
                'grad-horror': 'linear-gradient(135deg, #0a0000, #2d0000, #8B0000)',
                'grad-romance': 'linear-gradient(135deg, #1a0010, #4a0029, #f72585)',
                'grad-market': 'linear-gradient(135deg, #1a0500, #5c2018, #e76f51)',
            },
            fontFamily: {
                'display': ['Cinzel', 'Georgia', 'serif'],
                'hero': ['Bebas Neue', 'Impact', 'sans-serif'],
                'body': ['Lora', 'serif'],
                'ui': ['Outfit', 'sans-serif'],
                'story': ['Cormorant Garamond', 'serif'],
                'chinese': ['Noto Sans SC', 'sans-serif'],
                'german': ['Playfair Display', 'serif'],
                'code': ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'gradient-morph': 'gradientMorph 12s ease infinite',
                'float': 'floatUpDown 5s ease-in-out infinite',
                'shimmer': 'shimmerText 3s linear infinite',
                'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
                'horror-flicker': 'horrorFlicker 4s infinite',
                'heart-beat': 'heartBeat 1.5s ease-in-out infinite',
            },
            keyframes: {
                'gradientMorph': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'floatUpDown': {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                // Add all keyframes from prompt (shimmerText, glowPulse, etc.)
            },
        },
    },
    plugins: [],
}

export default config

