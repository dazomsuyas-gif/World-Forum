import React from 'react';
import Link from 'next/link';
import { Users, BookOpen, Share2, Globe, MessageCircle, Star, Eye } from 'lucide-react';

export const metadata = {
    title: 'Stories Network - Share Your Language Journey',
    description: 'Connect with global storytellers, share multilingual stories, and build your narrative network.',
};

const stories = [
    {
        id: 1,
        title: 'My Journey Learning Swahili in Nairobi',
        author: 'Aisha K.',
        language: 'Swahili',
        reads: 1245,
        likes: 89,
        excerpt: "From street markets to family dinners, Swahili opened doors I never imagined...",
        image: 'https://via.placeholder.com/400x250?text=Story+1',
    },
    {
        id: 2,
        title: 'French Poetry in Paris Cafés',
        author: 'Pierre L.',
        language: 'French',
        reads: 987,
        likes: 67,
        excerpt: "Rhythms of Baudelaire and Rimbaud echoing through Montmartre...",
        image: 'https://via.placeholder.com/400x250?text=Story+2',
    },
    {
        id: 3,
        title: 'German Engineering Tales',
        author: 'Hans M.',
        language: 'German',
        reads: 1567,
        likes: 112,
        excerpt: "How precision language shapes innovation in Munich labs...",
        image: 'https://via.placeholder.com/400x250?text=Story+3',
    },
    {
        id: 4,
        title: 'Spanish Fiesta Stories',
        author: 'Maria G.',
        language: 'Spanish',
        reads: 2034,
        likes: 145,
        excerpt: "Nights of flamenco and heartfelt conversations in Andalusia...",
        image: 'https://via.placeholder.com/400x250?text=Story+4',
    },
    {
        id: 5,
        title: 'Mandarin Market Adventures',
        author: 'Li Wei',
        language: 'Chinese',
        reads: 890,
        likes: 54,
        excerpt: "Bargaining in Beijing's hutongs taught me more than words...",
        image: 'https://via.placeholder.com/400x250?text=Story+5',
    },
    {
        id: 6,
        title: 'English Across Oceans',
        author: 'Emma W.',
        language: 'English',
        reads: 2345,
        likes: 198,
        excerpt: "From London to New York, stories that bridge worlds...",
        image: 'https://via.placeholder.com/400x250?text=Story+6',
    },
];

const stats = [
    { label: 'Stories Shared', value: '12.5K', icon: BookOpen },
    { label: 'Active Users', value: '8.7K', icon: Users },
    { label: 'Languages', value: '25+', icon: Globe },
    { label: 'Connections Made', value: '45K', icon: Share2 },
];

export default function StoriesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-32 md:py-40">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 to-purple-100/30 dark:from-indigo-900/20 dark:to-purple-900/20" />
                <div className="container relative mx-auto px-4 text-center">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                        <Globe className="h-3 w-3" />
                        Stories Network
                    </span>
                    <h1 className="mb-6 bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-5xl md:text-7xl font-bold tracking-tight text-transparent dark:from-white dark:to-slate-300">
                        Your Global
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Stories Network</span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
                        Connect with storytellers worldwide. Share your language learning adventures, cultural tales, and personal journeys. Build connections through authentic narratives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#write-story"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 text-lg"
                        >
                            Share Your Story
                            <Share2 className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#explore"
                            className="inline-flex items-center gap-2 border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 text-slate-900 dark:text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 text-lg"
                        >
                            Explore Stories
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center">
                                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-4 dark:from-indigo-900/50 dark:to-purple-900/50 shadow-md">
                                    <Icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Featured Stories Grid */}
            <section id="explore" className="container mx-auto px-4 py-24">
                <div className="text-center mb-20">
                    <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
                        Discover Amazing Stories
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
                        Dive into real stories from language learners around the globe. Each tale connects cultures and inspires journeys.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((story) => (
                        <div key={story.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden rounded-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-lg">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <span className="absolute top-4 left-4 inline-flex items-center gap-1 bg-slate-900/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                                    {story.language}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors overflow-hidden text-ellipsis whitespace-nowrap">
                                    {story.title}
                                </h3>
                                <p className="flex items-center gap-2 text-sm text-slate-500 mb-4 dark:text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
                                    by <span className="font-semibold text-slate-900 dark:text-white">{story.author}</span>
                                </p>
                                <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 overflow-hidden h-[3.75rem] text-ellipsis leading-5 line-clamp-3">
                                    {story.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <Eye className="h-4 w-4" /> {story.reads.toLocaleString()}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" /> {story.likes}
                                        </span>
                                    </div>
                                    <Link
                                        href="/stories/"
                                        className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium px-4 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors"
                                    >
                                        Read Story
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section id="write-story" className="container mx-auto px-4 py-32 text-center">
                <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl overflow-hidden">
                    <div className="py-20 px-8">
                        <BookOpen className="mx-auto h-24 w-24 mb-8 opacity-75" />
                        <h2 className="mb-6 text-4xl md:text-5xl font-bold">
                            Ready to Share Your Story?
                        </h2>
                        <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
                            Join thousands of storytellers. Your words could inspire the next language learner's journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/stories/write"
                                className="bg-white text-indigo-600 hover:bg-slate-100 shadow-xl text-lg px-12 py-8 font-semibold tracking-wide rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            >
                                Start Writing
                            </Link>
                            <Link
                                href="#explore"
                                className="inline-flex items-center gap-2 border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg px-12 py-8 rounded-xl transition-all duration-300 hover:border-white/80 hover:scale-[1.02]"
                            >
                                Browse Network
                                <Users className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

