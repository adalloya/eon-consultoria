import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Calendar, User, Share2, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    const shareUrl = window.location.href;
    const shareText = `¡Checa este artículo de EON Consultoría! 🛡️ ${post.title}`;

    const handleShare = () => {
        // Facebook sharer with quote param (though support varies, it's the standard intent)
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        window.open(facebookUrl, '_blank', 'width=600,height=400');
    };

    return (
        <div className="min-h-screen bg-slate-50 pt-20 pb-20">
            <Helmet>
                <title>{post.title} | EON Consultoría</title>
                <meta name="description" content={post.excerpt} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={shareUrl} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
                <meta property="og:image" content={`https://eonconsultoria.com.mx${post.image}`} />
                <meta property="og:site_name" content="EON Consultoría Patrimonial" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={shareUrl} />
                <meta property="twitter:title" content={post.title} />
                <meta property="twitter:description" content={post.excerpt} />
                <meta property="twitter:image" content={`https://eonconsultoria.com.mx${post.image}`} />
            </Helmet>

            {/* Hero Image */}
            <div className="h-[40vh] w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-8 container mx-auto">
                    <Link to="/blog">
                        <Button variant="ghost" className="text-white hover:text-secondary mb-4 pl-0">
                            <ArrowLeft size={20} className="mr-2" /> Volver al Blog
                        </Button>
                    </Link>
                    <div className="inline-block px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full mb-4">
                        {post.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-6 text-slate-300 text-sm">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 mt-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:w-2/3"
                    >
                        <div
                            className="prose prose-lg prose-slate max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Share Section */}
                        <div className="mt-8 flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            <span className="font-bold text-slate-700">¿Te gustó este artículo? ¡Compártelo!</span>
                            <Button onClick={handleShare} className="bg-[#1877F2] hover:bg-[#1864D9] text-white border-none flex gap-2 items-center">
                                <Facebook size={18} />
                                Compartir en Facebook
                            </Button>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-8">
                        <div className="bg-primary text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">¿Buscas asesoría personalizada?</h3>
                            <p className="text-slate-300 mb-6 relative z-10">
                                Nuestros expertos pueden ayudarte a diseñar la estrategia perfecta para ti.
                            </p>
                            <Link to="/onboarding">
                                <Button variant="secondary" className="w-full relative z-10">
                                    Agendar Diagnóstico Gratuito
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
