import React from 'react';
import { TrendingDown, TrendingUp, Settings2, Gauge, Filter, Shield, FileJson, Clock, Hourglass, History, MousePointerClick, Target, Zap } from 'lucide-react';

const BusinessROI: React.FC = () => {
    return (
        <section id="roi" className="py-14 md:py-22 px-6 bg-white/[0.01] border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] text-gradient font-bold">ROI e Eficiência Operacional</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-12 mb-12">
                    <div className="space-y-6">
                        <h3 className="text-xl md:text-2xl text-white font-bold">Redução de CAC e aumento de LTV via governança do pipeline</h3>
                        <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                            O impacto econômico do PULSE é consequência direta de três escolhas de engenharia: governança de estado do pipeline, perfilagem progressiva e orquestração operacional com execução determinística. Isso coloca o crescimento sob controle de sistema — não sob variações de pessoa, canal ou “boa vontade” do processo. Em vez de uma operação que depende de reconstrução manual de contexto e decisões reativas, o PULSE estabelece transições explícitas, evidências persistentes e políticas temporais que reduzem incerteza e eliminam redundância. Em termos práticos, esse desenho reduz o custo de operação por lead porque corta retrabalho e reexecuções sem valor, aumenta conversão porque restringe a execução a janelas em que a abordagem é válida e coerente com o histórico, e eleva LTV porque melhora a qualidade do encaixe entre dor, intenção e proposta — com sinais estruturados suficientes para sustentar retenção e expansão.
                        </p>
                    </div>
                </div>

                <div className="space-y-16">

                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl md:text-2xl text-white font-bold">
                                CAC ↓ por redução de custo de qualificação e retrabalho operacional
                            </h4>
                            <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                A qualificação manual tende a “vazar tempo” por redundância operacional: o mesmo sinal é reprocessado em canais diferentes, o contexto precisa ser reconstruído a cada interação e decisões voltam para ciclos de revisão por falta de evidência consistente. Isso gera filas invisíveis — minutos repetidos que, em volume, viram horas. O PULSE reduz esse desperdício ao impor governança de estado sobre o pipeline e padronizar a saída em formatos acionáveis. Em vez de conversas soltas e eventos desconectados, o sistema consolida sinais, mantém contexto persistente e transforma interações em registros estruturados que alimentam decisão e execução. O resultado é previsibilidade: menos retrabalho, menor tempo de qualificação por lead e um fluxo que escala sem depender de “memória humana” para manter consistência.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">

                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-3">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Settings2 className="w-5 h-5 text-green-400 shrink-0" />
                                    <h5 className="text-white font-bold text-lg">
                                        <span className="md:hidden">Redução de custo</span>
                                        <span className="hidden md:inline">Mecanismos técnicos que reduzem custo</span>
                                    </h5>
                                </div>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Filter className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Debouncing e concatenação de mensagens: reduz chamadas redundantes e evita variações de estado por bursts de en&shy;tra&shy;da.</span>
                                        <span className="hidden md:inline">Debouncing e concatenação de mensagens: reduz chamadas redundantes e evita variações de estado por bursts de entrada.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Shield className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Deduplicação de eventos: impede que o mesmo evento gere múltiplas execuções ou efeitos colaterais em cas&shy;ca&shy;ta.</span>
                                        <span className="hidden md:inline">Deduplicação de eventos: impede que o mesmo evento gere múltiplas execuções ou efeitos colaterais em cascata.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <FileJson className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Saídas estruturadas: convertem sinais não estruturados em artefatos operacionais (campos, intent, contexto), reduzindo revisão ma&shy;nu&shy;al.</span>
                                        <span className="hidden md:inline">Saídas estruturadas: convertem sinais não estruturados em artefatos operacionais (campos, intent, contexto), reduzindo revisão manual.</span>
                                    </li>
                                </ul>
                            </div>


                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-2">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Gauge className="w-5 h-5 text-green-400" />
                                    <h5 className="text-white font-bold text-lg">Como medir</h5>
                                </div>
                                <ul className="space-y-4">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Taxa de reprocesso e du&shy;pli&shy;ci&shy;da&shy;de</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Taxa de reprocesso e duplicidade</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Tempo médio de qua&shy;li&shy;fi&shy;ca&shy;ção</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Tempo médio de qualificação</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-green-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Custo operacional por lead qua&shy;li&shy;fi&shy;ca&shy;do</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Custo operacional por lead qualificado</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl md:text-2xl text-white font-bold">
                                Conversão ↑ por janelas de contexto e controle de estado do pipeline
                            </h4>
                            <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                Em operações comerciais com alto volume de contatos, a conversão costuma degradar quando a cadência de abordagem não acompanha o estado real da jornada: tentativas acionadas tarde demais, follow-ups disparados sem contexto suficiente e sequências repetidas como se cada interação fosse a primeira. Esse desalinhamento cria ruído, aumenta o atrito com o prospect e reduz a taxa de resposta ao longo do tempo. O PULSE trata esse cenário como um problema de governança temporal e de estado. O pipeline mantém um modelo consistente do contato (histórico, estágio e evidências coletadas) e aplica políticas explícitas de tempo — como janela de oferta e expiração de contexto (TTL) — para que ações só sejam executadas quando forem compatíveis com o momento e com o que já aconteceu. Na prática, isso bloqueia redundância, evita insistência fora de timing e mantém a execução coerente em escala, resultando em conversão mais estável com menor desgaste operacional.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-3">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Settings2 className="w-5 h-5 text-blue-400 shrink-0" />
                                    <h5 className="text-white font-bold text-lg">
                                        <span className="md:hidden">Aumento de conversão</span>
                                        <span className="hidden md:inline">Mecanismos técnicos que aumentam conversão</span>
                                    </h5>
                                </div>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Clock className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Políticas de janela (TTL): evitam abordagem fora de contexto e reduzem ações “tardias” que só geram re&shy;jei&shy;ção.</span>
                                        <span className="hidden md:inline">Políticas de janela (TTL): evitam abordagem fora de contexto e reduzem ações “tardias” que só geram rejeição.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Hourglass className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Janela de oferta com expiração automática: limita fadiga operacional e previne insistência sem las&shy;tro.</span>
                                        <span className="hidden md:inline">Janela de oferta com expiração automática: limita fadiga operacional e previne insistência sem lastro.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <History className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Persistência de contexto: elimina repetição e mantém continuidade entre interações, preservando co&shy;e&shy;rên&shy;cia.</span>
                                        <span className="hidden md:inline">Persistência de contexto: elimina repetição e mantém continuidade entre interações, preservando coerência.</span>
                                    </li>
                                </ul>
                            </div>


                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-2">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Gauge className="w-5 h-5 text-blue-400" />
                                    <h5 className="text-white font-bold text-lg">Como medir</h5>
                                </div>
                                <ul className="space-y-4">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingUp className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Taxa de conversão por ja&shy;ne&shy;la (TTL)</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Taxa de conversão por janela (TTL)</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Taxa de abandono por fa&shy;di&shy;ga</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Taxa de abandono por fadiga</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-blue-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Tempo até con&shy;ver&shy;são</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Tempo até conversão</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl md:text-2xl text-white font-bold">
                                LTV ↑ por perfilagem psicográfica e alinhamento de intenção
                            </h4>
                            <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                                O LTV tende a aumentar quando a operação melhora o encaixe entre dor real, intenção e proposta, evitando atrair clientes desalinhados que entram caro, exigem muito suporte e saem cedo. Quando esse encaixe é fraco, até pode haver volume de aquisição, mas o portfólio fica contaminado por má aderência e o LTV cai por churn e baixo potencial de expansão. No PULSE, isso é tratado como engenharia de sinal e governança de contexto: a perfilagem é progressiva, construída ao longo das interações para consolidar evidências úteis (dores, restrições, linguagem, urgência), e a recuperação de conhecimento ocorre com precisão, trazendo apenas o que é relevante ao caso e ao estado atual do contato. O resultado é comunicação mais consistente, menos dispersão e maior taxa de retenção e expansão.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-5 gap-6">
                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-3">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Settings2 className="w-5 h-5 text-purple-400 shrink-0" />
                                    <h5 className="text-white font-bold text-lg">
                                        <span className="md:hidden">Aumento de LTV</span>
                                        <span className="hidden md:inline">Mecanismos técnicos que elevam LTV</span>
                                    </h5>
                                </div>
                                <ul className="space-y-4 text-gray-400 text-sm">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <MousePointerClick className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Extração de dores: gera um perfil operacional reutilizável para direcionar decisões e co&shy;mu&shy;ni&shy;ca&shy;ção.</span>
                                        <span className="hidden md:inline">Extração de dores: gera um perfil operacional reutilizável para direcionar decisões e comunicação.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Target className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Classificação de intenção: reduz dispersão ao ajustar o discurso ao estágio e à motivação re&shy;al.</span>
                                        <span className="hidden md:inline">Classificação de intenção: reduz dispersão ao ajustar o discurso ao estágio e à motivação real.</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <Zap className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-5 md:h-5 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden">Curadoria por RAG: entrega valor técnico imediato com base em recuperação de conhecimento, aumentando confiança e utilidade per&shy;ce&shy;bi&shy;da.</span>
                                        <span className="hidden md:inline">Curadoria por RAG: entrega valor técnico imediato com base em recuperação de conhecimento, aumentando confiança e utilidade percebida.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="glass-card p-6 border-white/5 bg-white/[0.02] md:col-span-2">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                                    <Gauge className="w-5 h-5 text-purple-400" />
                                    <h5 className="text-white font-bold text-lg">Como medir</h5>
                                </div>
                                <ul className="space-y-4">
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingUp className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Retenção por cluster de in&shy;ten&shy;ção</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Retenção por cluster de intenção</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingUp className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">NRR/Expansão em perfis qua&shy;li&shy;fi&shy;ca&shy;dos</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">NRR/Expansão em perfis qualificados</span>
                                    </li>
                                    <li className="block md:flex md:gap-3 md:h-10 md:items-start text-justify hyphen-limit-strict-roi !tracking-tight">
                                        <TrendingDown className="w-3.5 h-3.5 text-purple-400 float-left mr-2 mt-1 md:w-4 md:h-4 md:float-none md:mr-0 md:shrink-0 md:mt-0.5" />
                                        <span className="md:hidden text-gray-400 text-sm">Redução de churn por de&shy;sa&shy;li&shy;nha&shy;men&shy;to</span>
                                        <span className="hidden md:inline text-gray-400 text-sm">Redução de churn por desalinhamento</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 space-y-6">
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        Em síntese, o PULSE foi desenhado para transformar dados dispersos em execução disciplinada, com governança de estado e previsibilidade operacional. Ele não “processa mensagens”: ele define o que é fato, o que é contexto, o que já foi tentado, o que está permitido agora e qual é o próximo passo válido para cada contato — de forma auditável, reproduzível e resistente a ruído.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        Isso não é um argumento estético. Em operação, a diferença entre um fluxo que “vai reagindo” e um fluxo com estado governado aparece diretamente no custo e no resultado. Quando o pipeline evita reprocessamento, repetições e ações fora de timing, o custo marginal por lead cai porque cada sinal gera menos desperdício computacional e menos retrabalho humano. Quando a execução respeita janelas úteis (TTL, regras de transição, histórico consolidado), a conversão tende a subir porque o contato recebe abordagens coerentes com o momento e com o que já foi estabelecido. E quando a qualificação captura dor e intenção com perfilagem progressiva, apoiada por recuperação de conhecimento com precisão, o LTV aumenta por um motivo simples: a aquisição passa a favorecer aderência real entre demanda e oferta, reduzindo dispersão, churn e custo de suporte — e abrindo espaço para expansão previsível.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BusinessROI;
