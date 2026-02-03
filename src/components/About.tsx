import React from 'react';
import { MessageSquare, Brain, Search, Clock, LayoutDashboard } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-14 md:py-22 px-6 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] text-gradient font-bold">
                        <span className="hidden md:inline">PULSE System | </span>Prospective User & Lead Strategy Engine
                    </h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    <div className="space-y-12">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6">O Problema e a Solução</h3>
                        <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                            O PULSE é uma infraestrutura de <strong className="text-white font-semibold">prospecção e conversão</strong> construída para resolver um problema recorrente em operações digitais: ruído operacional (mensagens fragmentadas, sinais fracos de intenção, duplicidade de eventos, taxonomia inconsistente) e qualificação manual lenta, cara e difícil de escalar. Em vez de centralizar a operação em tarefas manuais ou automações lineares, o PULSE implementa uma arquitetura orientada a eventos. A operação deixa de depender de decisões manuais e passa a ser regida por contratos, kernels de execução e telemetria, com deduplicação, janelas temporais e consistência de estado como garantias de engenharia.
                        </p>

                        <blockquote className="border-l-4 border-green-500 pl-6 pr-6 py-4 italic text-base text-justify hyphen-limit !tracking-tight [text-wrap:pretty] text-gray-400 bg-white/[0.02] rounded-r-xl">
                            <strong className="text-white not-italic block mb-2">Resultado:</strong>
                            Redução do custo de qualificação, aumento de taxa de resposta consistente e capacidade de operar um <strong className="text-white font-semibold">Pipeline de Conversão Autônoma</strong> sem degradar a experiência ou perder governança.
                        </blockquote>
                    </div>


                    <div className="grid gap-4">
                        <div className="glass-card p-5 relative mt-6 pt-10 md:mt-0 md:pt-5 md:flex md:items-start md:gap-4 hover:bg-white/5 transition-colors group">
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 absolute top-0 left-5 -translate-y-1/2 md:static md:translate-y-0 group-hover:scale-110 transition-transform">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Captura sinais multi-canal (Instagram e WhatsApp) com controle de sessão e deduplicação e rastreabilidade.
                            </p>
                        </div>

                        <div className="glass-card p-5 relative mt-6 pt-10 md:mt-0 md:pt-5 md:flex md:items-start md:gap-4 hover:bg-white/5 transition-colors group">
                            <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 shrink-0 absolute top-0 right-5 -translate-y-1/2 md:static md:translate-y-0 group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Transforma texto não estruturado em <strong className="text-white font-semibold">telemetria de intenção</strong> e perfil psicográfico com taxonomia NLU.
                            </p>
                        </div>

                        <div className="glass-card p-5 relative mt-6 pt-10 md:mt-0 md:pt-5 md:flex md:items-start md:gap-4 hover:bg-white/5 transition-colors group">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 absolute top-0 left-5 -translate-y-1/2 md:static md:translate-y-0 group-hover:scale-110 transition-transform">
                                <Search className="w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Recupera conhecimento por <strong className="text-white font-semibold">busca vetorial</strong> (embeddings + similaridade) com precisão e baixa latência.
                            </p>
                        </div>

                        <div className="glass-card p-5 relative mt-6 pt-10 md:mt-0 md:pt-5 md:flex md:items-start md:gap-4 hover:bg-white/5 transition-colors group">
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 absolute top-0 right-5 -translate-y-1/2 md:static md:translate-y-0 group-hover:scale-110 transition-transform">
                                <Clock className="w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Mantém estado operacional consistente com TTL, janelas de oferta, quotas e replay determinístico.
                            </p>
                        </div>

                        <div className="glass-card p-5 relative mt-6 pt-10 md:mt-0 md:pt-5 md:flex md:items-start md:gap-4 hover:bg-white/5 transition-colors group">
                            <div className="p-2 rounded-lg bg-green-500/10 text-green-400 shrink-0 absolute top-0 left-5 -translate-y-1/2 md:static md:translate-y-0 group-hover:scale-110 transition-transform">
                                <LayoutDashboard className="w-6 h-6" />
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Expõe inteligência pronta para consumo no <strong className="text-white font-semibold">Command Center</strong> via contratos estáveis e dados versionados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
