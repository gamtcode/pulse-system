import React from 'react';
import { Target, Edit3, Share2, Zap, TableProperties, Database, Sparkles, History, Layers, Activity, Compass, BarChart3, CheckCircle2, Eye } from 'lucide-react';

const TechStack: React.FC = () => {
    return (
        <section id="stack" className="py-14 md:py-22 px-6 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] mb-6 text-gradient font-bold">Stack Tecnológica</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Infraestrutura de execução, persistência e observabilidade</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        O PULSE foi construído como um runtime operacional orientado a eventos: orquestra workflows como kernels de execução, governa estado com cache e políticas temporais (TTL), persiste o ciclo de vida do pipeline com rastreabilidade e sustenta inteligência cognitiva via recuperação vetorial. No Command Center, a interface prioriza resiliência e previsibilidade: o painel mantém o núcleo utilizável mesmo quando integrações externas falham, e trata telemetria e flags como infraestrutura isolada.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">

                    <div className="glass-card border-white/5 space-y-8">
                        <div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <h3 className="text-xl md:text-2xl flex items-center gap-3 text-white font-bold">
                                    <Target className="text-blue-500 w-6 h-6" /> Back-end
                                </h3>
                                <span className="hidden md:block font-mono text-sm text-gray-500 uppercase tracking-widest">Operational Platform</span>
                            </div>
                            <span className="md:hidden block mt-4 font-mono text-sm text-gray-500 uppercase tracking-widest">Operational Platform</span>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Share2 className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    Orquestração de Workflows
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">n8n (execução modular; EDA via triggers)</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Zap className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    Estado & Cache
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Redis (status, deduplicação, debouncing, TTL)</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <TableProperties className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    Persistência Operacional
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Baserow (CRM operacional e campos de estado)</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Database className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    Persistência de Conhecimento
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Supabase (Postgres + pgvector)</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Sparkles className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    LLMs por Função
                                </h4>
                                <ul className="text-xs text-gray-400 font-mono space-y-1">
                                    <li>OpenAI GPT-4o-mini (extração)</li>
                                    <li>Google Gemini 2.5 Pro (síntese)</li>
                                    <li>text-embedding-3-small (embeddings)</li>
                                </ul>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <History className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-0.5" />
                                    Memória Persistente
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Zep (stateful conversational design)</p>
                            </div>
                        </div>
                    </div>


                    <div className="glass-card border-white/5 space-y-8">
                        <div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <h3 className="text-xl md:text-2xl flex items-center gap-3 text-white font-bold">
                                    <Edit3 className="text-green-500 w-6 h-6" /> Front-end
                                </h3>
                                <span className="hidden md:block font-mono text-sm text-gray-500 uppercase tracking-widest">Command Center</span>
                            </div>
                            <span className="md:hidden block mt-4 font-mono text-sm text-gray-500 uppercase tracking-widest">Command Center</span>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Layers className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Core Stack
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">React 19, TypeScript, Vite 7, Tailwind CSS v4</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Activity className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Controle de Estado
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Zustand</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Compass className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Roteamento
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">React Router</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <BarChart3 className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Visualização de Dados
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Chart.js (integração controlada)</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Validação & Qualidade
                                </h4>
                                <p className="text-xs text-gray-400 font-mono">Zod, Vitest, Testing Library, Playwright</p>
                            </div>
                            <div className="border-l-2 border-white/10 pl-6 space-y-2">
                                <h4 className="text-sm text-white font-bold block">
                                    <Eye className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-0.5" />
                                    Observabilidade & Feature Flags
                                </h4>
                                <ul className="text-xs text-gray-400 font-mono space-y-1">
                                    <li>Sentry (erros com contexto: ambiente/release e breadcrumbs)</li>
                                    <li>LaunchDarkly (feature flags tipadas; defaults determinísticos no fallback)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
