import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, BookOpen, Share2, Globe, MessageCircle, Star } from 'lucide-react';
import { Globe3D } from '@/components/effects/Globe3D';

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
        excerpt: 'From street markets to family dinners, Swahili opened doors I never imagined...',
        image: '/api/placeholder/400/250',
    },
    {
        id: 2,
        title: 'French Poetry in Paris Cafés',
        author: 'Pierre L.',
        language: 'French',
        reads: 987,
        likes: 67,
        excerpt: 'Rhythms of Baudelaire and Rimbaud echoing through Montmartre...',
        image: '/api/placeholder/400/250',
    },
    {
        id: 3,
        title: 'German Engineering Tales',
        author: 'Hans M.',
        language: 'German',
        reads: 1567,
        likes: 112,
        excerpt: 'How precision language shapes innovation in Munich labs...',
        image: '/api/placeholder/400/250',
    },
    {
        id: 4,
        title: 'Spanish Fiesta Stories',
        author: 'Maria G.',
        language: 'Spanish',
        reads: 2034,
        likes: 145,
        excerpt: 'Nights of flamenco and heartfelt conversations in Andalusia...',
        image: '/api/placeholder/400/250',
    },
    {
        id: 5,
        title: 'Mandarin Market Adventures',
        author: 'Li Wei',
        language: 'Chinese',
        reads: 890,
        likes: 54,
        excerpt: 'Bargaining in Beijing\'s hutongs taught me more than words...',
        image: '/api/placeholder/400/250',
    },
    {
        id: 6,
        title: 'English Across Oceans',
        author: 'Emma W.',
        language: 'English',
        reads: 2345,
        likes: 198,
        excerpt: 'From London to New York, stories that bridge worlds...',
        image: '/api/placeholder/400/250',
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
                <div className="absolute inset-0">
                    <Globe3D className="w-full h-full opacity-20" />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <Badge className="mb-4 inline-flex items-center gap-1 bg-gradient-to-r from-indigo-500 to-purple-600 px-3 py-1 text-sm">
                        <Globe className="h-3 w-3" />
                        Stories Network
                    </Badge>
                    <h1 className="mb-6 bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-5xl md:text-7xl font-bold tracking-tight text-transparent dark:from-white dark:to-slate-300">
                        Your Global
                        <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Stories Network</span>
                    </h1>
                    <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-600 dark:text-slate-300">
                        Connect with storytellers worldwide. Share your language learning adventures, cultural tales, and personal journeys. Build connections through authentic narratives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
                            <Link href="#write-story">
                                Share Your Story
                                <Share2 className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-900 transition-all duration-300">
                            <Link href="#explore">
                                Explore Stories
                                <MessageCircle className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
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
                                <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 p-4 dark:from-indigo-900/50 dark:to-purple-900/50">
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
                        <Card key={story.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge variant="secondary" className="text-xs font-medium">
                                        {story.language}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader className="pb-4">
                                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                    {story.title}
                                </CardTitle>
                                <CardDescription className="flex items-center gap-2 text-sm">
                                    by <span className="font-semibold text-slate-900 dark:text-white">{story.author}</span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pb-6">
                                <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-3 mb-6">
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
                                    <Button variant="ghost" size="sm" className="h-8 px-4">
                                        Read Story
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section id="write-story" className="container mx-auto px-4 py-32 text-center">
                <Card className="mx-auto max-w-4xl border-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-2xl">
                    <CardContent className="py-20 px-8">
                        <BookOpen className="mx-auto h-24 w-24 mb-8 opacity-75" />
                        <h2 className="mb-6 text-4xl md:text-5xl font-bold">
                            Ready to Share Your Story?
                        </h2>
                        <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
                            Join thousands of storytellers. Your words could inspire the next language learner&apos;s journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-slate-100 shadow-xl text-lg px-12 py-8 font-semibold tracking-wide">
                                Start Writing
                            </Button>
                            <Button size="lg" variant="outline" className="border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-lg px-12 py-8">
                                Browse Network
                                <Users className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}

