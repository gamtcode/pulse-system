import React, { Component, ErrorInfo, ReactNode } from 'react';
import { useObservability } from '@/observability/AppObservabilityProvider';
import { ObservabilityAdapter } from '@/observability/types';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

/**
 * Error boundary class component to handle rendering errors.
 * Reports caught errors to the observability service (e.g., Sentry).
 */
class ErrorBoundaryInner extends Component<{ adapter: ObservabilityAdapter } & Props, State> {
    constructor(props: { adapter: ObservabilityAdapter } & Props) {
        super(props);
        this.state = { hasError: false };
    }

    // React's built-in method to update state when an error is thrown
    static getDerivedStateFromError(_error: Error): State {
        return { hasError: true };
    }

    // Catches and reports errors using the observability adapter
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.props.adapter.reportError(error, {
            componentStack: errorInfo.componentStack,
            location: 'AppErrorBoundary'
        });
    }

    render() {
        if (this.state.hasError) {
            // Show fallback UI or default error message
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div role="alert" className="p-4 m-4 bg-red-50 border border-red-200 rounded text-red-900">
                    <h2 className="text-lg font-semibold">Something went wrong</h2>
                    <p className="text-sm">Please refresh the page or try again later.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

/**
 * Wrapper component that injects observability functionality
 * by using the custom hook `useObservability`.
 */
export function AppErrorBoundary(props: Props) {
    const adapter = useObservability();
    return <ErrorBoundaryInner {...props} adapter={adapter} />;
}
