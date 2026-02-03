import React, { useState, Suspense, lazy } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import { useFeatureFlag } from '@/flags/useFeatureFlag';

import FilterBar from '@/components/dashboard/FilterBar';
import TableShell from '@/components/dashboard/TableShell';

const PerformanceTab = lazy(() => import('@/components/dashboard/tabs/PerformanceTab'));
const ProfileTab = lazy(() => import('@/components/dashboard/tabs/ProfileTab'));
const InsightsTab = lazy(() => import('@/components/dashboard/tabs/InsightsTab'));

const TabSkeleton: React.FC = () => (
    <div className="fade-in space-y-8 animate-pulse">
        <div><div className="h-8 bg-white/5 rounded w-1/4 mb-2"></div><div className="h-4 bg-white/5 rounded w-1/3"></div></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-white/5 rounded-xl"></div>)}
        </div>
        <div className="h-px bg-white/10 my-8"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map(i => <div key={i} className="h-[180px] w-[180px] mx-auto bg-white/5 rounded-full"></div>)}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="h-[300px] bg-white/5 rounded-xl"></div>
            <div className="h-[300px] bg-white/5 rounded-xl"></div>
        </div>
    </div>
);

const ObservabilityPlayground = lazy(() => import('@/components/observability/ObservabilityPlayground'));

const DashboardPage: React.FC = () => {
    const error = useDashboardStore(state => state.error);
    const [activeTab, setActiveTab] = useState<string>('leads');
    const isBadgeEnabled = useFeatureFlag('ui_badge_enabled');

    if (error) return <div className="p-8 text-center text-red-400 glass-card mx-auto mt-20 max-w-md">{error}</div>;

    return (
        <div id="dashboard-root" className="min-h-screen pt-32 pb-12 px-6 relative text-white font-sans print-reset-wrapper">
            <div className="noise-overlay !z-0"></div>
            <div className="max-w-7xl mx-auto relative z-10">

                {isBadgeEnabled && (
                    <div className="mb-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                            <span className="w-1.5 h-1.5 mr-1.5 bg-purple-400 rounded-full animate-pulse"></span>
                            LD Experimental
                        </span>
                    </div>
                )}

                <FilterBar onFilterSubmit={() => setActiveTab('leads')} />

                <div id="dashboard-tabs" className="flex justify-start md:justify-center gap-2 mb-0 overflow-x-auto px-4 md:px-0">
                    {[
                        { id: 'leads', label: 'Relatório de Leads' },
                        { id: 'stats', label: 'Performance de Captura' },
                        { id: 'profile', label: 'Análise de Perfil' },
                        { id: 'insights', label: 'Insights de Conteúdo' },
                        { id: 'tools', label: 'Ferramentas' }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-8 py-3.5 text-base font-medium transition-all duration-200 whitespace-nowrap rounded-t-2xl rounded-b-none ${activeTab === tab.id ? 'text-white bg-white/5 backdrop-blur-sm' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-12 py-12 min-h-[200px] print-reset-wrapper">
                    {activeTab === 'leads' && (
                        <div className="fade-in print-reset-wrapper">
                            <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4 no-print">
                                <div><h5 className="text-lg font-medium text-white mb-1">Resultados da Pesquisa</h5><p className="text-gray-400 text-sm">Listagem detalhada dos contatos.</p></div>
                                <button onClick={() => window.print()} className="h-10 px-4 border border-white/20 rounded text-sm text-blue-400 hover:bg-white/5 transition-colors flex items-center justify-center gap-2"><i className="bi bi-printer-fill text-gray-400"></i>Imprimir</button>
                            </div>
                            <div id="printableTableArea">
                                <TableShell />
                            </div>
                        </div>
                    )}

                    <Suspense fallback={<TabSkeleton />}>
                        {activeTab === 'stats' && <PerformanceTab />}
                        {activeTab === 'profile' && <ProfileTab />}
                        {activeTab === 'insights' && <InsightsTab />}
                    </Suspense>

                    {activeTab === 'tools' && (
                        <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading Playground...</div>}>
                            <ObservabilityPlayground />
                        </Suspense>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
