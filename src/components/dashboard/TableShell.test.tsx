import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import TableShell from './TableShell';
import useDashboardStore from '@/store/dashboardStore';
import { User } from '@/types/dashboard';

// Mocks the store hook to keep tests deterministic and independent from Zustand state.
vi.mock('@/store/dashboardStore', () => ({
    default: vi.fn(),
}));

const createMockUsers = (count: number): User[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `user-${i + 1}`,
        name: `User ${i + 1}`,
        whatsapp: `551199999${String(i).padStart(4, '0')}`,
        username: `@user${i + 1}`,
        report: i % 2 === 0 ? `Report for user ${i + 1}` : '',
        createdAt: new Date().toISOString(),
    }));
};

describe('TableShell Integration', () => {
    const mockUseDashboardStore = useDashboardStore as unknown as ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should display loading state initially', () => {
        mockUseDashboardStore.mockReturnValue({
            users: [],
            isLoading: true,
            hasLoadedOnce: false,
            filters: { pageSize: 50 },
        });

        render(<TableShell />);
        expect(screen.getByText('Aguardando a geração do relatório...')).toBeInTheDocument();
    });

    it('should display empty state when no users found', () => {
        mockUseDashboardStore.mockReturnValue({
            users: [],
            isLoading: false,
            hasLoadedOnce: true,
            filters: { pageSize: 50 },
        });

        render(<TableShell />);
        expect(screen.getByText('Nenhum resultado encontrado.')).toBeInTheDocument();
    });

    it('should render correct number of rows for initial data', () => {
        const users = createMockUsers(20);
        mockUseDashboardStore.mockReturnValue({
            users,
            isLoading: false,
            hasLoadedOnce: true,
            filters: { pageSize: 50 },
        });

        render(<TableShell />);

        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.getByText('User 20')).toBeInTheDocument();

        // Subtract the header row from the total row count.
        const rows = screen.getAllByRole('row');
        expect(rows.length - 1).toBe(20);
    });

    it('should filter users based on store filter state', () => {
        const users = createMockUsers(10);

        mockUseDashboardStore.mockReturnValue({
            users,
            isLoading: false,
            hasLoadedOnce: true,
            filters: {
                pageSize: 50,
                searchName: 'User 5'
            },
        });

        render(<TableShell />);
        expect(screen.getByText('User 5')).toBeInTheDocument();
        expect(screen.queryByText('User 1')).not.toBeInTheDocument();
    });

    it('should handle pagination correctly', async () => {
        const users = createMockUsers(60);
        const pageSize = 50;

        mockUseDashboardStore.mockReturnValue({
            users,
            isLoading: false,
            hasLoadedOnce: true,
            filters: {
                pageSize
            },
        });

        render(<TableShell />);

        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.getByText('User 50')).toBeInTheDocument();
        expect(screen.queryByText('User 51')).not.toBeInTheDocument();

        const nextButton = screen.getByText('»');
        fireEvent.click(nextButton);

        // Pagination state is internal, so the UI update is async from the test's perspective.
        await waitFor(() => {
            expect(screen.getByText('User 51')).toBeInTheDocument();
        });
        expect(screen.getByText('User 60')).toBeInTheDocument();
        expect(screen.queryByText('User 50')).not.toBeInTheDocument();
    });

    it('should open report modal when clicking on description', () => {
        const users = [{
            id: '1', name: 'Test', whatsapp: '123', username: 'test',
            report: 'Secret Report Content', createdAt: new Date().toISOString()
        }];

        mockUseDashboardStore.mockReturnValue({
            users,
            isLoading: false,
            hasLoadedOnce: true,
            filters: { pageSize: 50 },
        });

        render(<TableShell />);

        const cell = screen.getByText('Descrição disponível');
        fireEvent.click(cell);

        expect(screen.getByText('Secret Report Content')).toBeInTheDocument();
    });
});
