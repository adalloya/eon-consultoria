import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { CheckCircle, Users, Target, Heart } from 'lucide-react';


export const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Maestría en Acción</h1>
                        <p className="text-xl text-slate-300 leading-relaxed">
                            Nuestra consultoría se adapta al ciclo de vida de tu patrimonio. No solo vendemos seguros, diseñamos estrategias de vida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Founder / Team Section */}
            <section className="py-20 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-secondary/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
                            <img
                                src="/founder.jpg"
                                alt="Fundador EON Consultoría"
                                className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto"
                            />
                        </div>
                    </motion.div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-6">Nuestro Equipo</h2>
                        <p className="text-slate-600 mb-6 text-lg">
                            Somos un equipo de profesionales dedicados a blindar tu estilo de vida. Entendemos que cada cliente es único, por eso ofrecemos una relación de empatía y cercanía.
                        </p>
                        <p className="text-slate-600 mb-6 text-lg">
                            Desde una eventualidad en la salud hasta el cobro de tu meta financiera, siempre estaremos a tu lado.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <CheckCircle size={20} className="text-secondary" />
                                <span>Soporte Personalizado</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <CheckCircle size={20} className="text-secondary" />
                                <span>Acompañamiento 24/7</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <CheckCircle size={20} className="text-secondary" />
                                <span>Estrategias a Medida</span>
                            </div>
                            <div className="flex items-center gap-2 text-primary font-medium">
                                <CheckCircle size={20} className="text-secondary" />
                                <span>Respaldo MetLife</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology / Protocol */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary mb-4">Protocolo de Consultoría</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Un proceso estructurado para garantizar el éxito de tu estrategia financiera.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center hover:border-secondary/50 transition-colors">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                                <Target size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">1. Diagnóstico 360°</h3>
                            <p className="text-slate-600">
                                Conocemos y entendemos tus necesidades a través de un análisis profundo de tu situación actual.
                            </p>
                        </Card>

                        <Card className="text-center hover:border-secondary/50 transition-colors">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                                <Users size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">2. Diseño de Solución</h3>
                            <p className="text-slate-600">
                                Creamos la mejor estrategia financiera a tu medida, respaldada por las mejores instituciones.
                            </p>
                        </Card>

                        <Card className="text-center hover:border-secondary/50 transition-colors">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">3. Acompañamiento</h3>
                            <p className="text-slate-600">
                                Estamos contigo en todo el trayecto. Adaptamos la estrategia conforme tu vida evoluciona.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
};
