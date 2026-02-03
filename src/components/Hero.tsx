import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-start pt-20 md:pt-24 pb-4 md:pb-8 px-6 relative overflow-hidden">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl w-full text-center z-10 animate-fade-up flex-1 flex flex-col justify-center -mt-20 md:mt-0">

                <div className="inline-flex items-center gap-2 px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/[0.03] border border-white/10 mb-8 md:mb-8 backdrop-blur-sm mx-auto">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider uppercase">NEXT-GEN REVENUE ENGINE</span>
                </div>

                <h1 className="text-5xl md:text-8xl font-bold mb-6 md:mb-8 text-gradient leading-[1.2] pb-2">
                    A Jornada da Conversão Inteligente
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
                    Uma plataforma que compreende intenções, mapeia perfis e vende de forma consultiva 24 horas por dia.
                </p>

                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                    <a href="#architecture" className="flex items-center justify-center gap-2 px-4 sm:px-6 sm:w-[200px] h-11 sm:h-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                        Ver Arquitetura
                    </a>
                    <Link to="/dashboard" className="flex items-center justify-center gap-2 px-4 sm:px-6 sm:w-[200px] h-11 sm:h-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20">
                        Acessar Painel
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-3 animate-bounce opacity-20 z-20 mt-4 translate-y-6 md:translate-y-0 md:mt-16">
                    <span className="text-[10px] uppercase tracking-widest font-mono">Scroll</span>
                    <ChevronDown className="w-4 h-4" />
                </div>
            </div>
        </section>
    );
};


export default Hero;
