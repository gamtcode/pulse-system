import { useContext } from 'react';
import { FlagContext } from './FlagProvider';
import { FeatureFlags } from '@/feature-flags';

/**
 * Hook to retrieve the value of a feature flag.
 * @param flag - The flag key to check.
 * @returns Boolean indicating if the feature is enabled.
 */
export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
    const context = useContext(FlagContext);

    if (context === undefined) {
        return false; // Fallback if context is not available (should never happen).
    }

    return context[flag];
}
