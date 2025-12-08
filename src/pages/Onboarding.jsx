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
    { id: 'protection', icon: <Shield size={24} />, label: 'Protección', desc: 'Seguridad ante cualquier eventualidad' },
    { id: 'savings', icon: <TrendingUp size={24} />, label: 'Ahorro con Protección', desc: 'Metas a mediano y largo plazo' },
    { id: 'retirement', icon: <Award size={24} />, label: 'Libertad Financiera en tu Retiro', desc: 'Garantizar mi nivel de vida futuro' },
    { id: 'legacy', icon: <Users size={24} />, label: 'Trascendencia', desc: 'Asegurar un legado para los míos' },
];

export const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        goal: '',
        specificNeed: '',
        age: '',
        occupation: '',
        email: '',
        phone: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Dynamic steps based on state
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
            id: 'specific',
            title: 'Profundicemos un poco',
            description: 'Cuéntanos más para entender tu necesidad real.'
        },
        {
            id: 'profile',
            title: 'Sobre Ti',
            description: 'Ayúdanos a conocerte mejor para personalizar tu estrategia.'
        },
        {
            id: 'contact',
            title: 'Contacto',
            description: '¿Cuál es el mejor canal para contactarte?'
        },
        {
            id: 'summary',
            title: 'Resumen',
            description: 'Confirma que tus datos sean correctos antes de enviar.'
        }
    ];

    const specificQuestions = {
        protection: {
            question: "¿Qué es lo que más te preocupa hoy?",
            options: [
                "Salud y Accidentes",
                "Respaldo por Fallecimiento",
                "Invalidez",
                "Protección Integral"
            ]
        },
        savings: {
            question: "¿Cuál es el propósito principal de este ahorro?",
            options: [
                "Educación de hijos",
                "Compra de inmueble",
                "Fondo de emergencia",
                "Crecer patrimonio"
            ]
        },
        retirement: {
            question: "¿Cómo te preparas actualmente para tu retiro?",
            options: [
                "Solo Afore",
                "Tengo un PPR",
                "Inversiones personales",
                "Aún no he empezado"
            ]
        },
        legacy: {
            question: "¿A quién deseas proteger principalmente?",
            options: [
                "Cónyuge e Hijos",
                "Socios de Negocio",
                "Padres",
                "Patrimonio General"
            ]
        }
    };

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

        const goalLabel = goals.find(g => g.id === formData.goal)?.label || formData.goal;

        const subject = `Nueva Solicitud de Estrategia: ${goalLabel} - ${formData.name}`;
        const body = `Hola, me gustaría recibir una estrategia personalizada.
        
Mis datos son:
- Nombre: ${formData.name}
- Objetivo: ${goalLabel}
- Necesidad Específica: ${formData.specificNeed}
- Edad: ${formData.age}
- Ocupación: ${formData.occupation}
- Email: ${formData.email}
- Teléfono: ${formData.phone}

Quedo a la espera de su contacto.`;

        const mailtoLink = `mailto:contacto@eonconsultoria.com.mx?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        // Simulate success state after opening mail client
        setTimeout(() => {
            setIsSubmitted(true);
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const selectGoal = (goalId) => {
        setFormData({ ...formData, goal: goalId, specificNeed: '' }); // Reset specific need on goal change
    };

    const selectSpecific = (option) => {
        setFormData({ ...formData, specificNeed: option });
    };

    if (isSubmitted) {
        return (
            <div className="container mx-auto px-4 py-20 flex justify-center">
                <Card className="max-w-xl w-full text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <Check size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">¡Excelente, {formData.name}!</h2>
                    <p className="text-slate-600 mb-8 text-lg">
                        Se ha abierto tu correo para enviar la solicitud. Si no se abrió automáticamente, por favor envía la información a <strong>contacto@eonconsultoria.com.mx</strong>.
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

                                {currentStep === 2 && formData.goal && (
                                    <div>
                                        <h3 className="text-lg font-medium text-primary mb-4">
                                            {specificQuestions[formData.goal]?.question}
                                        </h3>
                                        <div className="grid grid-cols-1 gap-3">
                                            {specificQuestions[formData.goal]?.options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => selectSpecific(option)}
                                                    className={`
                                                        p-4 rounded-xl border-2 text-left transition-all duration-200
                                                        ${formData.specificNeed === option
                                                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20 font-medium text-primary'
                                                            : 'border-slate-200 hover:border-primary/50 hover:bg-slate-50 text-slate-700'}
                                                    `}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {currentStep === 3 && (
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

                                {currentStep === 4 && (
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

                                {currentStep === 5 && (
                                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Nombre</span>
                                                <p className="text-slate-900 font-medium">{formData.name}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Objetivo</span>
                                                <p className="text-slate-900 font-medium">{goals.find(g => g.id === formData.goal)?.label}</p>
                                            </div>
                                            <div className="col-span-2">
                                                <span className="text-xs text-slate-500 uppercase font-bold">Necesidad Específica</span>
                                                <p className="text-slate-900 font-medium">{formData.specificNeed}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Edad</span>
                                                <p className="text-slate-900 font-medium">{formData.age} años</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Ocupación</span>
                                                <p className="text-slate-900 font-medium">{formData.occupation}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Email</span>
                                                <p className="text-slate-900 font-medium">{formData.email}</p>
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 uppercase font-bold">Teléfono</span>
                                                <p className="text-slate-900 font-medium">{formData.phone}</p>
                                            </div>
                                        </div>
                                        <div className="text-xs text-slate-500 mt-4 pt-4 border-t border-slate-200">
                                            * Al hacer clic en "Enviar Solicitud", se abrirá tu aplicación de correo para enviar estos datos.
                                        </div>
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
                                (currentStep === 2 && !formData.specificNeed) ||
                                (currentStep === 3 && (!formData.age || !formData.occupation)) ||
                                (currentStep === 4 && (!formData.email || !formData.phone))
                            }
                        >
                            {isSubmitting ? 'Abriendo Correo...' : (currentStep === steps.length - 1 ? 'Enviar Solicitud' : 'Continuar')} <ArrowRight size={18} />
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
