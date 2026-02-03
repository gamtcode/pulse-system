import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ReportModalProps {
    isOpen: boolean;
    onClose: () => void;
    content: string;
}

/**
 * Modal portal used to display long, preformatted user text without impacting page layout.
 * Closes via Escape key or backdrop click.
 */
const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose, content }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        // Bind Escape listener only while open to reduce global event surface.
        if (isOpen) window.addEventListener('keydown', handleEsc);

        // Always attempt removal to keep teardown deterministic across renders/unmounts.
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    // Render into a portal to avoid z-index/overflow constraints from parent containers.
    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 fade-in">
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="relative w-full max-w-2xl glass-card !p-0 border border-white/10 shadow-2xl flex flex-col max-h-[85vh] animate-slide-up overflow-hidden">
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                    <h3 className="text-lg font-medium text-white tracking-wide">Descrição do Usuário</h3>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-200"
                    >
                        <i className="bi bi-x-lg text-sm"></i>
                    </button>
                </div>

                <div className="p-8 overflow-y-auto custom-scrollbar text-gray-300 leading-relaxed whitespace-pre-wrap text-justify text-[15px]">
                    {content || <span className="italic text-gray-500">Nenhum detalhe disponível.</span>}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ReportModal;
