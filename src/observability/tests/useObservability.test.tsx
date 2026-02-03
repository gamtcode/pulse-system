import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { AppObservabilityProvider, useObservability } from '../AppObservabilityProvider';

/**
 * Verifies the observability wiring end-to-end.
 *
 * Ensures `useObservability()` resolves an adapter under the provider and that
 * the test environment uses the NoOp implementation (no side effects).
 */
describe('Observability Integration', () => {

    const TestConsumer = () => {
        const adapter = useObservability();

        useEffect(() => {
            // Smoke-call to ensure the adapter API is safe to invoke in tests.
            adapter.reportError(new Error('Test Error from Consumer'));
        }, [adapter]);

        return (
            <div>
                <span data-testid="adapter-name">{adapter.constructor.name}</span>
            </div>
        );
    };

    it('provides the NoOpAdapter in test environment', () => {
        render(
            <AppObservabilityProvider>
                <TestConsumer />
            </AppObservabilityProvider>
        );

        const element = screen.getByTestId('adapter-name');

        expect(element).toHaveTextContent('NoOpAdapter');
    });

    it('does not explode when useObservability is used', () => {
        const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => { });
        // NoOp should not throw or emit console noise when invoked.

        render(
            <AppObservabilityProvider>
                <TestConsumer />
            </AppObservabilityProvider>
        );

        expect(consoleSpy).not.toHaveBeenCalled();
        consoleSpy.mockRestore();
    });
});
