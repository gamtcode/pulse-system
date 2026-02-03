import React, { createContext, useContext, useMemo } from 'react';
import { ObservabilityAdapter } from './types';
import { NoOpAdapter } from './NoOpAdapter';
import { SentryAdapter } from './SentryAdapter';

const ObservabilityContext = createContext<ObservabilityAdapter | null>(null);

/**
 * Accesses the observability adapter from context.
 * Falls back to a no-op adapter when no provider is mounted.
 *
 * @returns An {@link ObservabilityAdapter} implementation for the current environment.
 */
export function useObservability(): ObservabilityAdapter {
    const context = useContext(ObservabilityContext);
    if (!context) {
        return new NoOpAdapter();
    }
    return context;
}

/**
 * Provides the observability adapter for the application.
 * Selects a no-op implementation for non-production contexts and a full adapter when configured.
 */
export function AppObservabilityProvider({ children }: { children: React.ReactNode }) {
    const adapter = useMemo(() => {
        try {
            const dsn = import.meta.env.VITE_SENTRY_DSN;
            const mode = import.meta.env.MODE;
            const isDev = import.meta.env.DEV;

            if (mode === 'test') {
                return new NoOpAdapter();
            }

            if (isDev) {
                return new NoOpAdapter();
            }

            // Avoids enabling observability without an explicit configuration.
            if (!dsn) {
                return new NoOpAdapter();
            }

            return new SentryAdapter();
        } catch (error) {
            // Keeps startup resilient: failures in observability must not break the app shell.
            console.error('Failed to initialize Observability Adapter:', error);
            return new NoOpAdapter();
        }
    }, []);

    return (
        <ObservabilityContext.Provider value={adapter}>
            {children}
        </ObservabilityContext.Provider>
    );
}
