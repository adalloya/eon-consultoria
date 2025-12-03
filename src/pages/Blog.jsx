import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

import { blogPosts } from '../data/blogPosts';

export const Blog = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-20">
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Blog EON</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Consejos expertos para tomar el control de tu futuro financiero.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((article) => (
                        <Card key={article.id} className="flex flex-col h-full p-0 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary z-10">
                                    {article.category}
                                </div>
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{article.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-6 flex-grow">
                                    {article.excerpt}
                                </p>
                                <Link to={`/blog/${article.slug}`} className="mt-auto">
                                    <Button variant="ghost" size="sm" className="pl-0 hover:bg-transparent hover:text-secondary">
                                        Leer Artículo <ArrowRight size={16} />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
