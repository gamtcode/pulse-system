import React from 'react';
import { FeatureFlags } from '@/feature-flags/types';
import { defaultFeatureFlags } from '@/feature-flags/defaults';

// In-memory flags store for tests (reset via setup.ts afterEach)
let currentFlags: FeatureFlags = { ...defaultFeatureFlags };

export const setMockFlags = (partialFlags: Partial<FeatureFlags>): void => {
    currentFlags = { ...currentFlags, ...partialFlags };
};

export const resetMockFlags = (): void => {
    currentFlags = { ...defaultFeatureFlags };
};

export const getMockFlags = (): FeatureFlags => {
    return { ...currentFlags };
};

export function MockLDProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

export function useFlags(): FeatureFlags {
    return { ...currentFlags };
}
