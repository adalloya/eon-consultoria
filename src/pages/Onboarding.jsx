import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Shield, TrendingUp, Users, Award, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';

const steps = [
    {
        id: 'intro',
        title: 'Bienvenido',
        description: 'Para comenzar, ¿cómo te llamas?'
    },
    {
        id: 'goal',
        title: 'Tu Objetivo Principal',
        description: '¿Qué es lo que más te interesa asegurar hoy?'
    },
    {
        id: 'profile',
        title: 'Sobre Ti',
        description: 'Ayúdanos a conocerte mejor para personalizar tu estrategia.'
    },
    {
        id: 'contact',
        title: 'Contacto',
        description: '¿Dónde podemos enviarte tu estrategia personalizada?'
    }
];

const goals = [
    { id: 'protection', icon: <Shield size={24} />, label: 'Protección Familiar', desc: 'Seguridad para mis seres queridos' },
    { id: 'savings', icon: <TrendingUp size={24} />, label: 'Ahorro e Inversión', desc: 'Crecer mi capital a mediano plazo' },
    { id: 'retirement', icon: <Award size={24} />, label: 'Libertad Financiera en tu Retiro', desc: 'Asegurar mi estilo de vida futuro' },
    { id: 'legacy', icon: <Users size={24} />, label: 'Trascendencia', desc: 'Dejar un legado sólido' },
];

export const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        goal: '',
        age: '',
        occupation: '',
        email: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            // Si no hay llaves configuradas, simulamos el envío (para demo)
            if (!serviceId || !templateId || !publicKey) {
                console.warn("EmailJS keys not found. Simulating success.");
                await new Promise(resolve => setTimeout(resolve, 1500)); // Espera falsa
                setIsSubmitted(true);
                return;
            }

            const templateParams = {
                to_name: "EON Consultoría",
                from_name: formData.name,
                goal: goals.find(g => g.id === formData.goal)?.label || formData.goal,
                age: formData.age,
                occupation: formData.occupation,
                email: formData.email,
                phone: formData.phone,
                message: `Nuevo lead calificado para: ${goals.find(g => g.id === formData.goal)?.label}`
            };

            // Send email using EmailJS
            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setIsSubmitted(true);
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Hubo un error al enviar tu información. Por favor intenta de nuevo.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectGoal = (goalId) => {
        setFormData({ ...formData, goal: goalId });
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center">
                <Card className="max-w-xl w-full text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <Check size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">¡Gracias, {formData.name}!</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        Hemos recibido tu información. Un asesor experto en <strong>{goals.find(g => g.id === formData.goal)?.label || 'Protección'}</strong> te contactará pronto para presentarte tu estrategia ideal.
                    </p>
                    <Button onClick={() => window.location.href = '/'}>Volver al Inicio</Button>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 md:py-20 min-h-[80vh] flex flex-col items-center justify-center">
            <div className="w-full max-w-2xl">
                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
                        <span>Paso {currentStep + 1} de {steps.length}</span>
                        <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: 0 }}
                            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                <Card className="min-h-[400px] flex flex-col">
                    <div className="mb-8">
                        <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">{steps[currentStep].title}</h1>
                        <p className="text-slate-600">{steps[currentStep].description}</p>
                    </div>

                    <div className="flex-grow">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-6"
                            >
                                {currentStep === 0 && (
                                    <div>
                                        <Input
                                            label="Nombre Completo"
                                            name="name"
                                            placeholder="Ej. Juan Pérez"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="text-lg"
                                        />
                                    </div>
                                )}

                                {currentStep === 1 && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {goals.map((goal) => (
                                            <button
                                                key={goal.id}
                                                onClick={() => selectGoal(goal.id)}
                                                className={`
                          p-4 rounded-xl border-2 text-left transition-all duration-200 flex flex-col gap-3
                          ${formData.goal === goal.id
                                                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                                                        : 'border-slate-200 hover:border-primary/50 hover:bg-slate-50'}
                        `}
                                            >
                                                <div className={`
                          w-10 h-10 rounded-lg flex items-center justify-center
                          ${formData.goal === goal.id ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}
                        `}>
                                                    {goal.icon}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-900">{goal.label}</div>
                                                    <div className="text-xs text-slate-500">{goal.desc}</div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {currentStep === 2 && (
                                    <div className="space-y-4">
                                        <Input
                                            label="Edad"
                                            name="age"
                                            type="number"
                                            placeholder="Ej. 35"
                                            value={formData.age}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            label="Ocupación"
                                            name="occupation"
                                            placeholder="Ej. Arquitecto, Empresario..."
                                            value={formData.occupation}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}

                                {currentStep === 3 && (
                                    <div className="space-y-4">
                                        <Input
                                            label="Correo Electrónico"
                                            name="email"
                                            type="email"
                                            placeholder="juan@ejemplo.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            label="Teléfono (WhatsApp)"
                                            name="phone"
                                            type="tel"
                                            placeholder="55 1234 5678"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                        <Button
                            variant="ghost"
                            onClick={handleBack}
                            disabled={currentStep === 0 || isSubmitting}
                            className={currentStep === 0 ? 'invisible' : ''}
                        >
                            <ArrowLeft size={18} /> Atrás
                        </Button>
                        <Button
                            onClick={handleNext}
                            disabled={
                                isSubmitting ||
                                (currentStep === 0 && !formData.name) ||
                                (currentStep === 1 && !formData.goal) ||
                                (currentStep === 2 && (!formData.age || !formData.occupation)) ||
                                (currentStep === 3 && (!formData.email || !formData.phone))
                            }
                        >
                            {isSubmitting ? 'Enviando...' : (currentStep === steps.length - 1 ? 'Finalizar' : 'Continuar')} <ArrowRight size={18} />
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
