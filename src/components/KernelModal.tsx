import React, { useEffect } from 'react';

import pulseLogo from '@/assets/images/pulse.png';

interface KernelModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
    title?: string;
    titleClassName?: string;
    icon?: React.ReactNode;
}

const KernelModal: React.FC<KernelModalProps> = ({ isOpen, onClose, content, title = "Technical Data Sheet", titleClassName = "text-xl font-bold text-white tracking-tight", icon }) => {
    // Locks body scroll while the modal is open to avoid background interaction.
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => { document.body.style.overflow = 'auto'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">

            <div
                className="absolute inset-0 bg-dark/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-300"
                onClick={onClose}
            ></div>


            <div className="relative w-full max-w-4xl max-h-[90vh] glass-card !p-0 overflow-hidden shadow-2xl border-white/20 animate-in zoom-in-95 duration-300 flex flex-col">


                <div className="flex items-center justify-between p-6 border-b border-border bg-white/[0.02]">
                    <div className="flex items-center gap-4">
                        {icon ? (
                            icon
                        ) : (
                            <div className="w-10 h-10 flex shrink-0 items-center justify-center">
                                <img src={pulseLogo} alt="PULSE" className="w-full h-full object-contain" />
                            </div>
                        )}
                        <h2 className={titleClassName}>{title}</h2>
                    </div>

                </div>


                <div className="px-4 py-8 md:p-8 overflow-y-auto modal-content-scroll flex-1 hyphen-limit tracking-tight">
                    <div
                        className="prose prose-invert max-w-none 
                                    text-gray-300
                                    [&_h3]:text-2xl [&_h3]:mb-4 [&_h3]:text-white [&_h3]:font-bold
                                    [&_p]:text-gray-400 [&_p]:text-justify [&_p]:mb-6 [&_p]:leading-relaxed [&_p]:!tracking-tighter [&_p]:[text-wrap:pretty]
                                    [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-gray-400 [&_ul]:space-y-2 [&_ul]:mb-6
                                    [&_strong]:font-semibold"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                </div>


                <div className="p-4 bg-white/[0.01] border-t border-border flex justify-end">
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center gap-3 w-full sm:w-[200px] h-12 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl font-semibold text-white transition-all duration-300 hover:bg-white/[0.05] hover:border-white/20"
                    >
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default KernelModal;
