import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FilterBar from './FilterBar';
import useDashboardStore from '@/store/dashboardStore';

// Mocks the store hook to keep tests deterministic and independent from Zustand state.
vi.mock('@/store/dashboardStore', () => ({
    default: vi.fn(),
}));

describe('FilterBar Integration', () => {
    const setFiltersMock = vi.fn();
    const loadDashboardDataMock = vi.fn();
    const mockUseDashboardStore = useDashboardStore as unknown as ReturnType<typeof vi.fn>;

    const defaultState = {
        filters: {
            startDate: '',
            endDate: '',
            pageSize: 50,
            searchName: '',
            searchDescription: '',
            hasName: false,
            hasWhatsapp: false,
            hasInstagram: false,
            hasDescription: false
        },
        isLoading: false,
        setFilters: setFiltersMock,
        loadDashboardData: loadDashboardDataMock,
    };

    beforeEach(() => {
        vi.clearAllMocks();
        mockUseDashboardStore.mockReturnValue(defaultState);
    });

    it('should update search term in store on text input change', () => {
        render(<FilterBar />);

        const nameInput = screen.getByPlaceholderText('Digite parte do nome...');
        fireEvent.change(nameInput, { target: { value: 'John' } });

        expect(setFiltersMock).toHaveBeenCalledWith({ searchName: 'John' });

        const descInput = screen.getByPlaceholderText('Digite parte da descrição...');
        fireEvent.change(descInput, { target: { value: 'VIP' } });

        expect(setFiltersMock).toHaveBeenCalledWith({ searchDescription: 'VIP' });
    });

    it('should update filters in store on checkbox click', () => {
        render(<FilterBar />);

        const nameCheckbox = screen.getByLabelText('Nome');
        fireEvent.click(nameCheckbox);
        expect(setFiltersMock).toHaveBeenCalledWith({ hasName: true });

        const whatsappCheckbox = screen.getByLabelText('WhatsApp');
        fireEvent.click(whatsappCheckbox);
        expect(setFiltersMock).toHaveBeenCalledWith({ hasWhatsapp: true });
    });

    it('should update page size in store', () => {
        render(<FilterBar />);

        const pageSizeSelect = screen.getByLabelText('Resultados por página');
        fireEvent.change(pageSizeSelect, { target: { value: '100' } });

        expect(setFiltersMock).toHaveBeenCalledWith({ pageSize: 100 });
    });

    it('should call loadDashboardData on form submit', () => {
        render(<FilterBar />);

        const submitButton = screen.getByText('Gerar Relatório');
        fireEvent.click(submitButton);

        expect(loadDashboardDataMock).toHaveBeenCalled();
        expect(setFiltersMock).toHaveBeenCalledWith({ page: 1 });
    });

    it('should call onFilterSubmit callback if provided', () => {
        const onFilterSubmitMock = vi.fn();
        render(<FilterBar onFilterSubmit={onFilterSubmitMock} />);

        const submitButton = screen.getByText('Gerar Relatório');
        fireEvent.click(submitButton);

        expect(onFilterSubmitMock).toHaveBeenCalled();
    });

    it('should disable submit button when loading', () => {
        mockUseDashboardStore.mockReturnValue({
            ...defaultState,
            isLoading: true,
        });

        render(<FilterBar />);

        const submitButton = screen.getByRole('button', { name: /Gerar Relatório/i });
        expect(submitButton).toBeDisabled();
    });
});
