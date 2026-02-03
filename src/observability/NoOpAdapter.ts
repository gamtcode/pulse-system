import { ObservabilityAdapter } from './types';

/**
 * Safe fallback observability adapter.
 * Performs no external operations and optionally logs in development for visibility.
 */
export class NoOpAdapter implements ObservabilityAdapter {
    reportError(error: unknown, context?: Record<string, unknown>): void {
        const isTest = import.meta.env.MODE === 'test';

        // Logs in dev (excluding test) to surface issues without external side effects.
        if (import.meta.env.DEV && !isTest) {
            console.groupCollapsed('[NoOpAdapter] Error Reported');
            console.error(error);
            if (context) console.table(context);
            console.groupEnd();
        }
    }

    updateUserContext(_userId: string | null): void {
        // Intentionally a no-op: this adapter does not persist identity context.
    }
}
