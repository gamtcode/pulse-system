import React from 'react';
import { FileText } from 'lucide-react';
import useDashboardStore from '@/store/dashboardStore';

interface FilterBarProps {
    onFilterSubmit?: () => void;
}

/**
 * Filter panel for the dashboard.
 * Keeps form interactions local while persisting filter state in the global store.
 */
const FilterBar: React.FC<FilterBarProps> = ({ onFilterSubmit }) => {
    const { filters, setFilters, loadDashboardData, isLoading } = useDashboardStore();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        // Normalizes form input to a single value type used by the store update.
        let finalValue: string | number | boolean | undefined = type === 'checkbox' ? checked : value;

        // Ensures numeric paging semantics (select values arrive as strings).
        if (name === 'pageSize') {
            finalValue = Number(value);
        }

        setFilters({
            [name]: finalValue
        });
    };

    const handleGenerateReport = (e: React.FormEvent) => {
        e.preventDefault();

        // Resets pagination to keep results deterministic when filters change.
        setFilters({ page: 1 });

        loadDashboardData();
        if (onFilterSubmit) onFilterSubmit();
    };

    return (
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-12 pt-8 pb-12 mb-10 !border-0">
            <svg width="0" height="0" className="absolute" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
                <defs>
                    <linearGradient id="text-gradient-match" x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#6b7280" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="relative mb-10 pb-6 -mx-12 px-12 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10" />
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-scan-line" />

                <div className="flex justify-between items-center w-full">
                    <h3 className="flex items-center text-[26px] font-semibold text-gradient tracking-wide">
                        <FileText className="w-8 h-8 mr-3" color="url(#text-gradient-match)" />
                        Canal Segredos do Digital
                    </h3>
                </div>
            </div>

            <form onSubmit={handleGenerateReport}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    <div className="md:col-span-4">
                        <label htmlFor="startDate" className="block text-white font-normal mb-2">Data de Início</label>
                        <div className="relative">
                            <input
                                id="startDate"
                                type="datetime-local"
                                name="startDate"
                                value={filters.startDate || ''}
                                onChange={handleInputChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg py-3.5 px-4 text-gray-400 text-[15px] focus:border-blue-500/50 outline-none transition-all hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-white/5 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <label htmlFor="endDate" className="block text-white font-normal mb-2">Data de Fim</label>
                        <div className="relative">
                            <input
                                id="endDate"
                                type="datetime-local"
                                name="endDate"
                                value={filters.endDate || ''}
                                onChange={handleInputChange}
                                className="w-full bg-dark/50 border border-white/10 rounded-lg py-3.5 px-4 text-gray-400 text-[15px] focus:border-blue-500/50 outline-none transition-all hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-white/5 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-60 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-4">
                        <label htmlFor="pageSize" className="block text-white font-normal mb-2">Resultados por página</label>
                        <select
                            id="pageSize"
                            name="pageSize"
                            value={filters.pageSize}
                            onChange={handleInputChange}
                            className="w-full bg-dark/50 border border-white/10 rounded-lg py-3.5 px-4 text-gray-400 text-[15px] focus:border-blue-500/50 outline-none transition-all hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-white/5 appearance-none"
                        >
                            <option value="10" className="bg-[#1F1F1F] text-gray-300">10</option>
                            <option value="30" className="bg-[#1F1F1F] text-gray-300">30</option>
                            <option value="50" className="bg-[#1F1F1F] text-gray-300">50</option>
                            <option value="100" className="bg-[#1F1F1F] text-gray-300">100</option>
                            <option value="-1" className="bg-[#1F1F1F] text-gray-300">Todos</option>
                        </select>
                    </div>

                    <div className="md:col-span-6">
                        <label htmlFor="searchName" className="block text-white font-normal mb-2">Buscar por Nome</label>
                        <input
                            id="searchName"
                            type="text"
                            name="searchName"
                            placeholder="Digite parte do nome..."
                            value={filters.searchName}
                            onChange={handleInputChange}
                            className="w-full bg-dark/50 border border-white/10 rounded-lg py-3.5 px-4 text-gray-400 placeholder:text-gray-400 placeholder:opacity-100 text-[15px] focus:border-blue-500/50 outline-none transition-all hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-white/5"
                        />
                    </div>

                    <div className="md:col-span-6">
                        <label htmlFor="searchDescription" className="block text-white font-normal mb-2">Buscar na Descrição</label>
                        <input
                            id="searchDescription"
                            type="text"
                            name="searchDescription"
                            placeholder="Digite parte da descrição..."
                            value={filters.searchDescription}
                            onChange={handleInputChange}
                            className="w-full bg-dark/50 border border-white/10 rounded-lg py-3.5 px-4 text-gray-400 placeholder:text-gray-400 placeholder:opacity-100 text-[15px] focus:border-blue-500/50 outline-none transition-all hover:border-white/20 hover:bg-white/[0.05] hover:shadow-2xl hover:shadow-white/5"
                        />
                    </div>

                    <div className="md:col-span-8 mt-2 flex flex-col justify-end">
                        <label className="block text-white font-normal mb-3">Filtros:</label>
                        <div className="flex flex-wrap gap-6">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="hasName"
                                    checked={filters.hasName}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                                <span className="text-gray-400 group-hover:text-white transition-colors">Nome</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="hasWhatsapp"
                                    checked={filters.hasWhatsapp}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                                <span className="text-gray-400 group-hover:text-white transition-colors">WhatsApp</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="hasInstagram"
                                    checked={filters.hasInstagram}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                                <span className="text-gray-400 group-hover:text-white transition-colors">Instagram</span>
                            </label>

                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="hasDescription"
                                    checked={filters.hasDescription}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 rounded border-gray-600 bg-transparent text-blue-600 focus:ring-blue-500 focus:ring-offset-gray-900"
                                />
                                <span className="text-gray-400 group-hover:text-white transition-colors">Descrição</span>
                            </label>
                        </div>
                    </div>

                    <div className="md:col-span-4 flex items-end justify-end">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`
                        flex items-center gap-2 px-8 py-3 rounded-lg text-base font-medium transition-all
                        ${isLoading
                                    ? 'bg-[#3A82B6]/50 cursor-not-allowed opacity-80'
                                    : 'bg-[#3A82B6] hover:bg-[#3275a3] text-white shadow-lg shadow-[#3A82B6]/20 hover:scale-[1.02]'
                                }
                    `}
                        >
                            {isLoading ? (
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            ) : null}
                            <span>Gerar Relatório</span>
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default FilterBar;
