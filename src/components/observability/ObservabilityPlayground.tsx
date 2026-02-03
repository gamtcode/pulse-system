import React, { useState } from 'react';
import { useObservability } from '@/observability/AppObservabilityProvider';
import { AppErrorBoundary } from '@/components/error/AppErrorBoundary';

// Helper component that explodes on demand to test Boundary
const ExplodingComponent = () => {
    throw new Error('Playground: Boundary Error (Explosion)');
};

// Mini fallback for the local boundary test
const MiniFallback = () => (
    <div className="p-4 bg-red-900/20 border border-red-500/50 rounded text-red-400 text-sm">
        <strong className="block mb-1">Local Boundary Caught It!</strong>
        The error was contained here. The rest of the playground is still alive.
    </div>
);

const ObservabilityPlayground: React.FC = () => {
    const adapter = useObservability();
    const [shouldExplode, setShouldExplode] = useState(false);

    // 1. Sync JS Error
    const triggerSyncError = () => {
        throw new Error('Playground: Sync JS Error');
    };

    // 2. Uncaught Async Error (Real "Uncaught" via setTimeout)
    const triggerAsyncError = () => {
        setTimeout(() => {
            throw new Error('Playground: Async Uncaught Error (setTimeout)');
        }, 100);
    };

    // 3. Manual Report via Adapter (Cleanest way)
    const triggerManualReport = () => {
        adapter.reportError(new Error('Playground: Manual Report'), {
            source: 'Playground',
            action: 'Manual Button Click',
            timestamp: new Date().toISOString()
        });
        alert('Error reported to adapter (check Sentry/Console)');
    };

    // 4. Context Error (Enriched)
    const triggerContextError = () => {
        const user = { name: 'Test User', role: 'Tester' };
        try {
            // Simulating a logic failure
            throw new Error('Playground: Logic Failure with Context');
        } catch (err) {
            adapter.reportError(err, {
                severity: 'warning',
                feature: 'PlaygroundContext',
                user,
                meta: { attempts: 3, lastAttempt: 'now' }
            });
            alert('Context error reported (check tags/extras)');
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto animate-in fade-in duration-500">
            <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">🔭 Observability Playground</h2>
                <p className="text-gray-400">
                    Safe environment to generate errors and validate the pipeline.
                    <br />
                    <span className="text-xs text-gray-500 font-mono">
                        Adapter: {adapter.constructor.name}
                    </span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Panel 1: Runtime Errors */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors">
                    <h3 className="text-blue-400 font-medium mb-4 flex items-center gap-2">
                        <i className="bi bi-lightning-fill"></i> Runtime Crashes
                    </h3>
                    <div className="space-y-3">
                        <button
                            onClick={triggerSyncError}
                            className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded text-sm transition-colors text-left"
                        >
                            💥 Trigger Sync JS Error
                        </button>
                        <button
                            onClick={triggerAsyncError}
                            className="w-full px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/20 rounded text-sm transition-colors text-left"
                        >
                            ⏳ Trigger Uncaught Async
                        </button>
                    </div>
                </div>

                {/* Panel 2: Adapter Usage */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-500/30 transition-colors">
                    <h3 className="text-green-400 font-medium mb-4 flex items-center gap-2">
                        <i className="bi bi-code-square"></i> Adapter Contract
                    </h3>
                    <div className="space-y-3">
                        <button
                            onClick={triggerManualReport}
                            className="w-full px-4 py-2 bg-green-500/10 hover:bg-green-500/20 text-green-400 border border-green-500/20 rounded text-sm transition-colors text-left"
                        >
                            📤 Manual Report
                        </button>
                        <button
                            onClick={triggerContextError}
                            className="w-full px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded text-sm transition-colors text-left"
                        >
                            🏷️ Report with Context
                        </button>
                    </div>
                </div>

                {/* Panel 3: Error Boundary */}
                <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-purple-500/30 transition-colors">
                    <h3 className="text-purple-400 font-medium mb-4 flex items-center gap-2">
                        <i className="bi bi-shield-check"></i> Error Boundary
                    </h3>
                    <div className="space-y-3">
                        <div className="min-h-[80px] flex items-center justify-center border border-dashed border-white/10 rounded bg-black/20 p-2">
                            <AppErrorBoundary fallback={<MiniFallback />}>
                                {shouldExplode ? (
                                    <ExplodingComponent />
                                ) : (
                                    <span className="text-xs text-gray-500">Zone Safe</span>
                                )}
                            </AppErrorBoundary>
                        </div>
                        <button
                            onClick={() => setShouldExplode(true)}
                            className="w-full px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20 rounded text-sm transition-colors text-left"
                        >
                            💣 Explode Component
                        </button>
                        {shouldExplode && (
                            <button
                                onClick={() => setShouldExplode(false)}
                                className="w-full px-4 py-2 text-gray-500 hover:text-white text-xs text-center mt-2"
                            >
                                Reset
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ObservabilityPlayground;
