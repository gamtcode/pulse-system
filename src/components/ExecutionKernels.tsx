import React, { useState } from 'react';
import { kernelsData } from '@/data/kernels';
import KernelCard from './KernelCard';
import KernelModal from './KernelModal';
import { KernelData } from '@/types';
import {
    Database, Target, Layers, Tag, Activity,
    Timer, Binary, Table, MessageSquare, RotateCcw,
    ArrowLeftRight, UserPlus, GitFork, Anchor, Wand2,
    Users, MessageCircle, Handshake, Smartphone, Bot,
    Search, Cpu, ShieldCheck, ShoppingBag, Send, RefreshCw,
    Box, LucideIcon
} from 'lucide-react';

const MODULE_ICONS: Record<string, LucideIcon> = {
    'A.01': Database,
    'A.02': Target,
    'A.03': Layers,
    'A.04': Tag,
    'A.05': Activity,
    'B.01': Timer,
    'B.02': Binary,
    'B.03': Table,
    'B.04': MessageSquare,
    'B.05': RotateCcw,
    'C.01': ArrowLeftRight,
    'C.02': UserPlus,
    'C.03': GitFork,
    'C.04': Anchor,
    'C.05': Wand2,
    'C.06': Users,
    'C.07': MessageCircle,
    'C.08': Handshake,
    'C.09': Smartphone,
    'C.10': Bot,
    'C.11': Search,
    'C.12': Cpu,
    'C.13': ShieldCheck,
    'C.14': ShoppingBag,
    'C.15': MessageSquare,
    'C.16': Send,
    'C.17': RefreshCw,
};

const ExecutionKernels: React.FC = () => {
    const [selectedKernel, setSelectedKernel] = useState<KernelData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (kernel: KernelData) => {
        setSelectedKernel(kernel);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Keep the selected kernel until the close animation finishes to avoid UI flicker.
        setTimeout(() => setSelectedKernel(null), 300);
    };

    return (
        <section id="modules-grid" className="py-14 md:py-22 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] text-gradient font-bold">Núcleos de Execução</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="mb-12 space-y-6">
                    <h3 className="text-xl md:text-2xl text-white font-bold">27 unidades orquestradas por eventos</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit-super-relaxed md:[hyphens:manual] !tracking-tight [text-wrap:pretty]">
                        Cada núcleo é uma unidade orientada a eventos com responsabilidade bem delimitada — entendimento, roteamento, memória, persistência, deduplicação/TTL, vetorização e oferta. Em conjunto, eles formam uma composição auditável e previsível: gatilho → execução → validação → persistência → transição de estado, com idempotência e fronteiras claras que permitem evoluir o sistema com mudanças localizadas e comportamento consistente.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kernelsData.map((kernel) => (
                        <KernelCard
                            key={kernel.id}
                            data={kernel}
                            onClick={handleCardClick}
                            icon={MODULE_ICONS[kernel.id] || Box}
                        />
                    ))}
                </div>
            </div>

            <KernelModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                content={selectedKernel?.content || ''}
                title={selectedKernel?.title || 'Execution Kernel Details'}
                titleClassName="text-base md:text-xl font-bold text-white tracking-tight"
                icon={(() => {
                    if (!selectedKernel) return undefined;
                    const IconComponent = MODULE_ICONS[selectedKernel.id];
                    if (!IconComponent) return undefined;
                    return (
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                            <IconComponent className="w-5 h-5" />
                        </div>
                    );
                })()}
            />
        </section>
    );
};

export default ExecutionKernels;
