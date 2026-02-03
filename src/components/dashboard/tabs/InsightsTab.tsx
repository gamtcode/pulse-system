import React, { useMemo } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import GenericChart from '@/components/dashboard/GenericChart';
import { PALETTE, INSIGHTS_PALETTE } from '@/constants/chartConfig';
import { createDonutData, donutOptions, polarOptions, getProfileBarOptions } from '@/utils/chartUtils';
import { ChartData, ChartOptions } from 'chart.js';

import { DashboardStats } from '@/types/dashboard';

/**
 * Insights tab: derives chart-ready datasets from aggregated stats.
 * Guarantees deterministic UI via stable defaults and bounded datasets.
 */
const InsightsTab: React.FC = () => {
    const rawStats = useDashboardStore(state => state.rawStats);

    // Provide a stable shape to avoid defensive checks across chart builders.
    const stats: DashboardStats = useMemo(() => rawStats || {
        totalLeads: 0,
        withWhatsapp: 0,
        withName: 0,
        withDescription: 0,
        funnel: { step4: 0 },
        aba3_perfil: {},
        aba4_insights: {}
    }, [rawStats]);

    // Avoid division-by-zero in donut computations and rate calculations.
    const totalLeads = stats.totalLeads || 1;
    const insightsData = stats.aba4_insights || {};

    const formatLabel = (key: string) => {
        // Presentation mapping is intentionally local to keep upstream stats vendor-agnostic.
        const LABELS_MAP: { [key: string]: string } = {
            'TOTAL_INFORMADO': 'Total Informado', 'BUSCANDO_OPORTUNIDADE': 'Desempregado ou Transição', 'POSSUI_NEGOCIO': 'Possui Negócio', 'AUTONOMO_FREELANCER': 'Autônomo ou Freelancer', 'FUNCIONARIO_CLT': 'Funcionário CLT', 'ESTUDANTE_HOBBISTA': 'Estudante ou Hobbista', 'INICIANTE': 'Iniciante', 'USUARIO_CASUAL': 'Usuário Casual', 'INTERMEDIARIO': 'Intermediário', 'AVANCADO': 'Avançado', 'POUCA': 'Pouco', 'NENHUMA': 'Nenhum', 'INTERMEDIARIA': 'Intermediário', 'AVANCADA': 'Avançado', 'GERAR_RENDA': 'Gerar Renda', 'OTIMIZAR_NEGOCIO_TRABALHO': 'Otimizar Negócio ou Trabalho', 'APRENDIZADO_CURIOSIDADE': 'Desenvolver Habilidades'
        };
        return LABELS_MAP[key] || key;
    };

    const interesseMap = insightsData.interesse_primario || {};
    const interesseSorted = Object.entries(interesseMap)
        .filter(([key]) => key !== 'TOTAL_INFORMADO')
        .sort(([, a], [, b]) => (b as number) - (a as number));

    const interesseTotal = (interesseMap['TOTAL_INFORMADO'] as number) || 0;
    const chartInteresseBarData: ChartData<'bar'> = {
        labels: ['Total Informado', ...interesseSorted.map(([k]) => formatLabel(k))],
        datasets: [{ label: 'Leads', data: [interesseTotal, ...interesseSorted.map(([, v]) => v as number)], backgroundColor: PALETTE, borderRadius: 4, indexAxis: 'y' }]
    };
    const chartInteressePolarData: ChartData<'polarArea'> = {
        labels: interesseSorted.map(([k]) => formatLabel(k)),
        datasets: [{ data: interesseSorted.map(([, v]) => v as number), backgroundColor: PALETTE.slice(1), borderWidth: 0 }]
    };

    interface ProcessedItem {
        [key: string]: string | number;
    }

    const buildVerticalBarData = (itemsArray: Record<string, number> | ProcessedItem[] | undefined, labelKey: string, valueKey: string) => {
        if (!itemsArray || (Array.isArray(itemsArray) && itemsArray.length === 0)) {
            return {
                labels: ['Aguardando...'],
                datasets: [{ label: 'Sem dados', data: [0], backgroundColor: PALETTE[0] }]
            };
        }

        let processed: ProcessedItem[] = [];
        if (Array.isArray(itemsArray)) {
            processed = itemsArray;
        } else {
            processed = Object.entries(itemsArray).map(([k, v]) => ({ [labelKey]: k, [valueKey]: v }));
        }

        // Limit to top items to keep charts readable and prevent DOM/canvas overload.
        processed.sort((a, b) => (b[valueKey] as number) - (a[valueKey] as number));
        const top20 = processed.slice(0, 20);

        return {
            labels: top20.map((i) => i[labelKey] as string),
            datasets: [{
                label: 'Ocorrências',
                data: top20.map((i) => i[valueKey] as number),
                backgroundColor: INSIGHTS_PALETTE,
                borderRadius: 4
            }]
        };
    };

    const chartObjetoData = buildVerticalBarData(insightsData.objeto_principal, '0', '1');
    const chartCategoriaData = buildVerticalBarData(insightsData.categoria_principal, 'categoria', 'contagem');
    const chartIntencaoData = buildVerticalBarData(insightsData.intencao_busca, 'categoria', 'contagem');
    const chartGatilhosData = buildVerticalBarData(insightsData.analise_gatilhos, 'categoria', 'contagem');

    const verticalBarOptions: ChartOptions<'bar'> = {
        indexAxis: 'x',
        animation: { duration: 1000, easing: 'easeOutQuart' },
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#9ca3af', maxRotation: 90, minRotation: 45 } },
            y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } }
        }
    };
    const horizontalIntencaoOptions: ChartOptions<'bar'> = {
        indexAxis: 'y',
        animation: { duration: 1000, easing: 'easeOutQuart' },
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'Volume', color: '#64748b' } },
            y: { grid: { display: false }, ticks: { color: '#9ca3af' } }
        }
    };

    const doresData = insightsData.dores_gatilhos || {};

    return (
        <div className="fade-in space-y-12" data-tab-content="insights">
            <div><h5 className="text-lg font-medium text-white mb-1">Intenções Primárias</h5><p className="text-gray-400 text-sm mb-6">Distribuição dos objetivos principais declarados.</p><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8"><div className="lg:col-span-4 h-[300px] px-2 flex flex-col justify-center"><GenericChart type="bar" id="chart-interesse-bar" data={chartInteresseBarData} options={getProfileBarOptions(chartInteresseBarData.datasets[0]?.data as number[])} height="100%" /></div><div className="lg:col-span-4 h-[300px] relative text-center flex flex-col items-center justify-center"><GenericChart type="polarArea" id="chart-interesse-polar" data={chartInteressePolarData} options={polarOptions} height="100%" /><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Análise Segmentar</h5></div><div className="lg:col-span-4 h-[300px] relative flex flex-col items-center justify-center"><div className="w-[240px] h-[240px] mb-6"><GenericChart type="doughnut" id="chart-donut-interesse" data={createDonutData((interesseTotal || 0), totalLeads, 4)} options={donutOptions} height="100%" /></div><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Índice de Análise</h5></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Performance da Atração</h5><p className="text-gray-400 text-sm mb-6">Frequência e Distribuição dos Tópicos de Conteúdo.</p><div className="p-6 min-h-[500px] flex items-center justify-center"><div className="w-full h-[450px]"><GenericChart type="bar" id="chart-objeto" data={chartObjetoData} options={verticalBarOptions} height="100%" /></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Distribuição por Categoria</h5><p className="text-gray-400 text-sm mb-6">Classificação por categorias de conteúdo que mais geraram atração.</p><div className="p-6 min-h-[500px] flex items-center justify-center"><div className="w-full h-[450px]"><GenericChart type="bar" id="chart-categoria" data={chartCategoriaData} options={verticalBarOptions} height="100%" /></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Análise da Intenção de Busca</h5><p className="text-gray-400 text-sm mb-6">Principais expressões-chave para direcionamento.</p><div className="p-6 min-h-[600px] flex items-center justify-center"><div className="w-full h-[550px]"><GenericChart type="bar" id="chart-intencao" data={chartIntencaoData} options={horizontalIntencaoOptions} height="100%" /></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Mapa de Demandas & Interesses</h5><p className="text-gray-400 text-sm mb-6">Principais gatilhos e intenções declaradas.</p><div className="p-6 min-h-[600px] flex items-center justify-center"><div className="w-full h-[550px]"><GenericChart type="bar" id="chart-gatilhos" data={chartGatilhosData} options={horizontalIntencaoOptions} height="100%" /></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Sugestões Práticas de Conteúdo</h5><p className="text-gray-400 text-sm mb-6">Insights acionáveis baseados nos padrões identificados.</p>{doresData.foco_principal ? (<div className="space-y-6"><div className="glass-card p-6"><h6 className="flex items-center text-blue-400 text-sm font-bold uppercase tracking-wider mb-3"><i className="bi bi-bullseye mr-2"></i> Foco Principal</h6><p className="text-gray-400 leading-relaxed text-justify">{doresData.foco_principal}</p></div><div className="grid gap-4">{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => { const tema = doresData[`tema${i}`]; const sugestao = doresData[`sugestao${i}`]; if (!tema || !sugestao) return null; return (<div key={i} className="glass-card p-5 hover:bg-white/5 transition-colors"><div className="flex items-start gap-4"><div className="mt-1 text-teal-400 text-xl font-bold">{i}.</div><div><h6 className="text-gray-200 font-medium mb-2">{tema}</h6><p className="text-gray-400 text-sm text-justify leading-relaxed">{sugestao}</p></div></div></div>) })}</div></div>) : (<div className="text-center py-10 text-gray-500">Aguardando processamento de insights de IA...</div>)}</div>
        </div>
    );
};

export default InsightsTab;
