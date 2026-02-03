import * as Sentry from '@sentry/react';
import { ObservabilityAdapter } from './types';

/**
 * Sentry-backed implementation of the observability adapter.
 *
 * Architectural constraint: this is the only file that imports the Sentry SDK,
 * keeping the integration surface isolated and easy to swap or disable.
 */
export class SentryAdapter implements ObservabilityAdapter {
    /**
     * Initializes the Sentry SDK when running in an eligible environment.
     * Guarded by runtime config to avoid enabling telemetry in test/dev or without DSN.
     */
    static init(): void {
        try {
            const dsn = import.meta.env.VITE_SENTRY_DSN;
            const mode = import.meta.env.MODE;
            const isDev = import.meta.env.DEV;

            if (!dsn) return;
            if (mode === 'test') return;
            if (isDev) return;

            Sentry.init({
                dsn,
                integrations: [],
                environment: mode,
                tracesSampleRate: 0,
                replaysSessionSampleRate: 0,
                replaysOnErrorSampleRate: 0,
            });
        } catch (error) {
            if (import.meta.env.DEV) {
                console.warn('Sentry initialization failed:', error);
            }
        }
    }

    reportError(error: unknown, context?: Record<string, unknown>): void {
        Sentry.withScope((scope) => {
            if (context) {
                scope.setExtras(context);
            }
            Sentry.captureException(error);
        });
    }

    updateUserContext(userId: string | null): void {
        if (userId) {
            Sentry.setUser({ id: userId });
        } else {
            Sentry.setUser(null);
        }
    }
}
