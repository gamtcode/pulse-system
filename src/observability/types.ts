/**
 * Contract definitions for observability adapters.
 * Vendor-agnostic by design: no external SDK imports in this file.
 */

export interface ObservabilityAdapter {
    /**
     * Reports an error to the observability backend.
     *
     * @param error - Original error value thrown/captured by the application.
     * @param context - Optional metadata to support triage and debugging.
     */
    reportError(error: unknown, context?: Record<string, unknown>): void;

    /**
     * Updates user context for error correlation.
     *
     * @param userId - User identifier, or null to clear the current user context.
     */
    updateUserContext(userId: string | null): void;
}
