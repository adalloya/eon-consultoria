import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Award, Users, Check } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';


const ServiceSection = ({ id, title, description, icon, features, image, reversed = false, color = "bg-primary" }) => {
    return (
        <div id={id} className={`py-20 ${reversed ? 'bg-slate-50' : 'bg-white'}`}>
            <div className="container mx-auto px-4 md:px-6">
                <div className={`flex flex-col md:flex-row items-center gap-12 ${reversed ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-full md:w-1/2">
                        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                            {icon}
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            {description}
                        </p>
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[20px] text-secondary">
                                        <Check size={20} />
                                    </div>
                                    <span className="text-slate-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/onboarding">
                            <Button variant="outline">Solicitar Asesoría</Button>
                        </Link>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="aspect-video bg-slate-200 rounded-3xl shadow-xl overflow-hidden relative group">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Services = () => {
    return (
        <div className="pt-20">
            <section className="bg-primary text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Nuestros Servicios</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Soluciones integrales basadas en los 4 Pilares del Blindaje Patrimonial.
                    </p>
                </div>
            </section>

            <ServiceSection
                id="protection"
                title="Protección"
                description="Que tu estilo de vida y el de tu familia no se vea comprometido en caso de cualquier eventualidad. Blindamos tu tranquilidad ante riesgos de salud o accidentes."
                icon={<Shield size={32} />}
                color="bg-blue-600"
                image="/service-protection.png"
                features={[
                    "Seguros de Gastos Médicos Mayores",
                    "Protección por Invalidez",
                    "Cobertura ante enfermedades graves",
                    "Seguridad para tu empresa y socios"
                ]}
            />

            <ServiceSection
                id="savings"
                title="Ahorro con Protección"
                description="Diseñamos estrategias para asegurar el logro de tus metas financieras a mediano y largo plazo."
                icon={<TrendingUp size={32} />}
                color="bg-green-600"
                reversed={true}
                image="/service-savings.png"
                features={[
                    "Fondos de ahorro para educación",
                    "Inversión con rendimientos competitivos",
                    "Liquidez para proyectos personales",
                    "Beneficios fiscales"
                ]}
            />

            <ServiceSection
                id="retirement"
                title="Libertad Financiera en tu Retiro"
                description="Asegura el ingreso deseado para un retiro con libertad financiera. Garantiza tu solvencia para no depender de nadie y seguir tomando tus propias decisiones."
                icon={<Award size={32} />}
                color="bg-purple-600"
                image="/service-retirement.png"
                features={[
                    "Planes Personales de Retiro (PPR)",
                    "Estrategias deducibles de impuestos",
                    "Rentas vitalicias garantizadas",
                    "Protección inflacionaria"
                ]}
            />

            <ServiceSection
                id="legacy"
                title="Trascendencia"
                description="Logra metas a largo plazo que garanticen la trascendencia de tu legado. Asegura que tu familia tenga la liquidez necesaria para gozar de lo que les heredes."
                icon={<Users size={32} />}
                color="bg-indigo-600"
                reversed={true}
                image="/service-legacy.png"
                features={[
                    "Seguros de Vida",
                    "Fideicomisos educativos",
                    "Protección patrimonial hereditaria",
                    "Continuidad de negocios familiares"
                ]}
            />
        </div>
    );
};
