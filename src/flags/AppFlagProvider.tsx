import React, { lazy, Suspense } from 'react';
import type { ComponentType } from 'react';
import { FlagProvider } from './FlagProvider';

type ProviderProps = { children?: React.ReactNode };

// Lazy load SDK provider to avoid bundling LD code when disabled
const RealFlagProvider = lazy<ComponentType<ProviderProps>>(() =>
    import('./RealFlagProvider').then(module => ({
        default: module.RealFlagProvider,
    }))
);

/**
 * Provider that selects between LaunchDarkly or static flags based on environment.
 * Falls back to static defaults when LD is not configured or in non-browser environments.
 */
export function AppFlagProvider({ children }: { children: React.ReactNode }) {
    const ldClientId = import.meta.env.VITE_LD_CLIENT_SIDE_ID;
    const isBrowser = typeof window !== 'undefined';

    // Conditionally render LaunchDarkly provider if client ID is available and it's a browser environment
    if (ldClientId && isBrowser) {
        return (
            <Suspense fallback={<FlagProvider>{children}</FlagProvider>}>
                <RealFlagProvider>
                    {children}
                </RealFlagProvider>
            </Suspense>
        );
    }

    // Fallback to static flag provider
    return (
        <FlagProvider>
            {children}
        </FlagProvider>
    );
}
