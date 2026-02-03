import React, { createContext, useMemo } from 'react';
import { FeatureFlags, defaultFeatureFlags } from '@/feature-flags';

export const FlagContext = createContext<FeatureFlags>(defaultFeatureFlags);

interface FlagProviderProps {
    children: React.ReactNode;
    initialFlags?: Partial<FeatureFlags>;
}

/**
 * Provides feature flags via React context.
 * Defaults come from `defaultFeatureFlags` and can be partially overridden via `initialFlags`.
 */
export function FlagProvider({ children, initialFlags = {} }: FlagProviderProps) {
    // Memoize the merged object to avoid re-render cascades in consumers on stable overrides.
    const flags = useMemo(() => {
        return {
            ...defaultFeatureFlags,
            ...initialFlags
        };
    }, [initialFlags]);

    return <FlagContext.Provider value={flags}>{children}</FlagContext.Provider>;
}
