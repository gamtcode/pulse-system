import React, { useState, useMemo, useEffect } from 'react';
import useDashboardStore from '@/store/dashboardStore';
import ReportModal from './ReportModal';

/**
 * Renders the dashboard table with client-side filtering and pagination.
 * Keeps local UI state (pagination + modal) while consuming global filter state.
 */
const TableShell: React.FC = () => {
    const { users, isLoading, hasLoadedOnce, filters } = useDashboardStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const openModal = (content: string) => {
        if (!content) return;
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    // Client-side filtering keeps UI responsive when consuming a full dataset.
    const filteredUsers = useMemo(() => {
        if (!users) return [];
        let result = users;

        if (filters.searchName) {
            const term = String(filters.searchName).toLowerCase();
            result = result.filter(u => (u.name || '').toLowerCase().includes(term));
        }

        if (filters.searchDescription) {
            const term = String(filters.searchDescription).toLowerCase();
            result = result.filter(u => (u.report || '').toLowerCase().includes(term));
        }

        if (filters.hasName) {
            result = result.filter(u => u.name && u.name.trim() !== '');
        }
        if (filters.hasWhatsapp) {
            result = result.filter(u => u.whatsapp && u.whatsapp.trim() !== '');
        }
        if (filters.hasInstagram) {
            result = result.filter(u => u.username && u.username.trim() !== '');
        }
        if (filters.hasDescription) {
            result = result.filter(u => u.report && u.report.trim() !== '');
        }

        return result;
    }, [
        users,
        filters.searchName,
        filters.searchDescription,
        filters.hasName,
        filters.hasWhatsapp,
        filters.hasInstagram,
        filters.hasDescription
    ]);

    const pageSize = Number(filters.pageSize) || 50;
    const totalItems = filteredUsers.length;
    const totalPages = pageSize === -1 || pageSize === 0 ? 1 : Math.ceil(totalItems / pageSize);

    // Reset pagination on filter changes to avoid empty pages and confusing UX.
    useEffect(() => {
        setCurrentPage(1);
    }, [
        filters.searchName,
        filters.searchDescription,
        filters.pageSize,
        filters.hasName,
        filters.hasWhatsapp,
        filters.hasInstagram,
        filters.hasDescription,
        users
    ]);

    const paginatedUsers = useMemo(() => {
        if (pageSize === -1) return filteredUsers;
        const start = (currentPage - 1) * pageSize;
        return filteredUsers.slice(start, start + pageSize);
    }, [filteredUsers, currentPage, pageSize]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);

        const tabsElement = document.getElementById('dashboard-tabs');
        if (tabsElement) {
            const y = tabsElement.getBoundingClientRect().top + window.scrollY - 110;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const showPagination = filteredUsers.length > pageSize && pageSize !== -1;

    return (
        <>
            <div className="glass-card-flat p-0 overflow-hidden !rounded-lg border-0 shadow-none">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/5 border-b border-white/10 text-gray-300 text-sm uppercase tracking-wider print:text-xs">
                                <th className="p-4 print:p-1 font-medium">#</th>
                                <th className="p-4 print:p-1 font-medium">ID do Usuário</th>
                                <th className="p-4 print:p-1 font-medium">Data Cadastro</th>
                                <th className="p-4 print:p-1 font-medium">Nome</th>
                                <th className="p-4 print:p-1 font-medium">WhatsApp</th>
                                <th className="p-4 print:p-1 font-medium">Instagram</th>
                                <th className="p-4 print:p-1 font-medium print-hidden-col">Descrição</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {!hasLoadedOnce ? (
                                <tr>
                                    <td colSpan={7} className="p-12 text-center text-gray-500">
                                        Aguardando a geração do relatório...
                                    </td>
                                </tr>
                            ) : paginatedUsers.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="p-12 text-center text-gray-400">
                                        {isLoading ? 'Carregando...' : 'Nenhum resultado encontrado.'}
                                    </td>
                                </tr>
                            ) : (
                                paginatedUsers.map((user, index) => {
                                    const dateStr = user.createdAt
                                        ? new Date(user.createdAt).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'medium' })
                                        : '...';

                                    const globalIndex = pageSize === -1 ? index + 1 : (currentPage - 1) * pageSize + index + 1;

                                    return (
                                        <tr key={index} className="text-gray-300 text-sm hover:bg-white/5 transition-colors print:text-xs">
                                            <td className="p-4 print:p-1">{globalIndex}</td>
                                            <td className="p-4 print:p-1 print:break-all">{user.id || '...'}</td>
                                            <td className="p-4 print:p-1">{dateStr}</td>
                                            <td className="p-4 print:p-1">{user.name || '...'}</td>
                                            <td className="p-4 print:p-1">
                                                {user.whatsapp ? (
                                                    <a href={`https://wa.me/${user.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline decoration-dashed decoration-gray-500/50 transition-colors">
                                                        {user.whatsapp}
                                                    </a>
                                                ) : '...'}
                                            </td>
                                            <td className="p-4 print:p-1 print:break-all">
                                                {user.username ? (
                                                    <a href={`https://www.instagram.com/${user.username}`} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline decoration-dashed decoration-gray-500/50 transition-colors">
                                                        {user.username}
                                                    </a>
                                                ) : '...'}
                                            </td>
                                            <td
                                                className={`p-4 print:p-1 max-w-[200px] truncate transition-colors print-hidden-col ${user.report ? 'cursor-pointer hover:text-white hover:underline decoration-dashed decoration-gray-500/50' : ''}`}
                                                title={user.report ? 'Clique para ver detalhes' : ''}
                                                onClick={() => user.report && openModal(user.report)}
                                            >
                                                {user.report ? 'Descrição disponível' : '...'}
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>

            </div>

            {showPagination && (
                <div className="pagination-wrapper p-4 flex justify-center mt-4">
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage <= 1}
                            className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all ${currentPage <= 1 ? 'text-gray-600 bg-dark/50 cursor-not-allowed' : 'bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-600/30'}`}
                        >
                            «
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1)
                            .filter(page => {
                                if (totalPages <= 10) return true;
                                if (page === 1 || page === totalPages) return true;
                                if (page >= currentPage - 2 && page <= currentPage + 2) return true;
                                return false;
                            })
                            .map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all ${currentPage === page
                                        ? 'bg-blue-600 text-white shadow-blue-500/20 scale-105'
                                        : 'bg-dark/50 hover:bg-white/10 text-gray-400 border border-white/5'
                                        }`}
                                >
                                    {page}
                                </button>
                            ))
                        }

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage >= totalPages}
                            className={`px-4 py-2 rounded-lg text-sm font-bold shadow-lg transition-all ${currentPage >= totalPages ? 'text-gray-600 bg-dark/50 cursor-not-allowed' : 'bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-600/30'}`}
                        >
                            »
                        </button>
                    </div>
                </div>
            )}

            <ReportModal
                isOpen={isModalOpen}
                onClose={closeModal}
                content={modalContent}
            />
        </>
    );
};

export default TableShell;
