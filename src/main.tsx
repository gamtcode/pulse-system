import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'
import './index.css'
import { AppFlagProvider } from './flags/AppFlagProvider'
import { AppObservabilityProvider } from './observability/AppObservabilityProvider'
import { AppErrorBoundary } from './components/error/AppErrorBoundary'
import { SentryAdapter } from './observability/SentryAdapter'

// Initializes observability via the adapter to keep SDK imports centralized and fail-safe.
// Designed to be environment-aware without blocking the critical render path.
SentryAdapter.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppObservabilityProvider>
            <AppFlagProvider>
                <AppErrorBoundary>
                    <App />
                </AppErrorBoundary>
            </AppFlagProvider>
        </AppObservabilityProvider>
    </React.StrictMode>,
)
