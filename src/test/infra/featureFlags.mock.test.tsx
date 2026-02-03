import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFlags, setMockFlags } from '../mocks/LaunchDarklyMock';
import { defaultFeatureFlags } from '@/feature-flags/defaults';

describe('Feature Flags Mock Infrastructure', () => {
    // resetMockFlags runs in setup.ts (afterEach)

    it('should return default values initially', () => {
        const { result } = renderHook(() => useFlags());
        expect(result.current).toEqual(defaultFeatureFlags);
        expect(result.current.newDashboard).toBe(false);
    });

    it('should allow overriding flags', () => {
        act(() => {
            setMockFlags({ newDashboard: true });
        });

        const { result } = renderHook(() => useFlags());
        expect(result.current.newDashboard).toBe(true);
        // preserves defaults
        expect(result.current.betaCharts).toBe(false);
    });

    it('should reset flags automatically between tests (setup.ts check)', () => {
        // validates setup.ts afterEach reset
        const { result } = renderHook(() => useFlags());
        expect(result.current).toEqual(defaultFeatureFlags);
    });
});
