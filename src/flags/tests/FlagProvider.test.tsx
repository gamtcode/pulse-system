import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { FlagProvider } from '../FlagProvider';
import { useFeatureFlag } from '../useFeatureFlag';

describe('FlagProvider Abstraction', () => {

    it('should return default false when used outside provider', () => {
        const { result } = renderHook(() => useFeatureFlag('newDashboard'));
        // When no provider is mounted, the hook falls back to the default context value.
        expect(result.current).toBe(false);
    });

    it('should return context value when inside provider', () => {
        const { result } = renderHook(() => useFeatureFlag('newDashboard'), {
            wrapper: ({ children }) => <FlagProvider>{children}</FlagProvider>
        });

        expect(result.current).toBe(false);
    });

    it('should accept initialFlags to override defaults', () => {
        const { result } = renderHook(() => useFeatureFlag('newDashboard'), {
            wrapper: ({ children }) => <FlagProvider initialFlags={{ newDashboard: true }}>{children}</FlagProvider>
        });

        expect(result.current).toBe(true);
    });

    it('should maintain other defaults when overriding single flag', () => {
        const { result } = renderHook(() => ({
            newDashboard: useFeatureFlag('newDashboard'),
            betaCharts: useFeatureFlag('betaCharts')
        }), {
            wrapper: ({ children }) => <FlagProvider initialFlags={{ newDashboard: true }}>{children}</FlagProvider>
        });

        expect(result.current.newDashboard).toBe(true);
        expect(result.current.betaCharts).toBe(false);
    });
});
