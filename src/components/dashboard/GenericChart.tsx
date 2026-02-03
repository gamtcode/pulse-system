import React, { useEffect, useRef } from 'react';
import { Chart, ChartType, ChartData, ChartOptions } from 'chart.js/auto';

interface GenericChartProps {
    type: ChartType;
    data: ChartData;
    options?: ChartOptions;
    id?: string;
    height?: string;
}

/**
 * React wrapper around Chart.js that manages the imperative chart lifecycle.
 *
 * Design notes:
 * - Avoids initializing the chart while the container is still 0x0.
 * - Drives sizing deterministically (Chart.js responsive mode disabled).
 * - Guards against ResizeObserver callbacks firing after unmount.
 */
const GenericChart: React.FC<GenericChartProps> = ({ type, data, options, id, height = '200px' }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const chartInstanceRef = useRef<Chart | null>(null);
    const [isReady, setIsReady] = React.useState(false);

    // Wait for valid container dimensions before creating the Chart.js instance.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let resizeRaf: number;

        const observer = new ResizeObserver((entries) => {
            if (resizeRaf) cancelAnimationFrame(resizeRaf);

            resizeRaf = requestAnimationFrame(() => {
                const entry = entries[entries.length - 1];
                if (!entry) return;

                const { width, height } = entry.contentRect;

                // Avoid Chart.js initialization while layout is still settling.
                if (!isReady && !chartInstanceRef.current && width > 10 && height > 10) {
                    setIsReady(true);
                    if (canvasRef.current) {
                        canvasRef.current.width = width;
                        canvasRef.current.height = height;
                    }
                    return;
                }

                const chart = chartInstanceRef.current;
                if (chart && width > 10 && height > 10 && chart.canvas && chart.canvas.isConnected) {
                    try {
                        chart.resize(width, height);
                    } catch {
                        // Swallow unmount race conditions.
                    }
                }
            });
        });

        observer.observe(container);

        return () => {
            observer.disconnect();
            if (resizeRaf) cancelAnimationFrame(resizeRaf);
        };
        // isReady is intentionally omitted: adding it would cause the observer to be re-created after each state change.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Create chart instance when ready.
    useEffect(() => {
        if (!isReady || !canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: type,
            data: data,
            options: {
                ...options,
                // Sizing is controlled by the container + manual resize calls above.
                responsive: false,
                maintainAspectRatio: false,
                // Preserve caller-provided animation config while ensuring object shape.
                animation: options?.animation || {}
            }
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
                chartInstanceRef.current = null;
            }
        };
    }, [isReady, data, options, type]);

    return (
        <div ref={containerRef} id={id} style={{ position: 'relative', height: height, width: '100%', minHeight: height }}>
            <canvas ref={canvasRef} style={{ display: 'block' }}></canvas>
        </div>
    );
};

export default GenericChart;
