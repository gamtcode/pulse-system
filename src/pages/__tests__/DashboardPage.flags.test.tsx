import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FlagProvider } from '@/flags/FlagProvider';
import DashboardPage from '../DashboardPage';

// Mock child components to keep the test focused on flag-driven rendering.
vi.mock('@/components/dashboard/FilterBar', () => ({
    default: () => <div data-testid="filter-bar">FilterBar</div>
}));
vi.mock('@/components/dashboard/TableShell', () => ({
    default: () => <div data-testid="table-shell">TableShell</div>
}));
vi.mock('@/components/dashboard/tabs/PerformanceTab', () => ({ default: () => <div>PerfTab</div> }));
vi.mock('@/components/dashboard/tabs/ProfileTab', () => ({ default: () => <div>ProfileTab</div> }));
vi.mock('@/components/dashboard/tabs/InsightsTab', () => ({ default: () => <div>InsightsTab</div> }));

describe('DashboardPage Feature Flags', () => {

    it('should NOT render badge when flag is OFF (default)', () => {
        render(
            <FlagProvider initialFlags={{ ui_badge_enabled: false }}>
                <DashboardPage />
            </FlagProvider>
        );

        expect(screen.queryByText('LD Experimental')).not.toBeInTheDocument();
        expect(screen.getByTestId('filter-bar')).toBeInTheDocument();
    });

    it('should render badge when flag is ON', () => {
        render(
            <FlagProvider initialFlags={{ ui_badge_enabled: true }}>
                <DashboardPage />
            </FlagProvider>
        );

        expect(screen.getByText('LD Experimental')).toBeInTheDocument();
    });

});
