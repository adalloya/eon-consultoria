import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X, Shield, Phone, Mail, Facebook } from 'lucide-react';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16 md:h-32">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo-wide.png" alt="EON Consultoría en Protección" className="h-10 md:h-32 w-auto object-contain" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-slate-600 hover:text-primary font-medium transition-colors">Inicio</Link>
                        <Link to="/nosotros" className="text-slate-600 hover:text-primary font-medium transition-colors">Nosotros</Link>
                        <Link to="/servicios" className="text-slate-600 hover:text-primary font-medium transition-colors">Servicios</Link>
                        <Link to="/blog" className="text-slate-600 hover:text-primary font-medium transition-colors">Blog</Link>
                        <Link to="/onboarding">
                            <Button size="sm" variant="primary">
                                Descubre tu Estrategia
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40 bg-black/20 md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="md:hidden bg-white border-b border-slate-100 p-4 flex flex-col gap-4 relative z-50">
                        <Link to="/" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Inicio</Link>
                        <Link to="/nosotros" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Nosotros</Link>
                        <Link to="/servicios" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Servicios</Link>
                        <Link to="/blog" className="text-slate-600 font-medium" onClick={() => setIsOpen(false)}>Blog</Link>
                        <Link to="/onboarding" onClick={() => setIsOpen(false)}>
                            <Button className="w-full">Descubre tu Estrategia</Button>
                        </Link>
                    </div>
                </>
            )}
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="mb-6">
                            <img src="/logo-wide.png" alt="EON Consultoría en Protección" className="h-24 w-auto object-contain brightness-0 invert" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Contacto</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>+52 999 491 2636</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>contacto@eonconsultoria.com.mx</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Síguenos</h3>
                        <div className="flex gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61583332173889&locale=es_LA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 mt-12 pt-8 text-center text-slate-500 text-sm">
                © {new Date().getFullYear()} EON Consultoría en Protección. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow pt-32">
                {children}
            </main>
            <Footer />
        </div>
    );
};
