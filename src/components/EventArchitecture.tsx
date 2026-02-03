import React from 'react';
import { Cpu, Database, Layers, Activity } from 'lucide-react';
import KernelModal from './KernelModal';

const EventArchitecture: React.FC = () => {
    const [selectedFeature, setSelectedFeature] = React.useState<{ title: string; content: string; icon: React.ReactNode } | null>(null);

    const handleOpenModal = (title: string, content: string, icon: React.ReactNode) => {
        setSelectedFeature({ title, content, icon });
    };

    const VISION_CONTENT = {
        INGESTION: `
            <p>O roteador de entrada é a camada que transforma entradas do ambiente (webhooks, agendamentos e gatilhos internos) em eventos “processáveis” dentro do PULSE. Ele existe para impor contrato e previsibilidade logo na borda, antes que qualquer Kernel de Execução seja acionado. Como os canais de entrada carregam ruído operacional — mensagens fragmentadas, formatos variáveis e callbacks duplicados — o roteador atua como um gateway lógico que valida o evento e o normaliza para um tipo operacional claro (comentário, mensagem, postback, áudio, comando administrativo).</p>

            <p>Essa normalização não é apenas organização; ela é o mecanismo que permite que os kernels permaneçam com responsabilidade delimitada e sem acoplamento direto. Em vez de cada kernel ter que “adivinhar” o que recebeu ou lidar com variações do mundo externo, o roteador garante que o processamento comece com um evento já classificado, reduzindo decisões redundantes e mantendo o fluxo consistente. Isso preserva a integridade do ciclo de execução orientado a sinais: o sistema reage a evidências, e não a ruído.</p>

            <p>Além de classificar, o roteador aplica controles operacionais que evitam efeitos colaterais típicos de integrações: deduplicação com TTL para impedir reprocessamento dentro de janelas relevantes, a regra de “não responder a si mesmo” para bloquear loops de auto-resposta e o respeito à pausa humana quando a operação precisa interromper a automação. Essas regras ficam concentradas na entrada justamente para proteger o restante do sistema de inconsistências que, em uma arquitetura orientada a eventos, tendem a se amplificar quando atravessam múltiplos kernels.</p>

            <p>O resultado é um plano de execução mais estável: o PULSE só dispara kernels quando o evento atende critérios mínimos de validade e governança operacional. Isso reduz duplicidade de ações, preserva o estado consistente e mantém previsibilidade mesmo quando a origem dos eventos é volátil — sem exigir que o domínio e a UI carreguem a complexidade das integrações externas.</p>
        `,
        STATE: `
            <p>O plano de estado e sessão no PULSE existe para garantir que a execução orientada a eventos permaneça coerente ao longo do tempo, mesmo quando a entrada é fragmentada e assimétrica. Em vez de tratar cada evento como um “pedido isolado”, o sistema mantém um contexto operacional por usuário e por janela de interação. Isso permite que kernels trabalhem com previsibilidade: eles não precisam reconstruir intenção a cada mensagem recebida, porque existe um estado governado que descreve em que fase aquela sessão está e quais regras devem ser respeitadas.</p>

            <p>O status do bot por usuário (ON/OFF/PAUSED) é o mecanismo mais básico dessa governança. Ele permite alternar entre automação e controle humano sem reconfigurar o sistema nem “quebrar” o fluxo de eventos. Quando a operação exige pausa, o estado impede disparos indevidos e preserva a continuidade: o sistema volta a operar a partir do mesmo contexto quando reativado, sem que mensagens pendentes ou eventos atrasados causem comportamento imprevisível.</p>

            <p>A concatenação de mensagens (debouncing) resolve um problema típico de canais como WhatsApp e Instagram: uma intenção real costuma chegar em múltiplas mensagens curtas, em sequência, e processá-las como unidades independentes degrada a leitura semântica e aumenta respostas inconsistentes. O PULSE, ao controlar sessão, agrega essas entradas dentro de um intervalo determinístico e só então dispara o processamento, reduzindo ruído e aumentando a qualidade do que será interpretado e transformado em telemetria de intenção e perfil.</p>

            <p>Janelas de oportunidade e TTL, deduplicação e limites operacionais completam o plano de estado: eles definem “validade temporal” para decisões e impedem que o sistema reaja fora do contexto correto. Deduplicação com TTL bloqueia reprocessamentos de callbacks repetidos; contadores de uso e rate limiting protegem o throughput e evitam escalada de custos e efeitos colaterais (ex.: múltiplas respostas para o mesmo estímulo). No conjunto, esse estado operacional funciona como um mecanismo de consistência prática: preserva governança, evita loops e mantém o pipeline executando com controle, mesmo sob entrada ruidosa e variável.</p>
        `,
        DATA: `
           <p>No PULSE, o plano de dados e conhecimento existe para separar claramente “estado operacional de execução” de “memória analítica do sistema”. Perfis, telemetria e metadados são persistidos em bancos operacionais porque precisam ser consultáveis com baixa latência e consistência pragmática: o sistema não pode depender de inferência momentânea para decidir como tratar um contato, qual janela está vigente ou quais sinais já foram observados. Esse repositório dá continuidade ao ciclo de vida do dado, reduz retrabalho e evita que o pipeline se comporte como se cada interação fosse a primeira.</p>

           <p>A telemetria não é armazenada como texto solto; ela serve para estruturar sinais de intenção e contexto em registros verificáveis. Isso viabiliza rastreabilidade e governança: é possível entender por que uma decisão foi tomada, quais eventos contribuíram e qual estado estava ativo no momento. Metadados (origem do evento, timestamps, ids de deduplicação, status de sessão, contadores e TTLs) garantem que essa memória seja operacionalmente útil — não apenas “histórica”.</p>

           <p>Em paralelo, o conteúdo que precisa ser recuperado por relevância semântica é indexado em base vetorial. A lógica é simples: quando a entrada chega como linguagem natural, a consulta não pode depender apenas de palavra-chave ou taxonomia rígida. Ao representar textos como embeddings e usar similaridade vetorial, o PULSE consegue executar Recuperação de Conhecimento com precisão matemática: buscar o que é mais próximo em significado, não apenas o que contém os mesmos termos. Isso reduz erro por variação de linguagem, sinônimos e ruído típico de mensagens curtas.</p>

           <p>Esse desenho preserva uma fronteira importante: o banco operacional sustenta a execução e a consistência do sistema; a base vetorial sustenta a recuperação contextual quando o dado relevante está distribuído em conteúdos e descrições. Assim, o pipeline consegue operar com disciplina de estado e, ao mesmo tempo, consultar conhecimento de forma objetiva quando precisa enriquecer a interpretação e a tomada de decisão.</p>
        `,
        KERNELS: `
           <p>No PULSE, “workflow” não descreve uma sequência de passos genéricos nem uma automação linear. Ele é tratado como um Kernel de Execução: uma unidade de processamento com escopo bem definido, contrato explícito de entrada e saída e responsabilidade única sobre um trecho do ciclo de vida do dado. Isso muda o modelo mental do sistema: em vez de um “robô” fazendo tarefas, você tem núcleos que reagem a eventos, processam sinais e produzem novos artefatos de estado e telemetria, sem exigir acoplamento direto entre partes do produto.</p>

           <p>Esses kernels existem para materializar regras de negócio como código executável sob governança. Quando um evento chega (mensagem, comentário, áudio, comando, transição interna), o kernel correspondente aplica critérios operacionais — por exemplo, decidir se há evidência suficiente para atuar, se a sessão permite ação automática naquele momento, se aquela entrada já foi processada antes (deduplicação), e qual janela de oportunidade está vigente (TTL). O resultado não é “responder ou não responder” apenas; é atualizar o estado operacional de forma consistente e registrar telemetria que explique o que foi observado e por quê.</p>

           <p>Além do controle de execução, os kernels carregam a parte analítica: extração de sinais, consolidação de contexto, e transformação de entradas não estruturadas em estruturas operacionais que o resto do sistema consegue consumir. A normalização semântica entra aqui como disciplina de engenharia: mensagens fragmentadas e heterogêneas precisam virar dados comparáveis, com taxonomia estável e campos que suportem segmentação e diagnóstico. Sem isso, você volta ao ruído: cada mensagem vira exceção e o pipeline degrada para manual.</p>

           <p>Por fim, o ponto mais importante é a previsibilidade em produção. Como cada kernel é isolado e orientado por eventos + estado, falhas e variações ficam contidas no escopo do kernel, e não derrubam o sistema como um todo. Isso permite evolução incremental: adicionar kernels, alterar regras ou introduzir novos tipos de evento sem reescrever o núcleo. Na prática, é essa disciplina que sustenta escala e ROI: o sistema cresce por anexação de capacidades sob contrato, não por acúmulo de automações frágeis.</p>
        `
    };

    return (
        <section id="architecture" className="py-14 md:py-22 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] leading-tight text-gradient font-bold">
                        Arquitetura Orientada a Eventos
                    </h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Contratos, roteamento e previsibilidade de execução</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        O PULSE é implementado como uma plataforma distribuída sob o paradigma de{" "}
                        <strong className="text-white font-semibold">Event-Driven Architecture (EDA)</strong>. O sistema opera a partir de um fluxo contínuo de eventos — originados por webhooks, agendamentos e transições internas — onde cada evento representa uma mudança observável no ambiente operacional e passa a ser a unidade de disparo do processamento. Isso substitui rotinas lineares por um modelo de execução orientado a sinais: o trabalho acontece quando há evidência, não por varredura ou intervenção manual.
                    </p>

                    <p className="text-lg text-gray-400 leading-relaxed text-justify mt-6 hyphen-limit !tracking-tight [text-wrap:pretty]">
                        A execução é organizada em{" "}
                        <strong className="text-white font-semibold">Kernels de Execução</strong> (workflows) com responsabilidade estritamente delimitada e contratos claros de entrada/saída. Em vez de dependências diretas entre áreas do sistema, os kernels se conectam indiretamente via eventos e estado sob governança, permitindo evolução independente, isolamento de falhas e previsibilidade operacional. Na prática, isso viabiliza extensões (novos kernels, novos tipos de evento) sem reescrever o núcleo nem introduzir acoplamento entre domínios.
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="glass-card p-6 border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full group">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Ingestão e Roteamento de Eventos
                                </h4>
                            </div>
                            <div className="text-sm text-gray-400 leading-relaxed text-justify line-clamp-9 hyphen-limit-always tracking-tight [text-wrap:pretty]" dangerouslySetInnerHTML={{ __html: VISION_CONTENT.INGESTION }} />
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Ingestão e Roteamento de Eventos", VISION_CONTENT.INGESTION, (
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                                        <Layers className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-blue-500 transition-colors border-b border-transparent hover:border-blue-500 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full group">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Governança de Estado e Sessão Operacional
                                </h4>
                            </div>
                            <div className="text-sm text-gray-400 leading-relaxed text-justify line-clamp-9 hyphen-limit-always tracking-tight [text-wrap:pretty]" dangerouslySetInnerHTML={{ __html: VISION_CONTENT.STATE }} />
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Governança de Estado e Sessão Operacional", VISION_CONTENT.STATE, (
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500 shrink-0">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-green-500 transition-colors border-b border-transparent hover:border-green-500 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full group">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <Database className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Persistência e Base de Conhecimento
                                </h4>
                            </div>
                            <div className="text-sm text-gray-400 leading-relaxed text-justify line-clamp-9 hyphen-limit-always tracking-tight [text-wrap:pretty]" dangerouslySetInnerHTML={{ __html: VISION_CONTENT.DATA }} />
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Persistência e Base de Conhecimento", VISION_CONTENT.DATA, (
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                                        <Database className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-purple-500 transition-colors border-b border-transparent hover:border-purple-500 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full group">
                        <div className="flex-1 space-y-4">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 group-hover:scale-110 transition-transform">
                                    <Cpu className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Kernels de Execução (Workflows)
                                </h4>
                            </div>
                            <div className="text-sm text-gray-400 leading-relaxed text-justify line-clamp-9 hyphen-limit-always tracking-tight [text-wrap:pretty]" dangerouslySetInnerHTML={{ __html: VISION_CONTENT.KERNELS }} />
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Kernels de Execução (Workflows)", VISION_CONTENT.KERNELS, (
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                                        <Cpu className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-amber-500 transition-colors border-b border-transparent hover:border-amber-500 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <KernelModal
                isOpen={!!selectedFeature}
                onClose={() => setSelectedFeature(null)}
                title={selectedFeature?.title || ""}
                content={selectedFeature?.content || ""}
                titleClassName="text-base md:text-xl font-bold text-white tracking-tight"
                icon={selectedFeature?.icon}
            />
        </section>
    );
};

export default EventArchitecture;
