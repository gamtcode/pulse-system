import React from 'react';
import { LucideIcon } from 'lucide-react';
import { KernelData } from '@/types';

interface KernelCardProps {
    data: KernelData;
    onClick: (data: KernelData) => void;
    icon: LucideIcon;
}

const KernelCard: React.FC<KernelCardProps> = ({ data, onClick, icon: Icon }) => {
    const getSummary = (html: string) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        const firstParagraph = doc.querySelector('p');
        return firstParagraph?.textContent || doc.body.textContent || "";
    };

    return (
        <div className="group glass-card flex flex-col h-full relative overflow-hidden transition-colors duration-300 hover:bg-white/5">

            <div className="flex flex-col gap-4 mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-gradient transition-all duration-300 leading-tight">
                        {data.title}
                    </h4>
                </div>
                <div className="w-full h-px bg-white/10"></div>
            </div>


            <p className="text-sm text-gray-500 line-clamp-5 leading-relaxed text-justify hyphen-limit tracking-tight [text-wrap:pretty] mb-6">
                {getSummary(data.content)}
            </p>


            <div className="mt-auto pt-4 border-t border-white/10">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClick(data);
                    }}
                    className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-emerald-400 transition-colors border-b border-transparent hover:border-emerald-400 pb-0.5"
                >
                    Saiba mais
                </button>
            </div>
        </div>
    );
};

export default KernelCard;
