import { KernelData } from '@/types';

export const kernelsData: KernelData[] = [
    {
        id: 'A.01',
        title: 'Categorized Specific Focus',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de enriquecimento e normalização de dados para o CRM operacional. Ele transforma entradas brutas de foco de interesse, coletadas em interações com usuários, em metadados estruturados aderentes a uma taxonomia fixa. O objetivo é eliminar variação semântica, reduzir ambiguidade e garantir que segmentação, análise e automação a jusante consumam categorias estáveis e auditáveis, em vez de texto livre.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Ingestão programada: execução em janelas recorrentes para processar backlog acumulado, mantendo cadência previsível e distribuindo carga computacional ao longo do dia.</li>
                        <li>Seleção determinística de pendências: consulta no repositório operacional com critérios de “entrada presente” e “saída ausente”, garantindo idempotência (processa apenas o que ainda não foi categorizado).</li>
                        <li>Processamento em lote com isolamento por item: iteração controlada sobre registros para suportar volume sem extrapolar limites de execução do orquestrador ou de provedores externos. Falhas em itens não bloqueiam o lote inteiro.</li>
                        <li>Classificação semântica com taxonomia fechada: aplicação de um classificador orientado por lista mestra de categorias, incluindo:
                            <ul class="list-disc list-inside ml-6 mt-2 mb-2 space-y-1 text-gray-500">
                                <li>mapeamento de sinônimos e variações linguísticas para um vocabulário único;</li>
                                <li>multi-label controlado quando a entrada contém múltiplos focos;</li>
                                <li>fallback explícito para casos fora de escopo ou ininteligíveis.</li>
                            </ul>
                        </li>
                        <li>Sanitização de saída antes de persistir: validação e normalização do payload retornado pelo classificador, prevenindo persistência de valores inválidos (ex.: strings nulas, vazias ou formatos inconsistentes).</li>
                        <li>Persistência atômica e rastreável: recomposição do identificador do registro com o resultado classificado e atualização do CRM em uma etapa final, fechando o ciclo de forma íntegra.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração: execução agendada, iteração em batches e composição de payloads com regras determinísticas.</li>
                        <li>Persistência operacional (CRM): leitura filtrada de registros pendentes e atualização do campo de classificação estruturada.</li>
                        <li>Classificação semântica: inferência orientada por taxonomia fechada para retorno em formato estrito e consumível por sistemas analíticos e motores de automação.</li>
                        <li>Camada de saneamento: transformação / validação do output antes da escrita, reduzindo risco de corrupção lógica da base.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">A característica central é a taxonomia como contrato: em vez de armazenar texto livre e “interpretar depois”, o sistema converte a entrada em categorias com vocabulário controlado e regras de saída estritas. Isso reduz entropia do dado ao longo do tempo, aumenta consistência entre ciclos de execução e viabiliza consumo direto por painéis analíticos e regras operacionais sem uma etapa adicional de limpeza. Em termos de operação, o desenho combina idempotência, processamento em lote e sanitização para manter previsibilidade: gatilho → execução → estado atualizado → efeito persistido.</p>
                </section>
            </div>
        `
    },
    {
        id: 'A.02',
        title: 'Categorized Triggers',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de inteligência de qualificação e intenção comercial. Sua responsabilidade é interpretar motivações explícitas expressas em linguagem natural e convertê-las em gatilhos estruturados (categorias de desejo, objetivo ou necessidade), prontos para serem usados em segmentação, priorização e automações de funil. Em vez de depender de leitura humana ou tags livres, o sistema normaliza entradas subjetivas em uma taxonomia controlada, mantendo consistência e rastreabilidade operacional.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Processamento orientado a estado (idempotente): Seleciona apenas registros que possuem sinal bruto disponível e ainda não foram enriquecidos, evitando reprocessamento, desperdício de inferência e variação desnecessária de output.</li>
                        <li>Execução em lote com isolamento de falhas: Processa itens individualmente em uma fila controlada, reduzindo gargalos e permitindo que falhas pontuais não interrompam o restante do ciclo.</li>
                        <li>Classificação semântica por taxonomia fechada: Um agente de IA classifica a motivação do lead em categorias pré-definidas, aplicando regras de mapeamento lógico (sinônimos, termos coloquiais e expressões de mercado) para manter consistência.</li>
                        <li>Suporte a multi-intenção: Quando a mensagem indica mais de um objetivo (ex.: crescimento + monetização), o núcleo retorna múltiplas categorias de forma controlada e padronizada.</li>
                        <li>Sanitização e integridade de saída: O resultado é validado antes de persistir para evitar valores nulos indevidos, strings inválidas e variações de formato que comprometam filtros e automações a jusante.</li>
                        <li>Sincronização atômica de enriquecimento: O output de IA é recombinado com a identidade do registro e persistido de forma consistente, fechando o ciclo de enriquecimento com efeito operacional imediato.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração: Executado em workflows com processamento em lote, merge de contexto e persistência controlada.</li>
                        <li>Persistência operacional: Integra com CRM/DB operacional via API para leitura de pendências e atualização do resultado enriquecido.</li>
                        <li>Inferência e classificação: Utiliza LLM para classificação semântica sob contrato rígido de saída (lista fechada + delimitador padronizado).</li>
                        <li>Transformações e guardrails: Inclui etapa de código para normalização e validação defensiva de payload antes de persistência.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é transformar “texto de intenção” em sinal operacional auditável. Ao combinar taxonomia fechada, regras de mapeamento e suporte a multi-intenção com validação defensiva e idempotência, ele entrega uma saída estável o suficiente para acionar segmentações e réguas sem introduzir ruído ou inconsistência. O resultado é um funil mais governado: intenção estruturada vira critério de priorização, personalização e automação com previsibilidade.</p>
                </section>
            </div>
        `
    },
    {
        id: 'A.03',
        title: 'Update Interest List',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo atua como uma camada de inteligência de segmentação e BI operacional, responsável por transformar “interesses abertos” (texto livre) em macro-temas de negócio consistentes e acionáveis. Ele aplica NLU com regras de priorização para decidir se a classificação deve refletir primeiro o nicho do usuário (quem ele é/qual domínio atua) ou a ação técnica (o que ele quer fazer), evitando segmentações superficiais baseadas em palavra-chave. O resultado é uma taxonomia estável que sustenta roteamento de cadências, leitura de demanda e análise de perfil sem depender de interpretação manual.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Ingestão orientada a estado: processa apenas registros que possuem entrada relevante e ainda não possuem a saída categorizada, mantendo idempotência e eliminando reprocessamento sem valor.</li>
                        <li>Classificação NLU com política de decisão: aplica uma árvore de priorização onde sinais de domínio/ocupação prevalecem sobre sinais de tarefa, reduzindo erro de rotulagem em casos híbridos (ex.: um profissional de um setor executando uma técnica genérica).</li>
                        <li>Detecção de setores sensíveis: reconhece agrupamentos recorrentes de mercado (ex.: finanças e patrimônio) e os consolida em categorias estáveis para evitar fragmentação da base.</li>
                        <li>Multi-label controlado: quando um interesse descreve simultaneamente nicho e ação (ou múltiplas frentes), retorna múltiplas categorias em formato padronizado, preservando capacidade de segmentação sem perder nuance.</li>
                        <li>Normalização e sanitização de saída: converte retornos inválidos em ausência explícita de dado e aplica regras de limpeza para impedir que strings “nulas” ou ruído textual contaminem a persistência.</li>
                        <li>Persistência com atualização atômica: sincroniza o resultado de classificação ao registro original e persiste a saída de forma íntegra, garantindo rastreabilidade entre entrada e efeito.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração e execução: implementado como um kernel do runtime de execução do PULSE, com processamento em lote e tolerância a falhas por item.</li>
                        <li>Persistência operacional: integra com o repositório de CRM operacional via contrato de leitura (consulta filtrada por estado) e contrato de escrita (atualização do registro).</li>
                        <li>Inferência semântica: integra com um provedor de LLM via contrato de classificação com lista mestra fechada, regras de priorização e formato de retorno estrito (string padronizada).</li>
                        <li>Camada de saneamento: aplica lógica determinística de validação/normalização antes da persistência para garantir consistência de tipos e reduzir regressões por variação de output.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é a sensibilidade contextual com governança de taxonomia. Em vez de “taguear por palavras”, ele aplica uma política explícita (nicho > ação quando aplicável), suporta multi-rótulo com formato controlado e protege a base contra outputs inválidos. Isso sustenta segmentação e analytics com menos ruído, reduz retrabalho operacional e melhora a qualidade das decisões automatizadas que dependem desses sinais (roteamento, cadências e leitura de demanda).</p>
                </section>
            </div>
        `
    },
    {
        id: 'A.04',
        title: 'Description Tags Extractor',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de enriquecimento de metadados e taxonomia de conteúdo. Ele analisa descrições textuais de conteúdos (posts, vídeos ou materiais similares) e extrai um “DNA” estruturado em três dimensões — categoria do conteúdo, entidade principal e foco específico — convertendo linguagem livre em dados consistentes e acionáveis. A arquitetura prioriza consistência dinâmica: antes de classificar, o núcleo observa o vocabulário já consolidado na base para evitar deriva taxonômica, fragmentação por sinônimos e crescimento descontrolado de nomes equivalentes.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Seleção de conteúdo pendente (ETL seletivo): identifica itens com descrição disponível, mas sem taxonomia estruturada, evitando reprocessamento desnecessário e mantendo o ciclo idempotente por estado.</li>
                        <li>Alinhamento dinâmico de nomenclatura: recupera, consolida e deduplica a lista de entidades principais já existentes na base e injeta esse contexto na etapa de classificação, favorecendo grafia padronizada e reduzindo variações semânticas equivalentes.</li>
                        <li>Extração estruturada com contrato rígido: aplica um parser de saída estruturada para exigir retorno conforme um schema (campos obrigatórios, tipos definidos e lista fechada de categorias), garantindo previsibilidade de payload e compatibilidade com consumo posterior (dashboards, filtros e automações).</li>
                        <li>Classificação com tolerância a ambiguidade: quando a descrição permite leitura interpretativa (ex.: marketing, copy, contexto implícito), o núcleo opera com maior latitude semântica para capturar nuances — sem abrir mão do contrato estruturado na saída.</li>
                        <li>Acumulação e deduplicação de metadados: ao persistir, combina novos resultados com dados já existentes, preservando histórico e evitando duplicatas (comparação case-insensitive e normalização de espaços), mantendo um formato consistente para consultas e agregações.</li>
                        <li>Persistência auditável por recombinação de contexto: recompõe o resultado extraído com o item original e registra a atualização de forma rastreável (entrada → classificação → efeito persistido), reduzindo risco de inconsistência entre “o que foi lido” e “o que foi gravado”.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow com execução por lote e controle de iteração.</li>
                        <li>LLM para classificação e extração com instruções de sistema orientadas a taxonomia e regras de precedência.</li>
                        <li>Parser estruturado para impor schema e reduzir variância de saída.</li>
                        <li>Persistência operacional para leitura de itens pendentes, consulta de vocabulário existente e escrita dos metadados consolidados.</li>
                        <li>Camada de transformação (código) para deduplicação, normalização e merge determinístico de resultados.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a auto-regulação taxonômica com consistência dinâmica: em vez de “classificar no vazio”, o núcleo ancora a extração em um vocabulário vivo já existente, reduzindo sinônimos redundantes e mantendo a base semanticamente saudável ao longo do tempo. Ao combinar schema rígido na saída com merge deduplicado na persistência, ele entrega metadados confiáveis para analytics e automações posteriores, evitando que a base degrade conforme o volume cresce e o conteúdo se diversifica.</p>
                </section>
            </div>
        `
    },
    {
        id: 'A.05',
        title: 'Pains and Triggers Extractor',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo atua como uma camada de perfilagem comportamental e inteligência de CRM, transformando sinais não estruturados (histórico, objetivos e interesses declarados) em tags acionáveis de “barreiras” e “motivações”. O foco não é apenas extrair palavras, mas produzir dados consistentes, específicos e utilizáveis para personalização de comunicação e leitura de tendências no Command Center. A execução prioriza qualidade semântica e higiene de base, evitando poluição por termos genéricos.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Síntese de contexto multi-fonte: Consolida múltiplas entradas narrativas do usuário (interesses, objetivos e histórico resumido) em uma visão única antes da inferência, reduzindo vieses de leitura por um único campo e aumentando a precisão da classificação.</li>
                        <li>Blindagem semântica anti-genéricos: Aplica regras de especificidade para impedir saídas vagas. Em vez de produzir rótulos abstratos (“falta de tempo”, “dificuldade”, “medo”), força a estrutura “o quê + em relação a quê”, gerando tags com valor operacional (ex.: barreira associada a uma ação, canal, ferramenta ou etapa do funil). Quando não há contexto suficiente para qualificar, retorna nulo de forma deliberada.</li>
                        <li>Extração priorizada e com limite de ruído: Identifica um conjunto pequeno e relevante de dores (barreiras) e gatilhos (desejos), restringindo a quantidade para manter sinal alto e reduzir entropia analítica. O resultado é otimizado para consumo em gráficos e filtros sem sobrecarregar o sistema com long tail irrelevante.</li>
                        <li>Saída estruturada e auditável: Utiliza parsing estruturado para garantir um payload determinístico (com chaves fixas e tipos validados). Isso reduz ambiguidades de interpretação e permite rastrear erros de classificação por contrato de saída (inclusive quando o retorno é null).</li>
                        <li>Sanitização de retorno e integridade de persistência: Normaliza respostas inválidas (incluindo representações textuais de valores nulos) antes de persistir, prevenindo corrupção de campos e mantendo consistência de tipos ao longo do ciclo de vida do dado.</li>
                        <li>Processamento em lote resiliente: Orquestra a execução em batches para escalar com segurança, isolando falhas por item, aplicando retentativas controladas em erros transitórios e mantendo previsibilidade de throughput em bases grandes.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração: n8n, com pipeline em batches, merge por posição e retentativas controladas.</li>
                        <li>IA (extração semântica): LLM dedicado a inferência curta e categorização com regras de especificidade.</li>
                        <li>Persistência operacional: CRM operacional via API, com atualização incremental apenas dos registros elegíveis.</li>
                        <li>Lógica complementar: scripts Node.js para sanitização e normalização de payload.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a estratégia de “extração anti-ruído com fallback nulo”: o núcleo prefere não gravar a gravar dados genéricos. Isso cria um banco limpo e confiável, onde cada tag tem densidade semântica suficiente para sustentar automações, segmentação e analytics sem regressão. Em termos de engenharia, o ganho está na combinação de contratos estruturados + regras de especificidade + higiene de persistência, mantendo rastreabilidade do ciclo entrada → inferência → validação → estado persistido.</p>
                </section>
            </div>
        `
    },
    {
        id: 'B.01',
        title: 'Janela Desactive',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de governança de estado e continuidade operacional. Sua responsabilidade é administrar o ciclo de vida de sessões ativas (“janelas de oportunidade”) no CRM, aplicando expiração por inatividade (TTL) para que a operação não execute ações fora de contexto. Ao encerrar automaticamente estados que já deveriam ter expirado, o sistema preserva a coerência do pipeline e reduz colisões entre réguas de automação que dependem de “sessão ativa” como pré-condição. Cada núcleo encapsula uma responsabilidade operacional (roteamento, NLU, persistência, TTL, vetorização, oferta). A composição mantém rastreabilidade: gatilho → execução → estado → efeito persistido.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Expiração de sessão por inatividade (TTL lógico): identifica registros marcados como sessão ativa e aplica a regra de expiração com base no tempo desde a última atividade relevante, encerrando a janela quando o contato está fora do intervalo válido.</li>
                        <li>Limpeza preventiva de estado (“garbage collection” de flags): executa uma rotina de manutenção para evitar que sessões permaneçam abertas indefinidamente por falhas de canal, ausência de resposta ou interrupções operacionais.</li>
                        <li>Reset atômico e auditável: realiza atualização consistente do estado do registro, encerrando a sessão de forma determinística e evitando estados intermediários que gerariam comportamento ambíguo para os próximos núcleos.</li>
                        <li>Prevenção de ações fora de timing: ao encerrar janelas expiradas, impede que automações posteriores tratem um contato como “ativo” quando o contexto já não é válido, reduzindo ruído e retrabalho operacional.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de execução: rotina agendada e determinística no backend, com transições de estado controladas.</li>
                        <li>Persistência operacional: consulta e atualização em repositório operacional (CRM), usando filtros de estado + critérios temporais como contrato de seleção.</li>
                        <li>Cálculo temporal: manipulação de timestamps para avaliação de expiração e aplicação de TTL de sessão.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está na previsibilidade de cadência: o sistema não depende de “boa vontade” do canal para encerrar contextos. Em vez de acumular sessões abertas que geram colisões e decisões erráticas, este núcleo atua como um mecanismo de soft reset do pipeline — mantendo a base em um estado consistente, reduzindo reentradas indevidas e preservando a disciplina operacional em escala.</p>
                </section>
            </div>
        `
    },
    {
        id: 'B.02',
        title: 'Row Embedding Engine',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de infraestrutura de conhecimento do PULSE System. Ele converte descrições textuais de conteúdos em representações vetoriais (embeddings) para habilitar recuperação por similaridade semântica — ou seja, a busca passa a responder por proximidade matemática de significado, e não por coincidência literal de palavras. O objetivo é tornar o acervo consultável com alta precisão mesmo quando a consulta é vaga, incompleta ou formulada com termos não técnicos.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Indexação incremental por estado: identifica apenas registros ainda não vetorizados e prioriza o processamento do “delta”, reduzindo custo e evitando reprocessamentos desnecessários.</li>
                        <li>Normalização determinística de texto: aplica um pipeline de sanitização e padronização (ex.: uniformização de caixa, remoção de variações ortográficas relevantes para busca) para reduzir ruído e aumentar consistência entre conteúdos semanticamente equivalentes.</li>
                        <li>Geração de embeddings com controle de falhas: solicita a vetorização em lote controlado, com tratamento de instabilidades transitórias e retentativas, preservando continuidade operacional sob variação de rede e limites do provedor.</li>
                        <li>Persistência vetorial auditável: grava o vetor resultante no repositório de conhecimento, garantindo que cada item processado tenha seu estado atualizado de forma rastreável (ingestão → vetorização → persistência).</li>
                        <li>Execução previsível sob volume: organiza o processamento em ciclos e itens unitários para isolar falhas e impedir que um caso inválido interrompa toda a fila.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração: execução em workflow com etapas explícitas de coleta, transformação e persistência.</li>
                        <li>Repositório de conhecimento: banco relacional com suporte a vetores, utilizado como camada de consulta semântica e armazenamento dos embeddings.</li>
                        <li>Provedor de embeddings: serviço de geração vetorial consumido via API, com contrato de request/response e política de retentativa para robustez.</li>
                        <li>Interface de dados: acesso ao repositório via endpoints HTTP (camada REST), garantindo desacoplamento entre execução e persistência.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está na combinação de indexação incremental + normalização determinística + persistência vetorial consistente, formando um pipeline de recuperação de conhecimento com baixo desperdício e alta previsibilidade. Em vez de “fazer busca”, o sistema materializa um índice semântico que aumenta a taxa de acerto quando a consulta não contém as mesmas palavras do conteúdo, mantendo rastreabilidade do ciclo completo: gatilho → execução → estado → efeito persistido.</p>
                </section>
            </div>
        `
    },
    {
        id: 'B.03',
        title: 'Table Embedding',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo atua como um utilitário de backfill vetorial em lote para garantir que a base de conhecimento esteja integralmente indexada para recuperação semântica. Ele processa grandes volumes de registros de uma só vez, convertendo descrições textuais em embeddings e persistindo vetores no repositório vetorial. A arquitetura prioriza previsibilidade de throughput, controle de vazão e tolerância a falhas, evitando picos de requisições e garantindo que o processamento em massa não degrade a operação. Cada execução encapsula uma responsabilidade operacional (normalização, vetorização e persistência). A composição mantém rastreabilidade: gatilho → execução → estado → efeito persistido, permitindo auditoria do que foi indexado, reindexado ou corrigido ao longo do tempo.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Execução sob demanda para backfill e reindexação: permite reprocessar toda a base quando há mudanças relevantes em critérios de normalização, política de indexação ou estratégia de recuperação.</li>
                        <li>Extração massiva com preservação de integridade: varre a coleção completa de registros para assegurar que nenhum item fique fora do índice vetorial, independentemente do estado anterior.</li>
                        <li>Normalização determinística de texto: aplica padronização (ex.: caixa, acentuação e ruído textual) antes da vetorização para reduzir variação semântica causada por inconsistências de escrita e maximizar estabilidade do índice.</li>
                        <li>Controle de vazão e proteção contra rate limit: organiza o processamento em lote com throttling deliberado e iteração controlada, evitando burst de requisições e mantendo o consumo de APIs externas dentro de limites operacionais.</li>
                        <li>Vetorização com tolerância a falhas: incorpora retry para falhas transitórias e degrada com previsibilidade quando há instabilidade externa, mantendo o progresso do lote sem colapsar a execução.</li>
                        <li>Persistência vetorial auditável: persiste embeddings no repositório vetorial de forma alinhada ao identificador do registro, garantindo que o efeito final seja consistente e verificável (registro → vetor persistido).</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração: execução em pipeline batch com iteração controlada, pontos explícitos de espera e recomposição de payloads entre etapas.</li>
                        <li>Serviço de embeddings: contrato HTTP para geração de vetores a partir de texto normalizado, com comportamento idempotente por item processado.</li>
                        <li>Repositório vetorial (persistência): contrato de atualização por identificador estável, armazenando o vetor serializado em formato compatível com índice vetorial no banco.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está em tratar indexação em massa como capacidade operacional governada, e não como tarefa ad-hoc. Em vez de “rodar tudo e torcer”, o núcleo aplica controle de vazão, normalização determinística e retries para garantir estabilidade em larga escala. O resultado é uma base vetorial consistentemente completa, reduzindo lacunas de recuperação e aumentando a previsibilidade da camada de RAG quando o sistema precisa operar sob volume e variações de qualidade de dados.</p>
                </section>
            </div>
        `
    },
    {
        id: 'B.04',
        title: 'WhatsApp Product Offer Active',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como um mecanismo de governança de janela comercial para mensageria. Sua responsabilidade é encerrar automaticamente o estado de “oferta ativa” quando uma proposta de produto já ultrapassou sua validade operacional. Em vez de permitir que um contato permaneça indefinidamente em um estado de venda antigo, o sistema aplica uma política de expiração e devolve o lead a um estado neutro, preservando a consistência do pipeline e evitando decisões enviesadas por contexto expirado.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Gestão de expiração de oferta: identifica leads com oferta ativa cujo tempo de validade já foi ultrapassado, aplicando uma regra clara de “janela de conversão” para determinar quando o estado deve ser encerrado.</li>
                        <li>Varredura seletiva e idempotente: processa apenas registros elegíveis para expiração (oferta ainda ativa + janela vencida), evitando reprocessamentos e garantindo previsibilidade de execução.</li>
                        <li>Atualização segura em lote: executa o reset de estado de forma iterativa e controlada, mantendo rastreabilidade por registro e reduzindo risco de efeitos colaterais em massa.</li>
                        <li>Normalização do pipeline pós-expiração: ao encerrar a oferta, remove bloqueios operacionais que impediriam o lead de entrar em novas jornadas de qualificação, nutrição ou reengajamento, mantendo o funil reciclável e coerente ao longo do tempo.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração por eventos e regras temporais: o núcleo é executado por gatilhos agendados e opera como rotina de manutenção do estado comercial.</li>
                        <li>Persistência operacional via CRM: a elegibilidade e o encerramento da oferta são avaliados e persistidos na camada operacional, com atualização direta do estado do lead.</li>
                        <li>Sem dependência de LLM: a lógica é determinística e baseada em regras de tempo/estado, adequada para rotinas de governança e compliance do funil.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está na higiene de estado aplicada ao ciclo de vendas: a expiração automática reduz ruído de analytics, evita fadiga de contato e impede que automações futuras operem sobre contexto vencido. Em termos de engenharia, trata “oferta ativa” como um estado com validade (e não como uma anotação permanente), o que melhora previsibilidade, reduz inconsistências e mantém o pipeline pronto para novas decisões sem acoplamento ao passado.</p>
                </section>
            </div>
        `
    },
    {
        id: 'B.05',
        title: 'Set Query Counter to Zero',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como um mecanismo de inicialização e correção de estado para métricas de consumo. Ele garante que registros operacionais não carreguem campos nulos/indefinidos para contadores de uso, evitando inconsistências em políticas que dependem de valores numéricos confiáveis (por exemplo, limites de uso, proteção contra abuso e regras condicionais baseadas em volume). Em vez de “consertar na borda” a cada leitura, o núcleo normaliza o dado na origem, preservando previsibilidade e reduzindo exceções silenciosas.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Execução sob demanda para manutenção de estado: Projetado para ser acionado quando necessário em rotinas de saneamento, correção de base ou reprocessamentos operacionais, sem depender de execução contínua.</li>
                        <li>Seleção de registros inconsistentes com critérios determinísticos: Identifica registros elegíveis combinando “contador ausente” com “registro ativo/válido”, evitando intervenções em linhas inativas ou fora do escopo.</li>
                        <li>Processamento iterativo e resiliente em lote: Percorre a base de forma controlada para suportar volumes altos sem pressão de memória e com comportamento previsível em caso de falhas pontuais.</li>
                        <li>Normalização de valor padrão de forma atômica: Persiste um valor base explícito para o contador, transformando ausência de dado em estado computável e eliminando ambiguidades de interpretação (“nulo” vs “zero”).</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Opera como rotina de manutenção no orquestrador do back-end, utilizando a persistência operacional como fonte de verdade para leitura/seleção e atualização atômica de registros.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a aplicação prática de programação defensiva orientada a dados: o núcleo evita que pipelines posteriores precisem lidar com exceções de tipagem (nulos, NaN, coerções implícitas) e reduz o risco de decisões incorretas em regras dependentes de contagem. Em sistemas que automatizam execução baseada em consumo, esse tipo de normalização é o que mantém as políticas auditáveis e o comportamento do ecossistema estável sob crescimento e mudanças de regra.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.01',
        title: 'Input Router',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de interface e controle de fluxo, atuando como ponto único de entrada para eventos recebidos via webhook de canais de mensageria e plataformas sociais. A função central é classificar e rotear cada evento para o kernel apropriado, com base no tipo de interação (ex.: comentário, mensagem direta, ação de postback ou comando operacional). Em paralelo, mantém governança de estado de atendimento em cache para controlar quando a automação pode atuar, quando deve permanecer silenciosa e como retomar a execução sem perder previsibilidade — inclusive em cenários de human-in-the-loop.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Gateway de webhook e validação de handshake: Centraliza o recebimento de eventos, valida desafios de verificação do provedor e normaliza o payload de entrada para reduzir variação entre tipos de evento e versões de API.</li>
                        <li>Roteamento multi-caminho por tipo de interação: Classifica o evento e direciona para o fluxo correto (interações públicas, ações de interface, mensagens de conversa e comandos operacionais).</li>
                        <li>Governança de estado e controle de atendimento: Mantém, por identidade, o estado de operação (ativo, inativo, pausado) em cache distribuído. Isso habilita pausa controlada, retomada automática e prevenção de sobreposição entre automação e atendimento humano, preservando continuidade e auditabilidade de decisão.</li>
                        <li>Proteções de integridade e anti-reentrada: Aplica filtros para evitar auto-interação (respostas ao próprio sistema), bloqueia reprocessamento de eventos duplicados por chave de mensagem e reduz risco de loops, reentradas e efeitos colaterais em cascata.</li>
                        <li>Enriquecimento mínimo de identidade e contexto: Quando necessário, realiza consultas ao provedor para resolver atributos de identidade e consolidar metadados operacionais, permitindo persistência consistente e rastreável no repositório operacional.</li>
                        <li>Sinalização de falhas e observabilidade operacional: Em condições anômalas (ex.: inconsistência de evento, ausência de referência ou falhas recorrentes de entrega), emite alertas operacionais e registra evidências para diagnóstico e triagem, sem interromper o fluxo global.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Executado como workflow orquestrado por runtime de automação, com contratos HTTP para integração com APIs de mensageria/plataformas sociais.</li>
                        <li>Uso de cache para estado efêmero e deduplicação.</li>
                        <li>Persistência operacional para registro de evidências e contexto.</li>
                        <li>Integra também um canal de alertas operacionais para incidentes e exceções relevantes.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está em tratar a entrada não como “mensagens”, mas como eventos com governança: cada evento é classificado, validado e roteado com controles de estado, proteções contra duplicidade e mecanismos de pausa/retomada. Isso mantém o sistema previsível sob variação de canal, volume e ruído de plataforma, reduzindo falhas de automação e preservando continuidade operacional quando o atendimento humano precisa assumir.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.02',
        title: 'Postback Ways: Engagement & Qualification',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de conversão orientada a intenção, recebendo um sinal externo explícito de interesse (“eu quero”) e transformando esse gatilho em uma jornada de engajamento em múltiplas etapas. A arquitetura aplica progressive profiling: a cada nova interação, o sistema acumula evidências, atualiza o estado do lead e gera um retrato incremental do perfil, preservando rastreabilidade de ponta a ponta (gatilho → execução → estado → efeito persistido). Além disso, o núcleo coordena a entrega de mensagens multimodais (texto/áudio) e prepara o contexto para etapas posteriores do funil, mantendo consistência, repetibilidade e governança sobre o comportamento do fluxo.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração por gatilho externo: Inicia a execução a partir de um evento já qualificado por um roteador de entrada, recebendo contexto essencial do usuário e do conteúdo que originou o interesse. Normaliza o payload e garante contratos mínimos para execução estável.</li>
                        <li>Perfilagem progressiva com suporte de IA: Gera um resumo inicial do perfil com base no único sinal disponível naquele momento, evitando extrapolações e mantendo texto consistente para consumo humano e automações seguintes. Mantém o perfil como um artefato evolutivo.</li>
                        <li>Controle de cadência e experiência conversacional: Orquestra mensagens em sequência (texto e áudio) para sustentar engajamento e melhorar a percepção de fluidez da interação. Introduz atrasos operacionais de forma controlada.</li>
                        <li>Gestão de estado e recorrência de intenção: Atualiza contadores e marcadores de interação para medir recorrência do interesse e orientar decisões futuras. Implementa lógica de variação de comportamento para reduzir repetição em usuários recorrentes.</li>
                        <li>Enriquecimento de identidade e integridade cadastral: Verifica completude mínima de identidade e, quando necessário, realiza enriquecimento via APIs do canal. Aplica bloqueios e atualizações de sessão para evitar condições de corrida.</li>
                        <li>Classificação do contexto do conteúdo (NLU): Executa análise estruturada do conteúdo associado ao gatilho para extrair categoria, objeto e foco. Consolida e deduplica valores para personalização e BI.</li>
                        <li>Encadeamento para a próxima etapa: Ao concluir, repassa o contexto consolidado para o próximo núcleo da sequência, preservando continuidade e garantindo modularidade do pipeline.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Plataforma de automação e orquestração (backend): execução de workflows, controle de estados, deduplicação e encadeamento entre núcleos.</li>
                        <li>LLMs (contrato de IA): síntese de perfil e extração estruturada de atributos do conteúdo (com validação/normalização de saída).</li>
                        <li>Camada de dados (contrato de persistência): repositório operacional de leads e estados (perfil incremental, marcadores de sessão, histórico de intenção e atributos do conteúdo).</li>
                        <li>APIs do canal (contrato de mensageria e identidade): envio de mensagens multimodais e enriquecimento de dados básicos de perfil quando ausentes.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é transformar um simples clique de interesse em telemetria de intenção + perfil incremental acionável. Em vez de apenas responder com um recurso, ele cria uma base de personalização e qualificação orientada a dados: progressive profiling com IA, controlado para evitar alucinação e preservar confiabilidade; gestão de estado robusta, com proteção contra repetição e inconsistências; variação governada de comportamento, reduzindo monotonia para usuários recorrentes; NLU estruturada e deduplicação, garantindo dados limpos e reutilizáveis para automações posteriores.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.03',
        title: 'Postback Ways: Continuity Decisioning & Engagement',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de decisão comportamental e continuidade de jornada. Ele recebe um lead já enriquecido por etapas anteriores e determina, de forma rastreável, qual será o próximo estímulo de interação com base em sinais de contexto e histórico recente. A arquitetura combina micro-segmentação dinâmica com roteamento determinístico, garantindo que a sequência de mensagens não seja linear, não se repita sem necessidade e preserve coerência ao longo do tempo. Cada execução encapsula uma responsabilidade operacional (roteamento, classificação, persistência e consistência de contexto). A composição mantém rastreabilidade: gatilho → execução → estado → efeito persistido.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Roteamento determinístico por estado de jornada: Implementa ramificações de execução para distribuir diferentes estratégias de continuidade (ex.: retomada, aprofundamento, qualificação, estímulo de conversão), variando a abordagem conforme a maturidade do lead no funil e o momento da jornada.</li>
                        <li>Detecção de recorrência e “temperatura” de engajamento: Aplica regras para distinguir entre retorno com baixa continuidade (reentrada) e conversa em progresso (continuidade). Essa decisão altera a prioridade entre: recontextualizar a interação; ou avançar para perguntas de qualificação mais profundas.</li>
                        <li>Priorização entre coleta de dados e progressão de funil: Quando sinais essenciais de perfil estão ausentes, o núcleo tende a reduzir fricção e conduzir a interação para completar informações mínimas antes de apresentar estímulos mais avançados.</li>
                        <li>Entrega orquestrada de mensagens multimodais: Coordena diferentes formatos de resposta (texto e áudio, quando aplicável) para compor uma experiência mais natural e escalável, sem depender de uma única modalidade para manter engajamento.</li>
                        <li>Persistência de contexto conversacional (anti-amnésia): A cada mensagem emitida, registra uma versão canônica do “último estímulo” entregue ao lead. Isso permite que etapas posteriores saibam com precisão o que já foi dito, evitando repetição e garantindo continuidade lógica.</li>
                        <li>Classificação e enriquecimento de intenção e conteúdo: Quando há interação com conteúdo (ex.: clique em material), o núcleo pode acionar um pipeline de NLU para extrair metadados estruturados e anexá-los ao perfil, sustentando segmentação e personalização progressiva.</li>
                        <li>Consistência e deduplicação de atributos acumulativos: Ao atualizar o perfil, consolida valores de forma incremental com controle de duplicidade, evitando inflar tags e mantendo integridade para BI, segmentação e auditoria.</li>
                        <li>Reset seguro de gatilhos e atualização de estado: Após a execução, normaliza sinais de reentrada e atualiza o estado do lead, prevenindo loops acidentais e garantindo que cada interação tenha efeito idempotente sempre que possível.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow (backend): coordena ramificações, controles de execução, composição de contexto e encadeamento entre etapas, preservando determinismo e rastreabilidade.</li>
                        <li>Canal de mensageria (entrega): contrato de envio de mensagens e mídia, com tolerância a falhas transitórias, retentativas controladas e confirmação de entrega quando disponível.</li>
                        <li>Persistência operacional (CRM/DB): leitura e atualização do perfil e do estado de jornada por critérios de elegibilidade, com escrita atômica do “último estímulo” e dos marcadores de engajamento para evitar repetição e garantir continuidade.</li>
                        <li>Serviço de IA para NLU (enriquecimento): classificação e extração estruturada de metadados quando há conteúdo/descrições relevantes, com formato de saída padronizado para consumo por segmentação e BI.</li>
                        <li>Camada de normalização e deduplicação: regras determinísticas para consolidar atributos acumulativos, prevenindo duplicidade, ruído e deriva taxonômica ao longo do tempo.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é a orquestração de continuidade com contexto persistente. Em vez de operar como um bot reativo e “amnésico”, ele mantém um registro canônico do último estímulo enviado e usa isso como base para decidir o próximo passo. Esse mecanismo reduz repetição, aumenta coerência e sustenta uma jornada consultiva automatizada que evolui conforme o lead retorna e se engaja. Além disso, a combinação de roteamento determinístico + enriquecimento por NLU + deduplicação de atributos cria um sistema com comportamento previsível, auditável e resiliente — ideal para operação em escala com rastreabilidade de ponta a ponta.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.04',
        title: 'Postback Ways: Context Hooks & Continuity',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de conversão por continuidade: após uma interação de alta intenção, ele transforma uma entrega passiva de conteúdo em abertura de diálogo ativo, gerando um gancho contextual que convida o usuário a explicar objetivo, cenário e próximo passo. O design é stateful por contrato: cada execução produz uma pergunta rastreável, atualiza o estado operacional e prepara a transição para o motor conversacional, preservando consistência mesmo quando o usuário responde com atraso.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Detecção de alta intenção: identifica perfis com recorrência de interação e prioriza um tratamento mais sofisticado, evitando que jornadas avançadas sejam tratadas como onboarding.</li>
                        <li>Geração de gancho contextual por IA: produz uma única pergunta aberta baseada no contexto mais recente (conteúdo consumido + mensagem do usuário), com heurística de conversa consultiva: reconhecer interesse → perguntar objetivo → oferecer ajuda prática.</li>
                        <li>Continuidade stateful (memória persistente): persiste o contexto de sessão para que o gancho faça sentido cronológico e para que o próximo núcleo tenha acesso ao “último passo” conversacional, reduzindo amnésia e re-perguntas.</li>
                        <li>Orquestração de timing e experiência: aplica um atraso deliberado entre entrega de conteúdo e abordagem ativa para reduzir percepção de automação e aumentar taxa de resposta, sem depender de horários fixos.</li>
                        <li>Sincronização operacional e rastreabilidade: registra o gancho gerado como “última pergunta enviada”, normaliza flags de estado e garante que a jornada fique pronta para novos eventos (conversa, oferta, monitoramento) sem conflitos.</li>
                        <li>Deduplicação e segurança de envio: grava identificadores efêmeros de mensagens em cache com TTL para prevenir reenvios em caso de retries/transientes e manter idempotência de comunicação.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow (backend): coordena execução por evento, composição de contexto, atrasos operacionais controlados, transições de estado e encadeamento para a próxima etapa.</li>
                        <li>Serviço de IA (geração de linguagem): contrato para produzir uma pergunta única, aberta e contextual, com regras de forma e consistência para reduzir variação e evitar respostas fora de escopo.</li>
                        <li>Memória de sessão (continuidade): persistência de curto e médio prazo do contexto conversacional para garantir coerência cronológica e permitir retomada segura após atrasos.</li>
                        <li>Persistência operacional (CRM/DB): registro auditável do “último passo” (gancho emitido) e atualização atômica de estado, evitando repetição e conflitos com outros núcleos.</li>
                        <li>Cache efêmero (anti-replay): armazenamento temporário de chaves de envio para deduplicação e proteção contra reentrega durante retentativas e falhas transitórias.</li>
                        <li>Canal de mensageria (entrega): contrato de envio de mensagens com tolerância a instabilidades, retentativas controladas e validação de resposta do provedor quando disponível.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a ponte confiável entre automação e conversação: em vez de “encerrar” a jornada na entrega de conteúdo, este núcleo cria um gancho personalizado e rastreável e materializa a continuidade via memória + estado operacional. A composição mantém previsibilidade: gatilho → geração do gancho → persistência do estado → envio deduplicado, permitindo que o sistema retome a conversa horas depois sem quebra de contexto e sem regressão sistêmica.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.05',
        title: 'Input Normalize',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de normalização e interpretação de entradas (NLU) no pipeline conversacional. Ele recebe sinais heterogêneos do canal — texto, áudio transcrito, atualizações de mensagem e reações — e converte tudo em uma representação padronizada, limpa e contextualizada, pronta para roteamento. A função central é garantir que a IA e os fluxos seguintes trabalhem sobre um input “confiável”: sem ruído técnico, sem fragmentação, e com rastreamento claro do que foi recebido, do que foi consolidado e de quais inferências foram produzidas. A composição mantém rastreabilidade do ciclo evento → normalização → consolidação → classificação → persistência/roteamento.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Normalização multimodal de eventos: Consolida múltiplas fontes de entrada (mensagens novas, edições e reações) para que o sistema sempre processe o estado mais recente do contato, evitando decisões com base em contexto desatualizado. Quando há áudio, aplica um estágio de transcrição para transformar a entrada em texto processável.</li>
                        <li>Concatenação e debouncing de mensagens: Implementa uma janela de agregação de mensagens para lidar com usuários que escrevem em múltiplos fragmentos. Em vez de disparar múltiplas execuções, o núcleo acumula os trechos e produz uma única mensagem consolidada. Reduz ruído operacional e melhora a qualidade do entendimento.</li>
                        <li>Sanitização profunda e extração do conteúdo principal: Executa uma rotina de saneamento voltada para remover artefatos típicos de integrações: metadados, estruturas de log, escapes, envelopes estruturais e qualquer elemento que possa “contaminar” o prompt. Faz extração de mensagem principal, preservando apenas o conteúdo com valor comunicacional.</li>
                        <li>Classificação de intenção comercial com política conservadora: Aplica um classificador de NLU orientado a “triagem de negócio”, separando interesse informacional de intenção transacional direcionada. Implementa uma política de segurança fail-closed: na dúvida, assume não-comercial.</li>
                        <li>Sincronização de identidade e continuidade de contexto: Garante que cada contato tenha um registro operacional e que o histórico recente seja atualizado de forma consistente. Mantém uma janela contextual com deduplicação básica.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: Contrato de execução orientado a eventos, com fan-in/fan-out controlado, encadeamento e isolamento de responsabilidades.</li>
                        <li>Cache/TTL para debouncing e anti-replay: Contrato de armazenamento temporário por identidade do contato para agregação de mensagens, garantindo expiração controlada e reduzindo duplicidade de processamento.</li>
                        <li>Serviço de IA (transcrição + NLU estruturada): Contrato de transcrição para unificar entradas multimodais em texto. Contrato de saída estruturada para classificação, com validação e política conservadora.</li>
                        <li>Camada de persistência operacional (CRM/DB): Contrato de leitura por identidade e escrita de estado atualizado, com trilha auditável e continuidade da janela contextual.</li>
                        <li>Canal de mensageria e roteamento: Contrato para encaminhar o resultado da normalização/classificação ao próximo núcleo, mantendo rastreabilidade do gatilho até o efeito persistido.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está na combinação de três garantias operacionais que normalmente falham em chatbots e automações conversacionais: Entrada confiável por design (sanitização profunda e extração do conteúdo principal); Coerência sob fragmentação (concatenação com debouncing); Roteamento seguro de alto impacto (triagem comercial com política conservadora). Em conjunto, este núcleo transforma sinais brutos em um input determinístico e rastreável, elevando a robustez do sistema: gatilho → normalização → contexto → classificação → decisão → estado persistido.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.06',
        title: 'Lead Management',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como o motor conversacional e de qualificação ativa do PULSE System. Ele conduz diálogos consultivos em canais de mensageria, sob um modelo de máquina de estados: a estratégia de abordagem evolui conforme o contato avança no processo (por exemplo, quando um canal de contato direto já foi confirmado ou quando ainda é necessário coletá-lo). A arquitetura combina condução conversacional com extração semântica paralela (NLU), convertendo mensagens não estruturadas em sinais operacionais persistentes (perfil, intenção, contexto e contato), sem interromper o fluxo do diálogo.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Condução multi-etapa com transições explícitas: O núcleo alterna entre etapas de ativação e consulta. As transições são controladas por estado, evitando conversas circulares e garantindo que cada interação avance o processo de forma verificável.</li>
                        <li>Extração semântica em paralelo para perfilagem progressiva: Enquanto o agente principal conversa, scanners especializados executam em paralelo para consolidar perfil, classificar intenção, sintetizar uso pretendido e extrair dados de contato. O perfil do contato se torna mais preciso a cada mensagem.</li>
                        <li>Continuidade de contexto e prevenção de repetição: O núcleo preserva contexto de sessão e histórico operacional para evitar perguntas duplicadas e manter coerência entre turnos. A conversa não depende de “memória humana”: o sistema sabe o que já foi perguntado e o que ainda está pendente.</li>
                        <li>Recomendação contextual de produto com política de elegibilidade: Quando há evidência suficiente de necessidade e timing, o núcleo pode acionar uma recomendação de produto de forma contextual, conectando o problema identificado ao próximo passo lógico, sem interromper o atendimento técnico.</li>
                        <li>Controles operacionais de abuso e previsibilidade de saída: O núcleo aplica limites por identidade para conter uso anômalo e preservar capacidade operacional. Além disso, impõe guardrails de saída para reduzir risco de respostas inválidas e proteger a persistência de dados.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: recebe eventos de mensagem, coordena etapas, executa fan-out/fan-in de scanners, e garante encadeamento com retries e timeouts controlados.</li>
                        <li>Canal de mensageria: envio de respostas com idempotência de comunicação e tratamento de falhas transitórias, mantendo rastreabilidade por transação.</li>
                        <li>Persistência operacional (CRM/DB): leitura por estado, escrita atômica e trilha auditável de decisões (o que foi inferido, quando foi inferido e qual efeito foi persistido).</li>
                        <li>Memória de sessão: continuidade stateful para manter contexto entre turnos e entre canais, com chaveamento por identidade.</li>
                        <li>Serviço de IA: NLU e extração estruturada com contratos de saída e sanitização antes de persistir, evitando poluição de dados e inconsistências.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é a qualificação conversacional governada por estado, com extração paralela e persistência disciplinada. Ele transforma diálogo em operação: cada mensagem gera sinais estruturados, transições explícitas e efeitos persistidos com controle de repetição e de abuso. A composição mantém rastreabilidade ponta a ponta — gatilho → execução → estado → efeito persistido — permitindo evolução do comportamento sem regressão sistêmica e sem depender de processos manuais para sustentar consistência.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.07',
        title: 'Comments Generator',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de interação social em escala, transformando comentários públicos em respostas consistentes, contextuais e seguras. Ele combina geração de linguagem com triagem de intenção para separar engajamento comum de sinais com viés comercial, preservando a experiência do usuário e evitando que conversas sensíveis se percam em um canal público. O resultado é um fluxo que mantém coerência editorial, reduz ruído operacional e sustenta rastreabilidade entre comentário → resposta → efeito no canal.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Ingestão orientada a evento: recebe comentários já filtrados por um roteador de entrada e inicia a execução com baixa latência, mantendo previsibilidade do tempo de resposta.</li>
                        <li>Resposta contextualizada ao conteúdo do post: enriquece o comentário com metadados do conteúdo associado (descrição/tema), para que a resposta seja relevante ao contexto e não apenas ao texto do usuário.</li>
                        <li>Geração de respostas curtas e naturais: produz respostas concisas (1–3 frases), com tom humano e foco em reconhecimento + valor direto quando há pergunta.</li>
                        <li>Variedade máxima anti-repetição: aplica diretrizes para evitar respostas “template”, alternando construções e encerramentos, reduzindo padrão detectável e aumentando percepção de autenticidade.</li>
                        <li>Linguagem neutra e inclusiva: restringe vocativos e construções marcadas por gênero, mantendo consistência comunicacional em escala.</li>
                        <li>Triagem de intenção comercial: identifica sinais de parceria/serviço/anúncio e faz short-circuit para um encaminhamento objetivo ao canal privado, evitando negociação em público e organizando o funil.</li>
                        <li>Cadência controlada de envio: introduz atraso intencional antes de responder para reduzir aparência de automação instantânea e diminuir risco de comportamento “robótico”.</li>
                        <li>Entrega como resposta encadeada: publica a mensagem como réplica direta ao comentário original, preservando contexto do thread e aumentando legibilidade.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: execução orientada a eventos, com composição de etapas (enriquecimento → decisão → geração → envio) e controle de cadência.</li>
                        <li>Camada de conhecimento/metadados de conteúdo: leitura de descrições e atributos do post para contextualização da resposta e redução de alucinação editorial.</li>
                        <li>Serviço de IA: contrato de geração com diretrizes de concisão, neutralidade, variedade e rotas especiais para casos comerciais (inclui fallback quando necessário).</li>
                        <li>Canal social (API de comentários): envio de resposta como reply ao comentário, com parâmetros de autenticação e tolerância a latência de rede.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a combinação de contexto + governança de resposta em um fluxo curto e auditável: o sistema não “responde por responder”. Ele decide qual classe de interação está ocorrendo (engajamento vs. oportunidade comercial), aplica políticas textuais (concisão, neutralidade, anti-repetição) e publica a resposta de forma encadeada ao thread original. Isso sustenta escala com qualidade editorial previsível, reduz exposição pública em casos sensíveis e mantém rastreabilidade operacional.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.08',
        title: 'Partner Requests Notification',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de Inteligência Comercial e Notificação Crítica, responsável por transformar sinais de intenção transacional (parcerias, contratação, publicidade) em uma ação operacional rastreável: triagem, síntese de contexto e alerta imediato para tomada de decisão humana. Ele atua como um bridge entre a conversação automatizada e o pipeline comercial, consolidando histórico e atributos comportamentais em um dossiê único, persistindo esse resumo no CRM e marcando o lead como “já encaminhado” para garantir idempotência e evitar duplicidade de notificações.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Detecção e priorização de intenções transacionais: É acionado somente quando um sinal de “negócio” é identificado por núcleos anteriores, aplicando um caminho de tratamento diferenciado com prioridade e menor latência operacional.</li>
                        <li>Síntese de perfil comercial orientada à decisão: Consolida informações dispersas do lead (contexto, objetivos, maturidade e histórico de interação) em um resumo único, descritivo e acionável, escrito para facilitar avaliação rápida e resposta humana qualificada.</li>
                        <li>Enriquecimento com memória de sessão: Complementa o perfil com nuances do histórico conversacional que não cabem em campos estruturados, reduzindo “buracos de contexto” e melhorando a precisão do dossiê.</li>
                        <li>Governança de reprocessamento (anti-duplicidade): Aplica um mecanismo de “encaminhamento concluído” no registro do lead, garantindo que o mesmo evento não dispare notificações repetidas, mesmo sob cenários de retentativa, concorrência ou reexecução.</li>
                        <li>Persistência do dossiê no CRM: Armazena o resumo final como trilha auditável e insumo para dashboards, revisões posteriores e continuidade do atendimento humano sem perda de contexto.</li>
                        <li>Notificação crítica com roteamento adaptativo: Emite um alerta estruturado para um canal de mensageria empresarial contendo apenas os dados necessários para ação (identidade operacional e resumo), adaptando o conteúdo conforme disponibilidade de contato.</li>
                        <li>Confiabilidade de entrega e tolerância a falhas: Usa política de retentativas e controle de timeout no envio, mantendo previsibilidade operacional em cenários de instabilidade de rede ou indisponibilidade temporária do provedor de mensageria.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: Recebimento por gatilho interno, encadeamento determinístico, fan-out/fan-in para síntese e persistência, e execução com retries/timeouts para robustez.</li>
                        <li>Camada de persistência operacional (CRM/DB): Leitura por identidade, escrita atômica de estado (“encaminhado”) e gravação do dossiê como artefato persistido e auditável.</li>
                        <li>Serviço de IA: Síntese textual controlada com contrato de saída (um parágrafo descritivo, sem dados sensíveis desnecessários), orientado à decisão e consistência editorial.</li>
                        <li>Memória de sessão: Continuidade stateful por chave de identidade, permitindo contextualização baseada no histórico conversacional de longo prazo.</li>
                        <li>Canal de mensageria: Envio de notificação crítica com idempotência lógica, retries e garantias de entrega “best effort” com observabilidade por resposta de API.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é o Enriquecimento de Decisão com governança operacional. Em vez de encaminhar “um alerta genérico”, este núcleo entrega um dossiê sintetizado que reduz a carga cognitiva humana, aumenta a qualidade da abordagem e preserva coerência entre automação e atendimento. Ao combinar síntese com memória, persistência auditável, e anti-duplicidade por estado, ele transforma a automação em um mecanismo confiável de triagem comercial — projetado para escala, rastreabilidade e resposta rápida em oportunidades de alto valor.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.09',
        title: 'WhatsApp Agent: Gateway & Identity Normalization',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de gateway de mensageria e normalização de identidade para o canal WhatsApp. Ele recebe eventos de entrada, aplica filtros de segurança e contexto, padroniza identificadores do remetente e garante que cada conversa seja associada de forma consistente a um único “sujeito” operacional. A composição mantém rastreabilidade ponta a ponta (evento → validação → identidade normalizada → estado consultado/atualizado → efeito persistido) e prepara o tráfego para os núcleos subsequentes de entendimento, memória e resposta.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Recepção e roteamento de eventos do canal: Centraliza a entrada de mensagens via webhook, com separação por tipo de conteúdo e roteamento determinístico para os caminhos corretos. Suporta múltiplas “instâncias” de entrada para segmentar ambientes/operadores.</li>
                        <li>Filtro de segurança, contexto e ruído operacional: Bloqueia automaticamente eventos que não representam uma conversa privada 1:1, reduzindo superfície de risco e evitando execuções indevidas. Descarta mensagens vazias e sinais irrelevantes.</li>
                        <li>Normalização de identidade e padronização de remetente: Implementa uma camada de correção e padronização de identidade para assegurar consistência no identificador do usuário, removendo sufixos técnicos e aplicando correções regionais.</li>
                        <li>Onboarding por vínculo de acesso: Detecta um comando de ativação e realiza o vínculo entre a identidade recém-normalizada e um registro existente, criando a ponte entre aquisição externa e atendimento persistente.</li>
                        <li>Debounce e consolidação de mensagens fragmentadas: Agrupa mensagens enviadas em sequência curta e consolida em uma única “unidade de contexto” antes de disparar processamento inteligente, reduzindo duplicidade de execução.</li>
                        <li>Governança de uso e proteção contra abuso: Mantém contadores operacionais e aplica limites de uso por janela, bloqueando processamento quando o limite é atingido e acionando alertas operacionais.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: recepção de webhooks, roteamento por tipo de evento, encadeamento, retries, timeouts e fan-out/fan-in controlado.</li>
                        <li>Canal de mensageria: contrato de entrada/saída para recebimento e envio de mensagens, marcação de mensagens processadas e idempotência de comunicação.</li>
                        <li>Persistência operacional (CRM/DB): leitura por estado, resolução de identidade, escrita atômica de vínculo/ativação, atualização de contadores e trilha auditável.</li>
                        <li>Cache/TTL: debounce, deduplicação e anti-replay por identidade, com expiração controlada para evitar acúmulo de contexto e reprocessamento.</li>
                        <li>Execução de lógica determinística: normalização/sanitização de identificadores, validação de payload e garantias de consistência antes de persistir ou propagar eventos.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é a robustez na identificação do usuário e na governança do canal. Ao normalizar identidades de forma determinística e consolidar mensagens fragmentadas antes do processamento inteligente, ele reduz falhas de associação, elimina reprocessamento e melhora a qualidade do contexto entregue aos núcleos seguintes. Em paralelo, a camada de limites e alertas adiciona previsibilidade operacional (anti-abuso, custo controlado e observabilidade de exceções), tornando o canal estável para produção e escalável para alto volume sem perda de rastreabilidade.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.10',
        title: 'WhatsApp Agent: Conversational Intelligence & NLU',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo é a camada de inteligência conversacional responsável por conduzir diálogos em um canal de mensagens com comportamento stateful e orientado a objetivos. Ele combina um agente principal, que responde e decide a próxima ação, com agentes observadores que atuam em paralelo para enriquecer o contexto do contato (ex.: identificação de nome e surgimento de novos interesses). A composição mantém rastreabilidade de ponta a ponta — gatilho → execução → estado → efeito persistido — e aplica uma máquina de estados conversacional para equilibrar turnos de exploração (perguntas de clarificação) e turnos de entrega (respostas com conteúdo e encaminhamento para busca/recuperação quando aplicável).</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de diálogo por agente principal: Consistência de tom e comportamento, gestão de estado por turnos e anti-loop. Mantém uma persona estável e ajusta o tipo de resposta com base no estado atual, aplicando regras determinísticas que impedem ciclos de ação.</li>
                        <li>Gatilho inteligente de busca e recuperação de conhecimento: Determina quando a intenção está madura o bastante para executar uma busca/recuperação relevante. Emite um payload estruturado com termos e parâmetros, separando conteúdo conversacional de instruções operacionais.</li>
                        <li>Enriquecimento de contato por scanners NLU paralelos: Identifica o nome do usuário com heurísticas, detecta novos interesses sem redundância comparando com o histórico e persiste com validação de qualidade para evitar dados corrompidos.</li>
                        <li>Estratégia de oferta contextual orientada a valor: Identifica “dores específicas” e sugere um produto apenas quando há aderência objetiva, sem interromper o fluxo de ajuda, com telemetria de oferta para rastreamento.</li>
                        <li>Acumulação semântica e deduplicação: Adiciona novos interesses ao perfil de forma incremental e organizada, com deduplicação e normalização, impedindo que o mesmo interesse seja regravado repetidamente.</li>
                        <li>Normalização de parâmetros de entrega: Traduz pedidos do usuário em parâmetros estritos, impondo limites de resultados e saneamento para evitar respostas longas ou inconsistentes.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: execução sob demanda, fan-out/fan-in entre agentes, encadeamento por estados, controle de retries/timeouts e tratamento de erro sem interrupção.</li>
                        <li>Canal de mensageria: envio de respostas com garantias de reentrega e controle de duplicidade (idempotência de comunicação) quando aplicável.</li>
                        <li>Memória de sessão: continuidade stateful por identidade de conversa, retenção de histórico e resumo operacional para decisões de turno.</li>
                        <li>Camada de persistência operacional (CRM/DB): leitura por estado, escrita atômica de enriquecimentos (nome/interesses/eventos), trilha auditável e consistência eventual controlada.</li>
                        <li>Serviço de IA (NLU/Agentes): extração estruturada com schemas, contratos de saída estritos, validação/sanitização e fallback seguro.</li>
                        <li>Cache/TTL (quando aplicável): prevenção de reprocessamento e anti-replay de eventos conversacionais, com expiração controlada.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está na inteligência de intercalação com governança de estado: o sistema não é um bot reativo, mas um orquestrador que alterna deliberadamente entre qualificação e entrega, mantendo previsibilidade e evitando loops de busca. Além disso, o uso de agentes paralelos separa responsabilidades (responder, extrair, enriquecer, registrar), elevando a qualidade do dado persistido e garantindo rastreabilidade operacional — um design alinhado a operação em produção, com foco em idempotência, deduplicação, contratos de saída e estabilidade conversacional.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.11',
        title: 'WhatsApp Agent: Retrieval & Offer Delivery',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de Entrega de Valor com Recuperação de Informação (RAG) e Recomendação Contextual. Ele recebe uma decisão de busca previamente sinalizada pelo cérebro conversacional e transforma essa intenção em uma resposta final rastreável: gatilho → execução → estado → efeito persistido. A responsabilidade central é combinar busca semântica sobre um acervo de conhecimento com curadoria e formatação orientada a canal, e, quando apropriado, acoplar uma oferta consultiva de produto baseada em sinais de maturidade, interesse e engajamento — sem interromper o fluxo natural da conversa.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Recuperação Semântica (Vector Retrieval): Converte a consulta do usuário em uma representação vetorial e executa busca por similaridade em um repositório vetorial, retornando itens do acervo mais próximos do significado pretendido.</li>
                        <li>Busca Híbrida Orientada a Intenção: Integra sinais de intenção extraídos do diálogo com a recuperação de ativos específicos do acervo, produzindo resultados que equilibram relevância semântica e utilidade prática.</li>
                        <li>Curadoria e Normalização de Resposta por Canal: Aplica regras de apresentação para manter legibilidade e evitar “respostas pesadas” no canal de mensagem. Isso inclui limitação de quantidade, ordenação e organização em uma lista escaneável.</li>
                        <li>Fallback e Refinamento Guiado: Quando a busca não retorna resultados úteis, o núcleo não falha silenciosamente: ele devolve uma resposta segura e instrui como refinar a consulta.</li>
                        <li>Composição de Mensagem Final (RAG Response Assembly): Combina a resposta conversacional com os resultados recuperados, formando um pacote único e coerente.</li>
                        <li>Oferta Consultiva de Produto com “Próximo Passo”: Quando sinais de engajamento atingem um limiar, ativa uma camada de recomendação que identifica o próximo passo lógico para acelerar o resultado do usuário e sugere um produto adequado.</li>
                        <li>Gestão de Estado, Idempotência e Anti-Replay: Atualiza o estado do lead e o estado da busca para evitar loops, registra o que foi entregue e aplica controles de uso para prevenir abuso.</li>
                        <li>Entrega Confiável em Canal de Mensageria: Publica a resposta final no canal, com tolerância a falhas, garantindo que a mensagem enviada represente exatamente o resultado do processamento.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: gatilhos internos, encadeamento de etapas, fan-in/fan-out, validações, retries e timeouts para execução determinística.</li>
                        <li>Serviço de IA: embeddings para busca vetorial, síntese e redação contextual, e geração de oferta consultiva com contrato de saída.</li>
                        <li>Repositório vetorial e camada de consulta: execução de busca por similaridade via função de consulta/contrato de RPC, com parâmetros de limiar e quantidade para controle de relevância.</li>
                        <li>Persistência operacional (CRM/DB): leitura e escrita por estado, atualização atômica do histórico/resumo e registro auditável das ações.</li>
                        <li>Canal de mensageria: envio de mensagem, idempotência de comunicação, tolerância a falhas e confirmação de payload pronto para publicação.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é o raciocínio proativo de “próximo passo” acoplado a um RAG de produção. Em vez de atuar como buscador passivo, ele entrega valor imediato por recuperação semântica e, quando o contexto indica maturidade, adiciona uma recomendação consultiva que acelera a jornada do usuário sem quebrar a naturalidade do diálogo. O resultado é uma experiência que combina precisão de busca, curadoria orientada a canal e oferta inteligente com controle de estado, mantendo rastreabilidade ponta a ponta e estabilidade operacional em ambiente real.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.12',
        title: 'Query Engine',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de Inteligência de Dados + API de consumo para dashboards, responsável por transformar dados operacionais em visões analíticas prontas para visualização. Ele expõe um endpoint de consulta que recebe parâmetros de segmentação e retorna um payload já otimizado — combinando filtragem, agregações, KPIs, tendências e paginação — preservando rastreabilidade entre consulta → processamento → métricas derivadas → resposta entregue.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Gateway de consulta (API de dashboard): Recebe parâmetros de segmentação (janela temporal, flags de qualificação, buscas textuais, paginação) e responde com um payload estruturado contendo dados paginados, métricas agregadas e metadados de navegação.</li>
                        <li>Filtragem avançada com busca robusta: Suporta busca textual tolerante a variações e combina múltiplos critérios simultâneos. Implementa filtros por “estado de completude” do registro, permitindo análises por maturidade do dado.</li>
                        <li>Otimização agressiva de payload (data diet): Reduz JSONs grandes para um conjunto mínimo e semanticamente relevante. Normaliza campos derivados para evitar recomputação no frontend e impõe limites defensivos para agregações.</li>
                        <li>Motor de KPIs e funis: Calcula automaticamente etapas de funil e taxas de progressão com base em sinais de qualificação do lead. Produz métricas “prontas para gráfico”.</li>
                        <li>Análise de perfil e maturidade (segmentação multidimensional): Agrega características de perfil em histogramas/agrupadores. Gera uma matriz de maturidade ao cruzar dimensões comportamentais, permitindo leitura estratégica da base.</li>
                        <li>Insights semânticos por recorrência (taxonomia operacional): Conta ocorrências em campos multi-valorados e listas, gerando rankings de temas, gatilhos e focos. Trata casos de borda em parsing e separadores.</li>
                        <li>Paginação determinística para tabelas e listas: Retorna página atual, total de páginas e total filtrado. Mantém consistência entre “dados exibidos” e “métricas calculadas” dentro da mesma resposta.</li>
                        <li>Camada opcional de estratégia via IA (quando habilitada): Converte tendências e distribuições em diagnósticos narrativos e sugestões estruturadas de pauta, exigindo contrato rígido de saída para encaixe direto na UI.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: Endpoint transacional para consultas; encadeamento de etapas (fan-in), com ordenação lógica do pipeline (leitura → consolidação → agregação → otimização → resposta).</li>
                        <li>Camada de persistência operacional (CRM/DB): Leitura por janela temporal e critérios de estado. Consumo de registros em volume, com transformação para modelos analíticos e retorno “read-optimized”.</li>
                        <li>Serviço de IA (quando aplicável): NLU/geração estruturada para diagnóstico e recomendações. Contrato estrito de saída (JSON) para garantir integridade.</li>
                        <li>Contrato de resposta para frontend: Payload compacto, versionável e previsível, contendo dados paginados + métricas agregadas + metadados de navegação, prontos para renderização.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial do Query Engine é a combinação de engenharia de performance com semântica aplicada sob um contrato de saída estável. Em vez de “exportar o problema” para o frontend (latência, parsing, agregações e gráficos), ele executa agregação em memória com payload enxuto, mantendo a UI leve e previsível mesmo com crescimento de base. Além disso, a arquitetura reforça princípios de portfólio “enterprise-grade”: limites defensivos, normalização de dados, consistência entre filtros e métricas, e a capacidade de acoplar uma camada opcional de IA com saída determinística, preservando rastreabilidade de ponta a ponta.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.13',
        title: 'Authentication Engine',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Authentication Engine é o núcleo responsável por controle de acesso síncrono ao Command Center. Ele atua como um gate de autenticação: recebe credenciais via requisição HTTP, executa validação determinística e retorna uma resposta imediata de autorização (permitir/bloquear). O objetivo não é “gerenciar usuários” em profundidade, e sim proteger o perímetro de acesso ao painel e impedir que dados operacionais sejam expostos sem verificação explícita.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Endpoint de autenticação dedicado: expõe uma rota de login via HTTP, permitindo integração direta com a interface web sem acoplamento com o restante do domínio operacional.</li>
                        <li>Validação determinística de credenciais: interpreta o payload de entrada, aplica regras de verificação e decide de forma binária (sucesso/falha), sem ambiguidade e sem efeitos colaterais.</li>
                        <li>Resposta síncrona e auditável: devolve um objeto de resposta com status de autenticação e mensagem operacional, encerrando o ciclo HTTP imediatamente para suportar UX de login sem latência adicional.</li>
                        <li>Isolamento de domínio: mantém a autenticação separada das rotinas de dados e inteligência do pipeline, reduzindo superfície de risco e evitando dependências desnecessárias entre identidade e processamento operacional.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Gateway HTTP (entrada controlada): contrato de requisição/resposta síncrona com a interface do Command Center.</li>
                        <li>Contrato de payload de autenticação: entrada estruturada contendo credenciais e saída padronizada com allow/deny (boolean) + mensagem.</li>
                        <li>Política de origem e acesso: compatibilidade com execução em múltiplos domínios de front-end, mantendo o endpoint como fronteira explícita de autenticação.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial é a previsibilidade operacional do perímetro: uma fronteira de autenticação simples, rápida e determinística, que reduz acoplamento com o domínio e facilita evolução incremental (por exemplo, troca da estratégia de validação, reforço de políticas ou integração com um provedor externo) sem alterar contratos do Command Center. A composição mantém rastreabilidade: requisição → validação → decisão → resposta, sem dependências com o processamento de dados e sem impactos colaterais no sistema.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.14',
        title: 'Product Offerer on Instagram Direct',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de automação comercial reativa, atuando como um mecanismo de reengajamento e conversão para contatos que demonstraram potencial, mas interromperam a interação antes da decisão. Ele funciona como um motor de matchmaking contextual: avalia o estado do relacionamento, lê o histórico consolidado do perfil e seleciona, de forma inteligente, o produto mais adequado para destravar o próximo passo do usuário — sem soar como disparo massivo, e sim como uma recomendação consultiva baseada em contexto.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Detecção de oportunidade por estado (lead “parado” e qualificado): Identifica automaticamente perfis elegíveis por regras de inatividade e recência, preservando a experiência do usuário e priorizando janelas de maior probabilidade de resposta.</li>
                        <li>Filtro anti-fadiga e idempotência de oferta: Aplica proteção explícita contra repetição: cada perfil é ofertado no máximo uma vez por ciclo, com bloqueio por estado persistido.</li>
                        <li>Síntese de perfil para decisão de oferta (contexto 360º): Consolida atributos já conhecidos em um pacote coerente, permitindo que a IA opere sobre um retrato real do usuário.</li>
                        <li>Seleção inteligente de produto por “ponte de valor”: Utiliza lógica de próximo passo: identifica a conexão estratégica e seleciona o produto que acelera o resultado.</li>
                        <li>Geração de mensagem consultiva (anti-copy agressiva): Produz uma comunicação curta, natural e orientada a valor, evitando escassez artificial. A mensagem é escrita como recomendação técnica contextual.</li>
                        <li>Entrega confiável via canal de mensageria: Dispara a mensagem no Direct com tolerância a falhas e garante que o envio esteja acoplado a uma trilha de execução verificável.</li>
                        <li>Persistência imediata de estado pós-envio: Após o envio bem-sucedido, grava o estado de “oferta realizada” no repositório operacional, fechando o ciclo e evitando reofertas automáticas.</li>
                        <li>Deduplicação anti-replay e proteção contra reenvio: Mantém um registro efêmero de mensagens recentes para impedir reenvio acidental em cenários de retentativas.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: agendamento/execução controlada, processamento em lote, retentativas, timeouts e encadeamento de etapas.</li>
                        <li>Camada de persistência operacional (CRM/DB): leitura orientada a estado, atualização atômica e trilha auditável de “oferta já realizada”.</li>
                        <li>Serviço de IA: decisão de produto por contexto + geração de mensagem com contrato de saída (texto pronto para entrega).</li>
                        <li>Canal de mensageria: envio de mensagem direta com garantia de entrega por retentativas controladas.</li>
                        <li>Cache/TTL (quando aplicável): deduplicação e anti-replay para reduzir risco de disparos duplicados.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é a Venda Contextual Dinâmica aplicada com governança. Ele evita a armadilha de automações “broadcast” e opera como um mecanismo de recomendação: interpreta o momento do usuário, escolhe o produto pelo raciocínio de próximo passo e entrega de forma consultiva, mantendo controles formais de anti-fadiga, idempotência e deduplicação.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.15',
        title: 'Product Offerer on WhatsApp',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera na camada de automação comercial e conversão por mensageria, com a responsabilidade de identificar contatos já qualificados e acionar uma oferta contextual de produto no momento certo do relacionamento — sem interromper conversas ativas e sem repetir abordagens. Ele funciona como um motor de matchmaking consultivo: cruza sinais comportamentais, histórico recente e o catálogo de produtos para gerar uma recomendação coerente com o estágio do usuário, preservando continuidade narrativa e registrando o resultado como um efeito persistido e rastreável.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Monitoramento contínuo com regras de elegibilidade: varre periodicamente a base operacional para encontrar contatos que atendem critérios de maturidade, evitando abordagens prematuras.</li>
                        <li>Anti-fadiga e prevenção de repetição: aplica controles de estado para garantir que a mesma pessoa não receba ofertas duplicadas dentro do mesmo ciclo, respeitando limites de cadência.</li>
                        <li>Matchmaking por contexto (decisão orientada a “próximo passo”): seleciona o produto não apenas por correspondência direta de tema, mas por utilidade estratégica no caminho do usuário.</li>
                        <li>Geração de mensagem em tom consultivo: produz uma mensagem única, curta e natural, estruturada como recomendação técnica, evitando urgência artificial.</li>
                        <li>Persistência de estado e auditoria do evento: após o envio, grava o resultado como mudança de estado (oferta emitida) e registra o evento no histórico operacional.</li>
                        <li>Entrega resiliente por mensageria: envia a mensagem pelo canal de comunicação com tolerância a falhas, preservando previsibilidade de throughput.</li>
                        <li>Idempotência e deduplicação de disparos: aplica salvaguardas contra reenvio acidental em cenários de retentativa, latência ou reprocessamento.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: execução recorrente, processamento em lotes, fan-out/fan-in e encadeamento de etapas com controle de falhas.</li>
                        <li>Camada de persistência operacional (CRM/DB): leitura por estado (elegibilidade), escrita atômica do estado “oferta emitida” e trilha auditável do evento.</li>
                        <li>Canal de mensageria: envio de texto com contrato de entrega e mecanismos de retentativa, com proteção contra duplicidade.</li>
                        <li>Memória de sessão (quando aplicável): acesso ao contexto recente para manter consistência de linguagem e evitar recomendações desconectadas.</li>
                        <li>Serviço de IA: decisão de produto e geração de mensagem sob contrato de concisão e alinhamento ao contexto, com saída pronta para envio.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é transformar uma “régua de oferta” em decisão justificável e rastreável. Em vez de disparar mensagens com base em tags estáticas, ele opera como um motor de recomendação consultiva: escolhe o produto pelo encadeamento lógico do objetivo do usuário, controla fadiga por estado, assegura idempotência no envio e deixa uma trilha clara de causalidade (elegibilidade → decisão → mensagem → entrega → estado persistido). Isso aumenta valor percebido, reduz spam operacional e eleva a qualidade do funil sem sacrificar previsibilidade de execução.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.16',
        title: 'Instagram Final Message Dispatcher',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo opera como uma camada de fechamento de ciclo para jornadas de conversão conduzidas por mensageria. Sua responsabilidade é identificar contatos que já acumularam evidência suficiente de engajamento ao longo de uma sequência anterior e executar o último passo operacional: entregar uma mensagem final de convite/oferta com timing controlado, sem recorrer a disparos em massa. A abordagem trata o fechamento como um evento governado por estado e recência, garantindo que a comunicação seja consistente com o histórico e que a operação permaneça auditável.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Segmentação por janela de conversão: Seleciona apenas contatos que atingiram um critério objetivo de recência/propensão, baseado no histórico de interação já persistido.</li>
                        <li>Política anti-spam por governança de estado: Aplica uma regra de “envio único por ciclo” usando um marcador persistente de conclusão. Uma vez entregue o fechamento, o contato é excluído das próximas execuções.</li>
                        <li>Composição de mensagem parametrizável e desacoplada: Mantém o conteúdo do envio e parâmetros de campanha como dados configuráveis, permitindo atualizar copy sem alterar o comportamento operacional.</li>
                        <li>Execução em lote com controle de vazão e retentativa: Processa contatos de forma iterativa, com controle de throughput para respeitar limites operacionais do provedor de mensageria.</li>
                        <li>Deduplicação de envio e trilha de entrega: Registra cada tentativa/entrega com chaves efêmeras de deduplicação e expiração controlada, prevenindo reenvio por reexecuções.</li>
                        <li>Persistência do efeito: Após envio bem-sucedido, atualiza o estado operacional do contato para refletir que o fechamento foi executado.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: agendamento/evento de execução, iteração em batches, controle de vazão, retentativas e encerramento determinístico do ciclo.</li>
                        <li>Camada de persistência operacional (CRM/DB): leitura por critérios de recência e estado; escrita atômica de marcador de conclusão; trilha auditável do que foi executado.</li>
                        <li>Canal de mensageria: contrato de envio de mensagem 1:1; tratamento de erro transitório com retry; garantia de não duplicação por transação.</li>
                        <li>Cache/TTL: deduplicação efêmera e anti-replay para proteger a operação contra reentradas e reexecuções.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial deste núcleo é transformar “envio final” em execução governada. Em vez de broadcast ou automação cega, ele combina: (1) segmentação por janela objetiva de propensão, (2) política anti-spam baseada em estado persistente, e (3) deduplicação com TTL para proteger contra reentradas. O resultado é um fechamento rastreável e previsível: cada disparo é motivado por evidência, executado com controle de vazão e registrado como efeito persistido, reduzindo ruído operacional e risco de desgaste no canal.</p>
                </section>
            </div>
        `
    },
    {
        id: 'C.17',
        title: 'Cadence State Recycler',
        content: `
            <div class="space-y-8">
                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-blue-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Descrição arquitetural</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">Este núcleo atua na camada de governança de estado e higiene operacional do PULSE System. Sua função é manter o ecossistema “reengajável” por padrão: após um ciclo de contato ser concluído e permanecer inativo por um período de resfriamento, o estado daquele lead é reciclado para que futuras campanhas e jornadas possam ocorrer sem bloqueios residuais. Em vez de tratar o pipeline como um fluxo linear que “termina”, ele sustenta uma operação circular com rastreabilidade: gatilho → execução → estado → efeito persistido.</p>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-emerald-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Funcionalidades</span>
                            <span class="hidden md:inline">Funcionalidades detalhadas</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Detecção de ciclos encerrados e expirados: identifica registros que já concluíram um ciclo de contato e que ultrapassaram uma janela de resfriamento, evitando reentradas prematuras.</li>
                        <li>Reciclagem de estado em lote: executa a reversão controlada de marcadores de conclusão (flags de ciclo) para restaurar a elegibilidade do lead a novas etapas do pipeline.</li>
                        <li>Atualização atômica e consistente: aplica mudanças de estado de forma determinística, garantindo que cada registro passe por uma transição explícita, sem efeitos colaterais parciais.</li>
                        <li>Proteção contra estagnação sistêmica: evita o acúmulo de “estado morto” que travaria o funil (leads permanentemente indisponíveis), preservando a capacidade de evolução e reuso operacional.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-purple-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">
                            <span class="md:hidden">Plataforma e integração</span>
                            <span class="hidden md:inline">Plataforma e contratos de integração</span>
                        </h4>
                    </div>
                    <ul class="list-disc list-inside text-gray-400 space-y-3 text-justify leading-relaxed">
                        <li>Orquestração de workflow: execução recorrente, varredura por critérios temporais/estado, processamento em batches e loop controlado para aplicar transições com previsibilidade.</li>
                        <li>Camada de persistência operacional (CRM/DB): leitura por critérios de ciclo e recência, escrita com atualização atômica do estado, preservando trilha auditável de transições.</li>
                        <li>Política temporal (TTL/cool-off): aplicação de janelas de resfriamento para definir quando um lead volta a ser elegível, evitando reengajamento fora de contexto.</li>
                    </ul>
                </section>

                <section>
                    <div class="flex items-center gap-2 mb-3">
                        <span class="text-amber-400">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                        </span>
                        <h4 class="text-base md:text-xl font-bold text-gray-100 tracking-tight !m-0 !p-0 leading-none">Diferencial técnico</h4>
                    </div>
                    <p class="text-gray-400 text-justify leading-relaxed">O diferencial está em tratar reciclagem de estado como garantia operacional, e não como manutenção manual. Esse núcleo torna o pipeline sustentável no longo prazo: elimina acúmulo de flags residuais, reduz necessidade de “reset” humano e mantém o sistema pronto para novas estratégias sem regressão. Em termos de engenharia, ele transforma a continuidade do funil em propriedade do sistema — com transições explícitas, auditáveis e reproduzíveis.</p>
                </section>
            </div>
        `
    },
];
