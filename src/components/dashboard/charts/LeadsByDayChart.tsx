import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const defaultOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                color: '#9ca3af',
                font: { family: 'Poppins', size: 12 }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#fff',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 10,
            cornerRadius: 8,
        }
    },
    scales: {
        x: {
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y: {
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255, 255, 255, 0.05)' }
        }
    }
};

interface LeadsByDayChartProps {
    data: {
        labels: string[];
        values: number[];
    };
}

/** Daily lead capture line chart (expects pre-aggregated labels/values). */
const LeadsByDayChart: React.FC<LeadsByDayChartProps> = ({ data }) => {
    const chartData: ChartData<'line'> = {
        labels: data.labels,
        datasets: [
            {
                label: 'Leads Capturados',
                data: data.values,
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.15)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#3b82f6',
                pointBorderColor: '#fff',
                pointHoverRadius: 6,
            },
        ],
    };

    return (
        <div className="w-full h-[300px]">
            <Line options={defaultOptions} data={chartData} />
        </div>
    );
};

export default LeadsByDayChart;
