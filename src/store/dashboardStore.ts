import { create } from 'zustand';
import { DashboardStats, User, DashboardFilters } from '@/types/dashboard';
import { fetchDashboardData } from '@/services/dashboardApi';

interface DashboardState {
    rawStats: DashboardStats | null;
    users: User[];
    isLoading: boolean;
    hasLoadedOnce: boolean;
    error: string | null;
    filters: DashboardFilters;
    setRawStats: (stats: DashboardStats) => void;
    setUsers: (users: User[]) => void;
    setLoading: (loading: boolean) => void;
    setHasLoadedOnce: (loaded: boolean) => void;
    setError: (error: string | null) => void;
    setFilters: (filters: Partial<DashboardFilters>) => void;
    loadDashboardData: () => Promise<void>;
}

/**
 * Dashboard store (Zustand).
 * Centralizes dashboard data, loading/error state, and filter-driven fetching behavior.
 */
const useDashboardStore = create<DashboardState>((set, get) => ({
    rawStats: null,
    users: [],
    isLoading: false,
    hasLoadedOnce: false,
    error: null,
    filters: {
        pageSize: 50,
        page: 1,
        searchName: '',
        searchDescription: '',
        hasName: false,
        hasWhatsapp: false,
        hasInstagram: false,
        hasDescription: false
    },
    setRawStats: (stats) => set({ rawStats: stats }),
    setUsers: (users) => set({ users }),
    setLoading: (isLoading) => set({ isLoading }),
    setHasLoadedOnce: (hasLoadedOnce) => set({ hasLoadedOnce }),
    setError: (error) => set({ error }),
    setFilters: (newFilters) => set((state) => ({ filters: { ...state.filters, ...newFilters } })),

    loadDashboardData: async () => {
        const { filters } = get();
        set({ isLoading: true, error: null });
        try {
            // Intentionally requests a full dataset to keep pagination client-side (trade-off: larger payload).
            const apiFilters = {
                ...filters,
                pageSize: 10000,
                page: 1
            };
            const data = await fetchDashboardData(apiFilters as DashboardFilters);
            set({
                rawStats: data.stats,
                users: data.data as unknown as User[],
                hasLoadedOnce: true,
                isLoading: false
            });
        } catch (err: unknown) {
            console.error(err);
            const message = err instanceof Error ? err.message : 'Erro ao carregar dados';
            set({ error: message, isLoading: false });
        }
    }
}));

export default useDashboardStore;
