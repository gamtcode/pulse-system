import React, { useMemo } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import GenericChart from '@/components/dashboard/GenericChart';
import { PALETTE } from '@/constants/chartConfig';
import { createDonutData, donutOptions, polarOptions, getProfileBarOptions, MASTER_LISTS, buildProfileData, processBubbleData, formatLabel } from '@/utils/chartUtils';
import { ChartData, ChartOptions } from 'chart.js';

import { DashboardStats } from '@/types/dashboard';

/**
 * Renders profile analytics charts (role, AI proficiency, digital maturity).
 * Derives chart-ready datasets from the aggregated dashboard stats.
 */
const ProfileTab: React.FC = () => {
    const rawStats = useDashboardStore(state => state.rawStats);

    // Defensive default keeps chart derivation deterministic when stats are still loading.
    const stats: DashboardStats = useMemo(() => rawStats || {
        totalLeads: 0,
        withWhatsapp: 0,
        withName: 0,
        withDescription: 0,
        funnel: { step4: 0 },
        aba3_perfil: {},
        aba4_insights: {}
    }, [rawStats]);

    const totalLeads = stats.totalLeads || 1;
    const profileData = stats.aba3_perfil || {};

    const situacaoRaw = buildProfileData(profileData.situacao_profissional, MASTER_LISTS.SITUACAO);
    const chartSituacaoData: ChartData<'bar'> = { labels: situacaoRaw.labels, datasets: [{ label: 'Leads', data: situacaoRaw.data, backgroundColor: PALETTE, borderRadius: 4, indexAxis: 'y' }] };

    // Polar charts intentionally drop the first bucket (often "unknown/empty") to reduce noise.
    const chartSituacaoPolarData: ChartData<'polarArea'> = { labels: situacaoRaw.labels.slice(1), datasets: [{ data: situacaoRaw.data.slice(1), backgroundColor: PALETTE.slice(1), borderWidth: 0 }] };

    const iaRaw = buildProfileData(profileData.nivel_ia, MASTER_LISTS.IA);
    const chartIAData: ChartData<'bar'> = { labels: iaRaw.labels, datasets: [{ label: 'Leads', data: iaRaw.data, backgroundColor: PALETTE, borderRadius: 4, indexAxis: 'y' }] };
    const chartIAPolarData: ChartData<'polarArea'> = { labels: iaRaw.labels.slice(1), datasets: [{ data: iaRaw.data.slice(1), backgroundColor: PALETTE.slice(1), borderWidth: 0 }] };

    const digitalRaw = buildProfileData(profileData.nivel_digital, MASTER_LISTS.DIGITAL);
    const chartDigitalData: ChartData<'bar'> = { labels: digitalRaw.labels, datasets: [{ label: 'Leads', data: digitalRaw.data, backgroundColor: PALETTE, borderRadius: 4, indexAxis: 'y' }] };
    const chartDigitalPolarData: ChartData<'polarArea'> = { labels: digitalRaw.labels.slice(1), datasets: [{ data: digitalRaw.data.slice(1), backgroundColor: PALETTE.slice(1), borderWidth: 0 }] };

    const bubbleChartData = processBubbleData(profileData.matriz_maturidade);

    // Uses categorical axes so the matrix reads as discrete maturity buckets, not continuous values.
    const bubbleOptions: ChartOptions<'bubble'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { type: 'category', labels: MASTER_LISTS.DIGITAL.slice(1).map(formatLabel), grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'Experiência Digital', color: '#64748b' } },
            y: { type: 'category', labels: MASTER_LISTS.IA.slice(1).map(formatLabel), grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' }, title: { display: true, text: 'Nível IA', color: '#64748b' } }
        },
        plugins: {
            legend: { position: 'bottom', labels: { color: '#9ca3af' } },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const raw = context.raw as { x: string; y: string; rawVal: number };
                        const val = raw.rawVal !== undefined ? raw.rawVal : 0;
                        const formattedVal = Number(val).toFixed(0);
                        return `${context.dataset.label} (${raw.x} | ${raw.y}): ${formattedVal} usuários`;
                    }
                }
            }
        }
    };


    return (
        <div className="fade-in space-y-12" data-tab-content="profile">
            <div><h5 className="text-lg font-medium text-white mb-1">Perfil Profissional</h5><p className="text-gray-400 text-sm mb-6">Principais ocupações declaradas.</p><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8"><div className="lg:col-span-4 h-[300px] px-2 flex flex-col justify-center"><GenericChart type="bar" id="chart-situacao" data={chartSituacaoData} options={getProfileBarOptions(chartSituacaoData.datasets[0]?.data as number[])} height="100%" /></div><div className="lg:col-span-4 h-[300px] relative text-center flex flex-col items-center justify-center"><GenericChart type="polarArea" id="chart-situacao-polar" data={chartSituacaoPolarData} options={polarOptions} height="100%" /><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Análise Segmentar</h5></div><div className="lg:col-span-4 h-[300px] relative flex flex-col items-center justify-center"><div className="w-[240px] h-[240px] mb-6"><GenericChart type="doughnut" id="chart-donut-perfil" data={createDonutData((profileData.count_situacao || 0), totalLeads, 1)} options={donutOptions} height="100%" /></div><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Índice de Análise</h5></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Conhecimento IA</h5><p className="text-gray-400 text-sm mb-6">Nível de conhecimento técnico.</p><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8"><div className="lg:col-span-4 h-[300px] px-2 flex flex-col justify-center"><GenericChart type="bar" id="chart-ia" data={chartIAData} options={getProfileBarOptions(chartIAData.datasets[0]?.data as number[])} height="100%" /></div><div className="lg:col-span-4 h-[300px] relative text-center flex flex-col items-center justify-center"><GenericChart type="polarArea" id="chart-ia-polar" data={chartIAPolarData} options={polarOptions} height="100%" /><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Análise Segmentar</h5></div><div className="lg:col-span-4 h-[300px] relative flex flex-col items-center justify-center"><div className="w-[240px] h-[240px] mb-6"><GenericChart type="doughnut" id="chart-donut-ia" data={createDonutData((profileData.count_ia || 0), totalLeads, 2)} options={donutOptions} height="100%" /></div><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Índice de Análise</h5></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Conhecimento Digital</h5><p className="text-gray-400 text-sm mb-6">Nível de negócios digitais.</p><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-8"><div className="lg:col-span-4 h-[300px] px-2 flex flex-col justify-center"><GenericChart type="bar" id="chart-digital" data={chartDigitalData} options={getProfileBarOptions(chartDigitalData.datasets[0]?.data as number[])} height="100%" /></div><div className="lg:col-span-4 h-[300px] relative text-center flex flex-col items-center justify-center"><GenericChart type="polarArea" id="chart-digital-polar" data={chartDigitalPolarData} options={polarOptions} height="100%" /><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Análise Segmentar</h5></div><div className="lg:col-span-4 h-[300px] relative flex flex-col items-center justify-center"><div className="w-[240px] h-[240px] mb-6"><GenericChart type="doughnut" id="chart-donut-digital" data={createDonutData((profileData.count_digital || 0), totalLeads, 3)} options={donutOptions} height="100%" /></div><h5 className="absolute bottom-0 w-full text-center text-xs text-gray-500 uppercase tracking-widest">Índice de Análise</h5></div></div></div>
            <hr className="border-white/10" />
            <div><h5 className="text-lg font-medium text-white mb-1">Matriz de Maturidade</h5><p className="text-gray-400 text-sm mb-6">Experiência Digital vs. Nível de Conhecimento em IA.</p><div className="flex justify-center"><div className="w-full max-w-4xl h-[550px]"><GenericChart type="bubble" id="chart-matrix" data={bubbleChartData} options={bubbleOptions} height="100%" /></div></div></div>
        </div>
    );
};

export default ProfileTab;
