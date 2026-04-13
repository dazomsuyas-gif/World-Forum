export default function Footer() {
    return (
        <footer className="bg-navy text-white-soft py-16 mt-32">
            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-3xl font-display bg-gradient-to-r from-gold to-gold-bright bg-clip-text text-transparent mb-6">
                        WORLD FORUM
                    </h3>
                    <p className="opacity-75 mb-8">Knowledge Without Borders</p>
                    <div className="flex gap-4">
                        <a href="https://twitter.com/officialmsuya" className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-gold transition-colors">𝕏</a>
                        <a href="https://instagram.com/mk_africa21" className="w-10 h-10 rounded-full bg-steel flex items-center justify-center hover:bg-gold transition-colors">📷</a>
                        <a href="tel:+255768868546" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:scale-110 transition-transform">📱</a>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/richest" className="hover:text-gold transition-colors">Richest People</a></li>
                        <li><a href="/languages" className="hover:text-gold transition-colors">Language Academy</a></li>
                        <li><a href="/stories" className="hover:text-gold transition-colors">Stories</a></li>
                        <li><a href="/marketplace" className="hover:text-gold transition-colors">Marketplace</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Company</h4>
                    <ul className="space-y-2">
                        <li><a href="/about" className="hover:text-gold transition-colors">About</a></li>
                        <li><a href="/why-choose-us" className="hover:text-gold transition-colors">Why Choose Us</a></li>
                        <li><a href="/contact" className="hover:text-gold transition-colors">Contact</a></li>
                        <li><a href="/privacy-policy" className="hover:text-gold transition-colors">Privacy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-6">Contact</h4>
                    <p>+255 768 868 546</p>
                    <p>+255 767 456 512</p>
                    <p>dazomsuyas@gmail.com</p>
                    <p>kelvinmsuya63@gmail.com</p>
                </div>
            </div>

            <div className="border-t border-steel mt-12 pt-8 text-center opacity-75">
                <p>&copy; 2024 World Forum. All rights reserved. Owner: Kelvin Juma Msuya</p>
            </div>
        </footer>
    )
}

