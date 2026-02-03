import React from 'react';
import { UserCheck, Activity, Key } from 'lucide-react';

const OperationalSecurity: React.FC = () => {
    return (
        <section id="security" className="py-14 md:py-22 px-6 bg-white/[0.02] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 md:mb-12 space-y-6">
                    <h2 className="text-3xl md:text-[44px] mb-6 text-gradient font-bold">Segurança e Gestão Operacional</h2>
                    <div className="w-full h-px bg-white/10"></div>
                </div>

                <div className="space-y-6 mb-12">
                    <h3 className="text-xl md:text-2xl text-white font-bold">Controles práticos para redução de riscos</h3>
                    <p className="text-lg text-gray-400 leading-relaxed text-justify hyphen-limit-strict-roi md:[hyphens:manual] !tracking-tight [text-wrap:pretty]">
                        O PULSE aplica princípios de segurança operacional para reduzir superfície de ataque e manter previsibilidade de operação. O acesso ao Command Center é protegido por um endpoint dedicado, com separação explícita entre autenticação e dados operacionais, evitando acoplamento indevido entre identidade e domínio. Para conter abuso e automações externas, há rate limiting por usuário e sinalização/alertas quando o padrão de uso foge do esperado. Em cenários de ambiguidade, risco ou exceções, o sistema adota um mecanismo de human-in-the-loop: pausa a execução, preserva o contexto relevante e retoma automaticamente quando liberado, priorizando atendimento humano sem perda de estado.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="glass-card p-6 border-white/5 space-y-4">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <Key className="w-5 h-5 text-green-400" />
                            <h4 className="font-bold text-white">Controle de acesso</h4>
                        </div>
                        <p className="text-gray-400 text-sm text-justify hyphen-limit-strict-roi !tracking-tight">
                            Controle de acesso para o Command Center via endpoint dedicado e separação entre autenticação e dados o&shy;pe&shy;ra&shy;cio&shy;nais.
                        </p>
                    </div>

                    <div className="glass-card p-6 border-white/5 space-y-4">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <Activity className="w-5 h-5 text-red-400" />
                            <h4 className="font-bold text-white">Rate limiting & Abuse</h4>
                        </div>
                        <p className="text-gray-400 text-sm text-justify hyphen-limit-strict-roi !tracking-tight">
                            Rate limiting por usuário e alertas operacionais para abuso e eventuais interações com outros sistemas au&shy;to&shy;ma&shy;ti&shy;za&shy;dos.
                        </p>
                    </div>

                    <div className="glass-card p-6 border-white/5 space-y-4">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <UserCheck className="w-5 h-5 text-blue-400" />
                            <h4 className="font-bold text-white">Human-in-the-loop</h4>
                        </div>
                        <p className="text-gray-400 text-sm text-justify hyphen-limit-strict-roi !tracking-tight">
                            Regra de continuidade: o sistema pausa e, posteriormente, retoma a interação automaticamente, priorizando o atendimento hu&shy;ma&shy;no.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OperationalSecurity;
