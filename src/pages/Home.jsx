import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Shield, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';


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
        { id: 'savings', icon: <TrendingUp size={32} />, title: 'Ahorro e Inversión', desc: 'Estrategias para alcanzar tus metas financieras a corto y mediano plazo.' },
        { id: 'retirement', icon: <Award size={32} />, title: 'Libertad Financiera en tu Retiro', desc: 'Garantiza tu libertad financiera y mantén tu nivel de vida en el futuro.' },
        { id: 'legacy', icon: <Users size={32} />, title: 'Trascendencia', desc: 'Asegura un legado sólido para tus seres queridos.' },
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
                                    <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-700 mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
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

export const Home = () => {
    return (
        <>
            <Hero />
            <Pillars />
        </>
    );
};
