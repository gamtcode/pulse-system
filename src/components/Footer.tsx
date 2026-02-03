import React from 'react';
import { Linkedin, Globe, Mail } from 'lucide-react';
import logo from '@/assets/images/pulse.png';

const Footer: React.FC = () => {
    return (
        <footer className="py-5 md:py-6 px-6 border-t border-border bg-dark">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 md:gap-6">

                <div className="flex flex-row items-center gap-5 md:gap-8">

                    <div className="cursor-default">
                        <div className="flex items-center gap-2 animate-brand-glow [will-change:filter] [transform:translateZ(0)]">
                            <img src={logo} alt="PULSE" className="h-5 w-auto shrink-0" />
                            <span className="text-xl font-medium tracking-tighter text-gray-400">
                                PULSE <span className="font-light text-gray-400 ml-1">System</span>
                            </span>
                        </div>
                    </div>


                    <div className="flex gap-4">
                        <a
                            href="https://www.linkedin.com/in/dev-guilherme-teixeira"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://architecode.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white transition-colors"
                            aria-label="Website"
                        >
                            <Globe className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:contato@architecode.com"
                            className="text-gray-500 hover:text-red-400 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>


                <p className="text-gray-600 text-[10px] font-mono uppercase tracking-[0.2em] text-center">
                    &copy; 2025 PULSE System.<br className="md:hidden" /> Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
