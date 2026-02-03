import React from 'react';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';
import { FeatureFlags, defaultFeatureFlags } from '@/feature-flags';
import { FlagProvider } from './FlagProvider';

/**
 * Bridges external flag keys into the internal `FeatureFlags` contract.
 * Resolves naming differences (e.g., snake_case vs camelCase) and enforces boolean-only flags.
 */
function normalizeKey(key: string): string {
    return key.replace(/_/g, '').toLowerCase();
}

function AdapterComponent(props: { children?: React.ReactNode }) {
    const { children } = props;
    const ldFlags = useFlags();

    const safeFlags: Partial<FeatureFlags> = {};
    const validKeys = Object.keys(defaultFeatureFlags) as Array<keyof FeatureFlags>;

    // Only map keys that exist in the internal contract to prevent accidental flag surface area.
    validKeys.forEach((key) => {
        const normalizedContractKey = normalizeKey(key);

        const match = Object.entries(ldFlags ?? {}).find(([ldKey]) => {
            return normalizeKey(ldKey) === normalizedContractKey;
        });

        if (match) {
            const [, value] = match;
            // Enforce the boolean contract expected by `FeatureFlags` (ignore non-boolean values).
            if (typeof value === 'boolean') {
                safeFlags[key] = value;
            }
        }
    });

    return <FlagProvider initialFlags={safeFlags}>{children}</FlagProvider>;
}

export const RealFlagProvider = withLDProvider({
    clientSideID: import.meta.env.VITE_LD_CLIENT_SIDE_ID || '',
    user: {
        key: 'local-dev-user',
        name: 'Local Developer',
        anonymous: true,
    },
    options: {
        bootstrap: 'localStorage',
    },
})(AdapterComponent);
