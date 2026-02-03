import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const defaultOptions: ChartOptions<'bar'> = {
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
        }
    },
    scales: {
        x: {
            ticks: { color: '#64748b' },
            grid: { display: false }
        },
        y: {
            ticks: { color: '#64748b' },
            grid: { color: 'rgba(255, 255, 255, 0.05)' }
        }
    }
};

interface LeadsByStatusChartProps {
    data: {
        labels: string[];
        values: number[];
    };
}

/** Bar chart: lead volume by status (expects pre-aggregated labels/values). */
const LeadsByStatusChart: React.FC<LeadsByStatusChartProps> = ({ data }) => {
    const chartData: ChartData<'bar'> = {
        labels: data.labels,
        datasets: [
            {
                label: 'Volume por Status',
                data: data.values,
                backgroundColor: [
                    'rgba(59, 130, 246, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(245, 158, 11, 0.7)',
                    'rgba(239, 68, 68, 0.7)',
                ],
                borderRadius: 6,
                borderWidth: 0,
            },
        ],
    };

    return (
        <div className="w-full h-[300px]">
            <Bar options={defaultOptions} data={chartData} />
        </div>
    );
};

export default LeadsByStatusChart;
