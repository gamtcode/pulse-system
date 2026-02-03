import React from 'react';
import { Shield, Plug, Activity, BarChart3 } from 'lucide-react';
import KernelModal from './KernelModal';

const FrontendEngineering: React.FC = () => {
    const [selectedPrinciple, setSelectedPrinciple] = React.useState<{ title: string; content: string; icon: React.ReactNode } | null>(null);

    const handleOpenModal = (title: string, content: string, icon: React.ReactNode) => {
        setSelectedPrinciple({ title, content, icon });
    };

    const PRINCIPLES_CONTENT = {
        FAIL_SAFE: `
            <p>A renderização do painel é desenhada com caminho crítico protegido: ela não depende de SDKs externos, nem de “handshakes” de inicialização para o usuário conseguir operar. O que é essencial para a operação entra primeiro e permanece disponível com modelos de dados com defaults coerentes, guardrails e validações de runtime nas entradas críticas, carregamento progressivo (UI first, enriquecimento depois) e estados de falha explícitos e tratáveis (sem exceções silenciosas). Isso define a fronteira: o núcleo funcional do painel não fica condicionado à disponibilidade, tempo de resposta ou consistência de integrações periféricas.</p>

            <p>A partir dessa base, a plataforma assume degradação previsível, com impacto local. Falhas não são tratadas como eventos raros; são tratadas como estados esperados. Por isso, quando um módulo não consegue carregar ou inicializar, esse módulo é isolado e o restante do painel permanece funcional. Em vez de colapsar a UI, o usuário recebe um estado operacional alternativo — placeholder, modo somente leitura, desativação controlada ou fallback de conteúdo. O objetivo é impedir propagação: nada de “tela branca”, nada de cascata de erros de inicialização, nada de UI inteira indisponível por causa de uma integração periférica.</p>

            <p>Essa resiliência é sustentada por fallbacks determinísticos (sem comportamento imprevisível). O mecanismo não é “tentar de novo até funcionar”; é substituir o componente falho por um comportamento definido. Na prática, defaults garantem que flags e configs assumam valores padrão documentados; No-Op adapters tornam integrações “silenciosas” sem alterar domínio; timeouts e fronteiras de erro (Error Boundaries) evitam que falhas e promessas pendentes colapsem a experiência; e lazy loading e boundaries asseguram que módulos não críticos sejam carregados sob demanda e contidos quando algo falha. O resultado é previsibilidade: a aplicação não entra em estados intermediários opacos nem depende de sorte em tempo de execução.</p>

            <p>Quando uma integração falha, existe observabilidade do erro sem interromper operação. O painel não “engole” o problema: ele captura erro com contexto (ambiente, versão, feature, rota), registra ocorrência e causa provável (por exemplo: config ausente, SDK indisponível, timeout) e mantém a experiência do usuário estável enquanto o time técnico enxerga o incidente. Isso reduz o custo de investigação e evita “problemas fantasmas” que só aparecem como reclamação do usuário sem trilha técnica.</p>

            <p>O resultado técnico e econômico é direto: a disponibilidade do painel aumenta porque o produto não fica refém de vendors externos; o tempo de diagnóstico cai porque falhas são explicitadas e isoladas por módulo; o custo de manutenção reduz porque integrações podem ser alteradas sem reescrever o domínio; e a operação é previsível, já que o usuário perde um recurso periférico, não o sistema.</p>
        `,
        ADAPTERS: `
            <p>Quando SDKs externos atravessam diretamente o domínio do produto, o sistema passa a herdar comportamento, limites e falhas do fornecedor. Isso aparece de forma objetiva na engenharia: testes ficam frágeis por dependerem de runtimes complexos; mudanças de fornecedor deixam de ser uma troca localizada e viram refatoração estrutural; e incidentes externos ganham caminho direto para degradar a operação do painel. No PULSE, esse risco é tratado como um problema de arquitetura, não como “cuidado do time”: integrações são mantidas fora do domínio por uma fronteira explícita.</p>

            <p>Essa fronteira se baseia em contratos tipados que descrevem capacidades do produto, não implementações de vendor. O produto define “o que precisa” (por exemplo: resolução de flags, captura de erros com contexto, emissão controlada de eventos de infraestrutura), e essas capacidades permanecem estáveis mesmo quando a implementação muda. Assim, a UI, o estado e as regras de operação não carregam dependências semânticas de SDKs externos — apenas dependem de contratos internos previsíveis, com comportamento definido.</p>

            <p>A camada de integração (adapter) é a única autorizada a importar e operar o SDK real. Ela traduz o contrato interno para a API do fornecedor e encapsula as peculiaridades inevitáveis: inicialização, validação de configuração, tratamento de falhas de carga e limites operacionais. Em contrapartida, ela não carrega regra de negócio: é infraestrutura. Isso impede que detalhes de LaunchDarkly ou Sentry virem parte do modelo mental do produto e elimina “acoplamento por conveniência” na base de código.</p>

            <p>O acoplamento também não acontece no wiring. A seleção de implementação é feita por pontos únicos de composição, orientados por ambiente e configuração, com pré-condições mínimas verificadas antes de ativar integrações reais. Se o fornecedor não estiver disponível, estiver ausente ou estiver mal configurado, o sistema não entra em estado indefinido: ele alterna para um modo de execução seguro, consistente e previsível. Isso permite que o mesmo produto rode em desenvolvimento, homologação e produção sem espalhar condicionais pelo código — e sem “metade da UI” depender de uma integração inexistente.</p>

            <p>Quando a integração não pode operar, entra um fallback determinístico: uma implementação nula que cumpre o contrato, não lança exceções, não bloqueia renderização e não introduz efeitos colaterais. O objetivo não é “desligar a plataforma”, e sim transformar falhas externas em ausência controlada de um serviço periférico. Em termos práticos: a operação do painel permanece íntegra; o que muda é apenas a disponibilidade de capacidades complementares (por exemplo, rastreamento externo), com impacto local e sem propagação sistêmica.</p>

            <p>O resultado direto é técnico e econômico. Testes ficam determinísticos porque não dependem do runtime real de vendors; manutenção fica localizada porque mudanças externas tendem a se concentrar na borda de integração; e a disponibilidade aumenta porque falhas de terceiros deixam de derrubar o núcleo operacional. Em produção, isso reduz incidentes em cascata e diminui MTTR, porque o sistema falha com previsibilidade e expõe estados tratáveis, em vez de falhar com comportamento emergente.</p>
        `,
        TELEMETRY: `
            <p>No PULSE System, feature flags e observabilidade de erro não são tratadas como “dependências do produto”, e sim como infraestrutura controlada. Isso significa que a aplicação é desenhada para operar com previsibilidade em três estados bem definidos — online, offline e test — sem que a disponibilidade de vendors ou SDKs altere o fato básico de que o painel precisa renderizar, responder e permanecer utilizável. O objetivo é duplo: preservar a operação do usuário quando integrações externas falham ou estão ausentes, e garantir que ambientes de desenvolvimento e testes não herdem comportamento não determinístico (rede, inicialização assíncrona, variações temporais ou limites de quota).</p>

            <p>Essa disciplina começa com uma separação explícita entre produto e infraestrutura. O domínio e a UI consomem capacidades por meio de contratos tipados — em especial, resolução de flags e captura de diagnósticos de erro com contexto — enquanto as implementações concretas que falam com plataformas externas ficam fora do domínio, isoladas na camada de infraestrutura. Na prática, nenhuma decisão de negócio depende de “o SDK estar vivo” para a aplicação existir; integrações são tratadas como serviços periféricos substituíveis e não como pré-condições para o funcionamento do painel.</p>

            <p>Dentro desse desenho, feature flags são tratadas como mecanismo de controle, não como mecanismo de acoplamento. Elas funcionam como parâmetros de governança de rollout e segmentação, mas com disciplina operacional: flags possuem defaults documentados, o estado inicial é seguro para evitar “flash” de feature, variações são consumidas por contrato sem vazar semântica do fornecedor, e falhas no provider não geram exceções nem bloqueiam a renderização. O resultado é que flags não viram ponto único de falha e não introduzem comportamento indefinido em runtime; elas modulam capacidades de forma controlada, sem fragilizar o caminho crítico.</p>

            <p>A observabilidade segue o mesmo princípio: ela existe para capturar contexto e diagnosticar falhas, não para virar dependência do fluxo de UI. A captura de erros é desenhada para ser não bloqueante e tolerante a falhas — perda do canal externo não interrompe a operação do usuário. Quando disponível, o sistema reporta exceções com contexto operacional (ambiente, versão, rota/módulo e informações de usuário quando aplicável); quando o canal externo falha por rede, inicialização ou configuração ausente, a aplicação mantém a experiência estável e aplica o comportamento seguro esperado via fallback No-Op, preservando o núcleo funcional do painel.</p>

            <p>Esse mesmo desenho habilita um modo offline real, com degradação silenciosa. Em ambientes sem credenciais — desenvolvimento local, previews e execução isolada — o PULSE opera sem fricção: flags resolvem para defaults, e o reporte externo de diagnósticos de erro se comporta como No-Op, sem afetar renderização nem estado do produto. Isso reduz “debug por integração”, evita dependência do stack externo e torna o ciclo de desenvolvimento mais previsível.</p>

            <p>Em testes, o sistema se comporta como um produto verificável: zero dependência de rede, zero SDK real e resultados reprodutíveis. Providers são substituídos por mocks ou implementações locais, flags são injetadas por configuração de teste, e não existe variação temporal externa causada por timeouts, race conditions ou inicializações assíncronas de SDK. O efeito é direto: o que se testa é a lógica do produto, não a estabilidade de um fornecedor.</p>

            <p>O resultado técnico e econômico desse arranjo é mensurável. Reduz incidentes causados por terceiros e aumenta a disponibilidade do painel, diminui flakiness de testes e torna a CI previsível — com menor custo de manutenção —, habilita rollouts mais controlados com menos risco operacional e retrabalho, e mantém diagnósticos consistentes que reduzem MTTR e aumentam a confiabilidade do produto como sistema operável em produção.</p>
        `,
        VISUALIZATION: `
            <p>A UI do PULSE é majoritariamente declarativa, mas visualização em canvas é uma exceção estrutural: Chart.js opera como um runtime imperativo, com estado interno, referências diretas ao canvas e handlers próprios. Em React, isso cria um ponto clássico de instabilidade quando tratado como “um componente qualquer”: instâncias duplicadas, listeners órfãos, resize inconsistente e degradação progressiva em sessões longas. Por isso, no PULSE, gráficos são tratados como recursos gerenciados, com um protocolo explícito de ciclo de vida.</p>

            <p>Esse protocolo começa pela validação rigorosa de prontidão antes de qualquer renderização. O componente checa condições concretas (por exemplo, o canvas estar conectado ao DOM, o contexto estar disponível, e dimensões mínimas plausíveis) para evitar inicializações em estados intermediários — como montagem incompleta, layout ainda não calculado ou canvas com width/height inválidos. Isso reduz falhas intermitentes e previne que o runtime do Chart.js seja iniciado em um cenário onde ele tende a “travar” em estados inconsistentes.</p>

            <p>Quando data ou options mudam, o PULSE assume uma postura deliberadamente determinística: em vez de tentar “mutar” o estado interno do Chart.js e correr risco de acumular efeitos colaterais, o componente faz a troca de instâncias de forma atômica. A instância anterior é explicitamente destruída (destroy()), liberando recursos e removendo hooks internos; em seguida, a nova instância é criada sobre um contexto validado. Essa estratégia prioriza integridade e previsibilidade — evita sobreposição de eventos, elimina vazamentos de memória e reduz a probabilidade de bugs que só aparecem depois de tempo de uso.</p>

            <p>Resize é tratado como mecanismo de estabilidade, não como detalhe visual. O PULSE opta por desabilitar a responsividade nativa do Chart.js e assumir controle do redimensionamento, usando ResizeObserver com agendamento via requestAnimationFrame para coordenar layout do React e dimensões efetivas do canvas. O efeito é reduzir flicker, evitar loops de resize entre container e canvas e impedir que listeners fiquem ativos após o componente sair de cena — um dos principais vetores de degradação em dashboards com navegação e troca de módulos.</p>

            <p>Além disso, estados incompletos ou dados inconsistentes são absorvidos de forma determinística. O módulo não presume que o store já esteja pronto nem que séries estarão sempre bem formadas; ele protege contra null/undefined, aplica placeholders quando não há dados e evita que condições transitórias derrubem a renderização. Isso mantém o painel operável mesmo quando o ecossistema ainda está carregando, ou quando a origem de dados sofre variações.</p>

            <p>O resultado é técnico e econômico: sessões longas sem degradação progressiva, menor incidência de bugs intermitentes difíceis de reproduzir, e uma integração com biblioteca imperativa que se comporta como módulo controlado — previsível para o usuário e tratável para engenharia. Em termos de portfólio, o recado é claro e verificável no código: a visualização não é “efeito colateral do React”, é um subsistema com governança explícita de ciclo de vida e estabilidade operacional.</p>
        `
    };

    return (
        <section id="engineering" className="py-14 md:py-22 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] font-bold mb-6 text-gradient">Engenharia de UI: Execução Confiável</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Interface de Observabilidade e Diagnóstico Operacional</h3>
                    <div className="space-y-6 text-lg text-gray-400 leading-relaxed text-justify hyphen-limit !tracking-tight [text-wrap:pretty]">
                        <p>
                            O frontend do PULSE é uma Single Page Application orientada a consumo de telemetria, diagnóstico e leitura operacional do sistema, priorizando previsibilidade de renderização, isolamento de módulos e estabilidade em sessões longas. A UI funciona como superfície de observação e decisão: consolida estados de execução, sinais de qualidade do dado e indicadores de performance de conversão sem depender de integrações externas para manter o núcleo do painel utilizável. A navegação por módulos e hubs de telemetria opera com carregamento incremental e fronteiras bem definidas, de modo que cada área do painel mantenha comportamento controlado mesmo sob latência, ausência de credenciais, falhas de provider ou inconsistências transitórias nos dados.
                        </p>
                        <p>
                            O painel foi projetado para operar com dados volumosos preservando tempo de resposta e consumo de recursos do cliente, com uma estratégia explícita: a carga analítica pesada não é empurrada para o navegador. Normalização, agregações, consolidações e transformações que ampliariam custo de CPU/memória no client são deslocadas para camadas de backend, onde o custo é previsível e observável e onde é possível aplicar cache, versionamento de payload, limites e contratos de entrega. No frontend, o tratamento de dados é intencionalmente restrito ao necessário para exibição e interação, evitando picos de processamento e travamentos e mantendo a UI responsiva em máquinas comuns — uma decisão de engenharia de risco e custo para que o painel se comporte como infraestrutura: previsível, auditável e resiliente a variações de volume, tempo e qualidade do dado.
                        </p>
                    </div>
                </div>


                <div className="grid lg:grid-cols-2 gap-6">

                    <div className="glass-card p-6 bg-white/[0.02] border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 w-full">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Operação Contínua com Fallbacks
                                </h4>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit tracking-tight [text-wrap:pretty] line-clamp-[9] md:line-clamp-[7]">
                                No PULSE System, a UI é tratada como um sistema de operação contínua, não como uma vitrine acoplada a provedores externos, proporcionando resiliência operacional. O princípio central é simples: o painel deve continuar renderizando e operando o núcleo do produto mesmo quando integrações falham. Isso exige separar explicitamente caminho crítico de renderização (UI + estado mínimo + dados essenciais) de dependências não determinísticas (SDKs, feature flags, telemetria, analytics, experimentos). Na prática, falhas externas degradam módulos periféricos, não a capacidade do painel de operar.
                            </p>
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Operação Contínua com Fallbacks", PRINCIPLES_CONTENT.FAIL_SAFE, (
                                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-blue-400 transition-colors border-b border-transparent hover:border-blue-400 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 bg-white/[0.02] border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 w-full">
                                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                                    <Plug className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Fronteira de Integrações por Adapters
                                </h4>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit tracking-tight [text-wrap:pretty] line-clamp-[9] md:line-clamp-[7]">
                                O PULSE System trata integrações externas como infraestrutura substituível, não como dependência estrutural do produto. A decisão é arquitetural: SDKs não entram no domínio. O domínio não importa SDK, não conhece modelos do vendor, não depende de APIs externas para existir. Ele depende apenas de contratos estáveis que descrevem o que o produto precisa — e nada além disso. Isso preserva a autonomia do produto e reduz o custo real de mudança quando um fornecedor falha, muda regras ou precisa ser substituído. Na borda, adapters traduzem contratos internos para o vendor; o domínio permanece invariável.
                            </p>
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Fronteira de Integrações por Adapters", PRINCIPLES_CONTENT.ADAPTERS, (
                                    <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 shrink-0">
                                        <Plug className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-green-400 transition-colors border-b border-transparent hover:border-green-400 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 bg-white/[0.02] border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 w-full">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                    <Activity className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Telemetria e Flags fora do Caminho Crítico
                                </h4>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit tracking-tight [text-wrap:pretty] line-clamp-[9] md:line-clamp-[7]">
                                Observabilidade (erros) e feature flags operam fora do caminho crítico da UI. O PULSE trata essas capacidades como infraestrutura substituível: contratos tipados, wiring por ambiente, modo offline e execução determinística em testes. Quando o provider externo não está disponível ou a configuração é inválida, o sistema aplica defaults e No-Op sem alterar o comportamento do domínio nem degradar o painel. O resultado é rastreabilidade de incidentes e contexto operacional de forma contínua e governável, sem acoplamento e sem dependência de disponibilidade de terceiros.
                            </p>
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Telemetria e Flags fora do Caminho Crítico", PRINCIPLES_CONTENT.TELEMETRY, (
                                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
                                        <Activity className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>


                    <div className="glass-card p-6 bg-white/[0.02] border-white/5 hover:bg-white/5 transition-colors flex flex-col items-start h-full">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-4 border-b border-white/10 pb-4 w-full">
                                <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                    <BarChart3 className="w-5 h-5" />
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2">
                                    Canvas Imperativo com Ciclo de Vida Controlado
                                </h4>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed text-justify hyphen-limit tracking-tight [text-wrap:pretty] line-clamp-[9] md:line-clamp-[7]">
                                Bibliotecas imperativas (Chart.js) são integradas como componentes de infraestrutura visual: criação única, atualização incremental e destruição garantida. O PULSE controla resize e re-render com disciplina para evitar vazamentos, instabilidade e degradação de performance em sessões longas. Além disso, o ciclo de vida do gráfico é encapsulado atrás de uma interface única de renderização, garantindo que mudanças de dados, tema ou layout não gerem recriações desnecessárias nem concorrência de instâncias no mesmo canvas.
                            </p>
                        </div>
                        <div className="mt-6 w-full pt-4 border-t border-white/10">
                            <button
                                onClick={() => handleOpenModal("Canvas Imperativo com Ciclo de Vida Controlado", PRINCIPLES_CONTENT.VISUALIZATION, (
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                                        <BarChart3 className="w-5 h-5" />
                                    </div>
                                ))}
                                className="text-xs font-mono uppercase tracking-wider text-gray-500 hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5"
                            >
                                Saiba mais
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <KernelModal
                isOpen={!!selectedPrinciple}
                onClose={() => setSelectedPrinciple(null)}
                title={selectedPrinciple?.title || ""}
                content={selectedPrinciple?.content || ""}
                titleClassName="text-base md:text-xl font-bold text-white tracking-tight"
                icon={selectedPrinciple?.icon}
            />
        </section >
    );
};

export default FrontendEngineering;

