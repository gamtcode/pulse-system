import React from 'react';

interface KpiCardProps {
    title: string;
    value: string | number;
    subtext?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, subtext }) => {
    return (
        <div className="glass-card hover:scale-[1.02] transition-transform duration-300">
            <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">{title}</h3>
                <p className="text-3xl font-bold text-white mb-2">{value}</p>
                <p className="text-xs text-gray-500">{subtext}</p>
            </div>
        </div>
    );
};

export default KpiCard;
