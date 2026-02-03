import React from 'react';
import { FileJson, ShieldCheck, RefreshCw, Database, ScanSearch, Lightbulb } from 'lucide-react';

const CognitiveIntelligence: React.FC = () => {
    return (
        <section id="intelligence" className="py-14 md:py-22 px-6 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] mb-6 text-gradient font-bold">
                        Inteligência Cognitiva<span className="md:hidden">: </span><span className="hidden md:inline"> |</span> IA & RAG
                    </h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Análise Semântica e Taxonomia NLU sob Contrato</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        O PULSE converte entradas heterogêneas — texto, áudio transcrito, cliques e respostas — em dados estruturados usando <strong className="text-white">NLU orientada a taxonomia</strong>. Em vez de "gerar texto", a linguagem é tratada como sinal: cada interação é normalizada, classificada e enriquecida para produzir <strong className="text-white">metadados consistentes</strong>, compatíveis com contratos rígidos (enums, listas controladas, JSON validado) e prontos para persistência sem poluir a base. O foco é reduzir ambiguidade no pipeline e sustentar segmentação, diagnóstico e decisões de orquestração com sinais repetíveis. Quando a confiança é insuficiente, o sistema prefere não inferir (retorna null/desconhecido) a introduzir categorias genéricas e divergência taxonômica.
                    </p>
                </div>

                <div className="space-y-12 md:space-y-18">

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                <FileJson className="w-5 h-5 text-blue-400" />
                                <h4 className="text-lg md:text-xl text-white font-bold">Saída estruturada</h4>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                Classificadores e extratores retornam formatos restritos (listas controladas, enums, JSON rígido) para evitar poluição do banco e garantir consistência de dados.
                            </p>
                        </div>

                        <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                <h4 className="text-lg md:text-xl text-white font-bold">Blindagem anti-genéricos</h4>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                O sistema aplica regras de especificidade (ex.: "substantivo + contexto") e pode retornar <code className="bg-white/10 px-1 py-0.5 rounded text-xs font-mono">null</code> quando a informação não é confiável, priorizando integridade sobre volume.
                            </p>
                        </div>

                        <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                <RefreshCw className="w-5 h-5 text-purple-400" />
                                <h4 className="text-lg md:text-xl text-white font-bold">Consistência dinâmica</h4>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                Antes de criar novas categorias/objetos, kernels consultam o inventário existente e injetam esses valores no contexto, reduzindo sinônimos redundantes e divergência taxonômica.
                            </p>
                        </div>
                    </div>


                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-xl md:text-2xl text-white font-bold">Conhecimento via Vector Search & Embeddings</h3>

                            <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                O PULSE usa embeddings para transformar linguagem em representação vetorial e sustentar respostas técnicas com critério de similaridade, não com "match" por palavra. Quando precisa localizar conteúdo do acervo (por exemplo, um vídeo ou trecho específico) a partir de uma pergunta incompleta, ele gera embeddings do enunciado, consulta a base vetorial e ranqueia resultados por proximidade semântica. O retorno passa por curadoria e formatação antes de seguir para o canal final, priorizando o item mais aderente ao contexto (tema, intenção e granularidade), reduzindo ambiguidade e evitando recomendações genéricas.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                    <Database className="w-5 h-5 text-amber-400" />
                                    <h4 className="text-lg md:text-xl text-white font-bold">Vetorização & Persistência</h4>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                    Geração de embeddings do texto (modelo dedicado) e persistência vetorial em base compatível (pgvector) para transformar linguagem natural em matemática.
                                </p>
                            </div>

                            <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                    <ScanSearch className="w-5 h-5 text-pink-400" />
                                    <h4 className="text-lg md:text-xl text-white font-bold">Busca por Similaridade</h4>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                    Consulta vetorial (ex.: similaridade de cosseno) via RPC e curadoria/formatação do resultado, garantindo a entrega do melhor conteúdo para o canal mobile.
                                </p>
                            </div>

                            <div className="glass-card p-8 border-white/5 bg-white/[0.02] hover:bg-white/5 transition-colors">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-3">
                                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                                    <h4 className="text-lg md:text-xl text-white font-bold">O que isso resolve</h4>
                                </div>
                                <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit-always tracking-tight [text-wrap:pretty]">
                                    Perguntas imprecisas ainda encontram conteúdo relevante (o "tutorial certo" mesmo sem termos exatos), reduzindo repetição e aumentando a utilidade objetiva.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CognitiveIntelligence;
