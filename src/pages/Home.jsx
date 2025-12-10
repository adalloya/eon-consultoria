import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Shield, TrendingUp, Users, Award, ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';


const Hero = () => {
    return (
        <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-primary text-white">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 z-10" />
                <img
                    src="/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40"
                />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/20 text-sm font-semibold mb-6 tracking-wide uppercase">
                            Consultoría Patrimonial Premium
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight"
                    >
                        Logra tu meta financiera, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-300">
                            pase lo que pase
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl font-light leading-relaxed"
                    >
                        Estrategias financieras de alto nivel diseñadas para blindar tu patrimonio y garantizar el estilo de vida de quienes más amas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Link to="/onboarding">
                            <Button size="lg" variant="secondary" className="text-lg px-10 py-5 shadow-xl shadow-secondary/20">
                                Descubre tu Estrategia
                            </Button>
                        </Link>
                        <Link to="/servicios">
                            <Button size="lg" variant="outline" className="text-lg px-10 py-5 border-white/30 text-white hover:bg-white/10 hover:border-white">
                                Conoce Nuestros Servicios
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Pillars = () => {
    const services = [
        {
            id: 'protection',
            icon: <Shield size={32} />,
            title: 'Protección',
            desc: [
                'Seguros de Gasto Médicos Mayores y Accidentes personales',
                'Protección por invalidez y/o muerte',
                'Cobertura ante graves enfermedades',
                'Seguridad para tu empresa y socios'
            ]
        },
        {
            id: 'savings',
            icon: <TrendingUp size={32} />,
            title: 'Ahorro con Protección',
            desc: [
                'Ahorro tradicional con rendimientos competitivos garantizados',
                'Ahorro flexible con fondos adicionales a la vista',
                'Ahorro con beneficios fiscales para persona moral y física'
            ]
        },
        {
            id: 'retirement',
            icon: <Award size={32} />,
            title: 'Libertad Financiera en tu Retiro',
            desc: [
                'Planes Personales de Retiro (PPR)',
                'Estrategias deducibles de impuestos',
                'Rentas vitalicias garantizadas',
                'Protección inflacionaria'
            ]
        },
        {
            id: 'legacy',
            icon: <Users size={32} />,
            title: 'Trascendencia',
            desc: [
                'Seguros de Vida',
                'Fideicomisos educativos',
                'Protección patrimonial hereditaria',
                'Continuidad de negocios familiares'
            ]
        },
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nuestros 4 Pilares</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Una metodología integral para cubrir todas las etapas de tu vida financiera.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link key={index} to={`/servicios#${service.id}`} className="block h-full">
                            <Card className="p-8 hover:border-primary/20 h-full flex flex-col justify-between group cursor-pointer">
                                <div>
                                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mx-auto">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">{service.title}</h3>
                                    <div className="text-slate-500 leading-relaxed text-sm">
                                        {Array.isArray(service.desc) ? (
                                            <ul className="space-y-2 text-left">
                                                {service.desc.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{service.desc}</p>
                                        )}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

const LatestNews = () => {
    // Get the last 3 posts and reverse them to show newest first
    const latestPosts = [...blogPosts].reverse().slice(0, 3);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-secondary font-bold tracking-wider uppercase text-sm mb-2 block">Actualidad</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary">Últimas Noticias</h2>
                    </div>
                    <Link to="/blog">
                        <Button variant="outline" className="group">
                            Ver todos los artículos
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {latestPosts.map((post) => (
                        <Link key={post.id} to={`/blog/${post.slug}`} className="group block h-full">
                            <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                                <div className="h-48 overflow-hidden relative">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={14} />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-secondary font-medium text-sm flex items-center mt-auto">
                                        Leer artículo <ArrowRight size={14} className="ml-1" />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
    return (
        <>
            <Hero />
            <Pillars />
            <LatestNews />
        </>
    );
};
