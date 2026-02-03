import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Eye,
    Layers,
    Brain,
    Shield,
    Cpu,
    TrendingUp,
    LayoutDashboard,
    LogOut,
    LogIn,
    Menu,
    X,
    Linkedin,
    Globe,
    Mail,
    MessageCircle,
    Github
} from 'lucide-react';
import logo from '@/assets/images/pulse.png';
import { useAuth } from '@/hooks/useAuth';

const Navbar: React.FC = () => {
    const location = useLocation();
    const { isAuthenticated, logout } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close mobile menu on route change.
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleLogout = () => {
        setIsMenuOpen(false);
        logout();
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { href: '/#about', label: 'Visão', icon: Eye },
        { href: '/#architecture', label: 'Arquitetura', icon: Layers },
        { href: '/#intelligence', label: 'Inteligência', icon: Brain },
        { href: '/#engineering', label: 'Engenharia', icon: Shield },
        { href: '/#modules-grid', label: 'Núcleos', icon: Cpu },
        { href: '/#roi', label: 'ROI', icon: TrendingUp },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-40 border-b border-border bg-dark/80 backdrop-blur-md">

            <svg width="0" height="0" className="absolute invisible">
                <defs>
                    <linearGradient id="icon-gradient" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="white" />
                        <stop offset="100%" stopColor="#9ca3af" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="max-w-7xl mx-auto px-6 md:px-14 h-20 flex items-center justify-between nav-mobile:justify-start">
                <Link
                    to="/"
                    className="shrink-0"
                >
                    <div className="flex items-center gap-3 animate-brand-glow [will-change:filter]">
                        <img src={logo} alt="PULSE" className="h-7 w-auto shrink-0" />
                        <span className="text-[24px] font-semibold text-gradient flex items-center">
                            PULSE <span className="ml-1">System</span>
                        </span>
                    </div>
                </Link>


                <div className="hidden nav-mobile:flex items-center ml-auto gap-2 text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all"
                        >
                            <link.icon className="w-4 h-4" /> {link.label}
                        </a>
                    ))}

                    <Link
                        to="/dashboard"
                        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white/10 text-white/80 hover:text-white transition-all"
                    >
                        <LayoutDashboard className="w-4 h-4" /> Painel
                    </Link>

                    {isAuthenticated ? (
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-5 py-2 glass-card !p-2 !px-4 hover:!bg-red-500/10 hover:!text-red-400 border-red-500/20 text-red-400 transition-colors"
                        >
                            <LogOut className="w-4 h-4" /> Sair
                        </button>
                    ) : (
                        <Link
                            to="/login"
                            className="flex items-center gap-2 px-5 py-2 glass-card !p-2 !px-4 hover:!bg-white hover:!text-slate-950"
                        >
                            <LogIn className="w-4 h-4" /> Entrar
                        </Link>
                    )}
                </div>


                <button
                    onClick={toggleMenu}
                    className="nav-mobile:hidden p-2 text-white/80 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>


            {isMenuOpen && (
                <div className="nav-mobile:hidden fixed top-20 left-0 w-full h-screen bg-background animate-in slide-in-from-top duration-300">
                    <div className="flex flex-col py-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 px-6 py-4 text-white/80 border-b border-white/5 last:border-0 hover:bg-white/5 hover:text-white transition-all"
                            >
                                <link.icon className="w-5 h-5" stroke="url(#icon-gradient)" />
                                <span className="text-gradient">{link.label}</span>
                            </a>
                        ))}

                        <Link
                            to="/dashboard"
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center gap-3 px-6 py-4 text-white/80 border-b border-white/5 hover:bg-white/5 hover:text-white transition-all"
                        >
                            <LayoutDashboard className="w-5 h-5" stroke="url(#icon-gradient)" />
                            <span className="text-gradient">Painel</span>
                        </Link>

                        {isAuthenticated ? (
                            <>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-6 py-4 text-red-400/80 border-b border-white/5 hover:bg-white/5 hover:text-red-400 transition-all text-left font-medium"
                                >
                                    <LogOut className="w-5 h-5" />
                                    <span>Sair</span>
                                </button>
                            </>
                        ) : (
                            <Link
                                to="/login"
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 px-6 py-4 text-white/80 border-b border-white/5 hover:bg-white/5 hover:text-white transition-all"
                            >
                                <LogIn className="w-5 h-5" stroke="url(#icon-gradient)" />
                                <span className="text-gradient">Entrar</span>
                            </Link>
                        )}


                        <div className="flex justify-center gap-10 py-10">
                            <a
                                href="https://www.linkedin.com/in/dev-guilherme-teixeira"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" stroke="url(#icon-gradient)" />
                            </a>
                            <a
                                href="https://github.com/gamtcode/pulse-system"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" stroke="url(#icon-gradient)" />
                            </a>
                            <a
                                href="https://architecode.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Website"
                            >
                                <Globe className="w-6 h-6" stroke="url(#icon-gradient)" />
                            </a>
                            <a
                                href="mailto:contato@architecode.com"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" stroke="url(#icon-gradient)" />
                            </a>
                            <a
                                href="https://wa.me/5512981996782?text=Olá!%20Quero%20mais%20informações%20sobre%20o%20PULSE%20System."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/80 hover:text-white transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-6 h-6" stroke="url(#icon-gradient)" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav >
    );
};

export default Navbar;
