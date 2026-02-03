import React, { useMemo } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import KpiCard from '@/components/dashboard/KpiCard';
import GenericChart from '@/components/dashboard/GenericChart';
import { PALETTE } from '@/constants/chartConfig';
import { calculatePercent, calculatePercentVal, createDonutData, donutOptions } from '@/utils/chartUtils';
import { ChartData, ChartOptions } from 'chart.js';

import { DashboardStats } from '@/types/dashboard';

/**
 * Renders the performance overview tab (KPIs + charts) using dashboard stats.
 * Uses safe defaults and memoized chart configs to keep rendering deterministic.
 */
const PerformanceTab: React.FC = () => {
    const rawStats = useDashboardStore(state => state.rawStats);

    // Defensive fallback keeps the UI stable when stats are not available yet.
    const stats: DashboardStats = useMemo(() => (rawStats as DashboardStats) || {
        totalLeads: 0, withWhatsapp: 0, withName: 0, withDescription: 0,
        funnel: { step4: 0 },
        aba3_perfil: {},
        aba4_insights: {}
    }, [rawStats]);

    const calculateKpi = (val: number, total: number) => ({
        pct: calculatePercent(val, total),
        count: `(${val || 0} leads)`
    });

    // Avoid divide-by-zero while keeping percentage utilities consistent.
    const totalLeads = stats.totalLeads || 1;

    const kpiData = useMemo(() => ({
        total: stats.totalLeads?.toLocaleString() || '-',
        name: calculateKpi(stats.withName, stats.totalLeads),
        whatsapp: calculateKpi(stats.withWhatsapp, stats.totalLeads),
        postback: calculateKpi(stats.withDescription, stats.totalLeads)
    }), [stats]);

    // Memoize chart datasets/options to reduce unnecessary chart re-instantiation.
    const engagementBarData: ChartData<'line'> = useMemo(() => ({
        labels: ['Total', 'Nome', 'WhatsApp', 'Postback', 'Todos'],
        datasets: [{
            label: 'Volume',
            data: [stats.totalLeads, stats.withName, stats.withWhatsapp, stats.withDescription, stats.funnel.step4],
            fill: true,
            backgroundColor: 'rgba(58, 130, 182, 0.2)',
            borderColor: PALETTE[0],
            tension: 0.4,
            borderWidth: 2
        }]
    }), [stats]);

    const engagementBarOptions: ChartOptions<'line'> = useMemo(() => ({
        plugins: { legend: { display: false } },
        scales: {
            y: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' }, beginAtZero: true },
            x: { grid: { display: false }, ticks: { color: '#9ca3af' } }
        }
    }), []);

    const horizontalBarData: ChartData<'bar'> = useMemo(() => ({
        labels: [`Todos (${calculatePercentVal(stats.funnel.step4, totalLeads)}%)`, `Postback (${calculatePercentVal(stats.withDescription, totalLeads)}%)`, `WhatsApp (${calculatePercentVal(stats.withWhatsapp, totalLeads)}%)`, `Nome (${calculatePercentVal(stats.withName, totalLeads)}%)`, `Total (100%)`],
        datasets: [{
            label: 'Funil',
            data: [stats.funnel.step4, stats.withDescription, stats.withWhatsapp, stats.withName, stats.totalLeads],
            backgroundColor: [PALETTE[4], PALETTE[3], PALETTE[2], PALETTE[1], PALETTE[0]],
            borderRadius: 4,
            barPercentage: 0.8
        }]
    }), [stats, totalLeads]);

    const horizontalBarOptions: ChartOptions<'bar'> = useMemo(() => ({
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { color: '#9ca3af' } },
            y: { grid: { display: false }, ticks: { color: '#9ca3af' } }
        }
    }), []);

    return (
        <div className="fade-in space-y-8" data-tab-content="stats">
            <div><h5 className="text-lg font-medium text-white mb-1">KPIs Principais</h5><p className="text-gray-400 text-sm">Visão consolidada da volumetria.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard title="Total de Leads" value={kpiData.total} subtext="No período selecionado" />
                <KpiCard title="Nome" value={kpiData.name.pct} subtext={kpiData.name.count} />
                <KpiCard title="WhatsApp" value={kpiData.whatsapp.pct} subtext={kpiData.whatsapp.count} />
                <KpiCard title="Postback" value={kpiData.postback.pct} subtext={kpiData.postback.count} />
            </div>
            <hr className="border-white/10 my-8" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center"><div className="mx-auto w-[180px] h-[180px] relative chart-container"><GenericChart type="doughnut" id="chart-name" data={createDonutData(stats.withName, totalLeads, 1)} options={donutOptions} height="100%" /></div><h5 className="text-sm font-medium text-gray-400 mt-3">Nome</h5></div>
                <div className="text-center"><div className="mx-auto w-[180px] h-[180px] relative chart-container"><GenericChart type="doughnut" id="chart-whatsapp" data={createDonutData(stats.withWhatsapp, totalLeads, 2)} options={donutOptions} height="100%" /></div><h5 className="text-sm font-medium text-gray-400 mt-3">WhatsApp</h5></div>
                <div className="text-center"><div className="mx-auto w-[180px] h-[180px] relative chart-container"><GenericChart type="doughnut" id="chart-desc" data={createDonutData(stats.withDescription, totalLeads, 3)} options={donutOptions} height="100%" /></div><h5 className="text-sm font-medium text-gray-400 mt-3">Postback</h5></div>
                <div className="text-center"><div className="mx-auto w-[180px] h-[180px] relative chart-container"><GenericChart type="doughnut" id="chart-total" data={createDonutData(stats.funnel.step4, totalLeads, 0)} options={donutOptions} height="100%" /></div><h5 className="text-sm font-medium text-gray-400 mt-3">Todos os Dados</h5></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="p-6 min-h-[300px] flex items-center justify-center"><div className="w-full h-[280px]"><GenericChart type="line" id="chart-bar-engagement" data={engagementBarData} options={engagementBarOptions} height="100%" /></div></div>
                <div className="p-6 min-h-[300px] flex items-center justify-center"><div className="w-full h-[280px]"><GenericChart type="bar" id="chart-horizontal-bar" data={horizontalBarData} options={horizontalBarOptions} height="100%" /></div></div>
            </div>
        </div>
    );
};

export default PerformanceTab;
