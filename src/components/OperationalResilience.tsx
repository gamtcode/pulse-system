import React from 'react';
import { ShieldCheck, GitMerge, Database, Server } from 'lucide-react';

const OperationalResilience: React.FC = () => {
    return (
        <section id="guarantees" className="py-14 md:py-22 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] mb-6 text-gradient font-bold">Resiliência e Previsibilidade</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Sanitização, validação e integridade persistente</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit-super-relaxed md:[hyphens:manual] !tracking-tight [text-wrap:pretty]">
                        Esta sessão descreve as garantias técnicas que tornam o PULSE previsível sob volume, ruído e dependências externas. Em vez de depender de “execução ideal”, o sistema impõe comportamento determinístico e auditável: eventos repetidos não podem gerar efeitos duplicados (idempotência e deduplicação com chaves e TTL), e picos de entrada não podem colapsar integrações (controle de vazão com batch, throttling e retry). O objetivo é manter cadência estável, evitar reentradas, reduzir retrabalho e impedir divergência de estado.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit-super-relaxed md:[hyphens:manual] !tracking-tight [text-wrap:pretty]">
                        Além disso, o que é persistido precisa ser confiável para sustentar decisões futuras. Por isso, saídas de IA passam por validação e normalização antes de gravar (tratamento de null, limites de formato, padronização), garantindo sanitização, validação e integridade persistente. E para evitar regressão sistêmica, responsabilidades ficam separadas em kernels (roteamento, extração, persistência, políticas temporais, busca vetorial e analytics), isolando falhas e permitindo evolução incremental sem “efeitos colaterais” no comportamento global.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">

                    <div className="glass-card p-8 border-white/5 space-y-4 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <GitMerge className="w-5 h-5" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white">Idempotência e deduplicação</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit md:[hyphens:auto] !tracking-tight [text-wrap:pretty]">
                            Eventos repetidos não devem gerar reprocessamento nem efeitos colaterais duplicados. Para isso, o runtime aplica deduplicação em Redis com chaves de controle e TTL, reduzindo reentradas causadas por retry, duplicidade do provedor ou reenvio. O resultado é um pipeline com execução previsível, onde a repetição de entradas tende a ser tratada como no-op dentro da janela definida.
                        </p>
                    </div>


                    <div className="glass-card p-8 border-white/5 space-y-4 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white">Integridade e consistência de dados</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit md:[hyphens:auto] !tracking-tight [text-wrap:pretty]">
                            Saídas de IA não são persistidas “no estado bruto”. Antes de gravar, passam por validação e sanitização: tratamento explícito de null/campos ausentes, normalização de strings, padronização de tipos e limites de formato. Quando algo foge do contrato, aplica-se default seguro ou bloqueio controlado — evitando inconsistências no estado do pipeline e efeitos colaterais nas próximas etapas.
                        </p>
                    </div>


                    <div className="glass-card p-8 border-white/5 space-y-4 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                <Server className="w-5 h-5" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white">Controle de vazão e throughput</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit md:[hyphens:auto] !tracking-tight [text-wrap:pretty]">
                            Processamentos em lote não fazem “burst” de requisições. A execução é organizada em batches controlados, com throttling entre requisições e retry com backoff quando há falhas transitórias ou respostas de rate limit. Isso mantém o consumo de APIs externas dentro de limites operacionais, evita bloqueios por excesso de requisições e preserva previsibilidade do throughput — mesmo sob variação de volume e instabilidade do provedor, sem criar picos artificiais de carga, nem saturar filas internas.
                        </p>
                    </div>


                    <div className="glass-card p-8 border-white/5 space-y-4 hover:border-white/10 transition-colors">
                        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <Database className="w-5 h-5" />
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-white">Separação de responsabilidades</h3>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm text-justify hyphen-limit md:[hyphens:auto] !tracking-tight [text-wrap:pretty]">
                            Roteamento, extração semântica, persistência, políticas de oferta, recuperação vetorial e analytics operam como kernels isolados, cada um com responsabilidade única e contratos claros de entrada/saída. Esse desenho reduz acoplamento e limita o “raio de impacto” de mudanças: evoluir um kernel não compromete o comportamento dos demais. Na prática, isso sustenta evolução incremental com previsibilidade, reduzindo risco de regressões sistêmicas e facilitando auditoria do que mudou e onde mudou.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationalResilience;
