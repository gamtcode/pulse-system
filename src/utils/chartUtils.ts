import { ChartOptions, ChartData, TooltipItem } from 'chart.js';
import { PALETTE } from '@/constants/chartConfig';

export const calculatePercent = (value: number, total: number): string => total === 0 ? '0%' : Math.round((value / total) * 100) + '%';
export const calculatePercentVal = (value: number, total: number): number => total === 0 ? 0 : Math.round((value / total) * 100);

export const donutOptions: ChartOptions<'doughnut'> = {
    plugins: {
        legend: { display: false },
        tooltip: {
            enabled: true,
            callbacks: {
                title: function (context: TooltipItem<'doughnut'>[]) {
                    return context[0]?.label || '';
                },
                label: function (context: TooltipItem<'doughnut'>) {
                    const value = Number(context.raw);
                    const dataset = context.chart.data.datasets[0]!;
                    const dataArray = dataset.data as number[];
                    const total = dataArray.reduce((a: number, b: number) => a + Number(b), 0);
                    if (total === 0) return `0 (0%)`;
                    const percentage = Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        }
    },
    cutout: '70%',
    animation: { animateScale: true, animateRotate: true }
};

export const polarOptions: ChartOptions<'polarArea'> = {

    layout: { padding: { bottom: 30, top: 10, left: 10, right: 10 } },
    animation: { animateRotate: true, animateScale: true, duration: 1200, easing: 'easeOutQuart' },
    scales: { r: { grid: { color: 'rgba(255, 255, 255, 0.05)' }, ticks: { display: false } } },
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: function (context: TooltipItem<'polarArea'>) {
                    const value = Number(context.raw);
                    const dataset = context.chart.data.datasets[0]!;
                    const dataArray = dataset.data as number[];
                    const total = dataArray.reduce((a: number, b: number) => a + Number(b), 0);
                    const percentage = total === 0 ? 0 : Math.round((value / total) * 100);
                    return `${value} (${percentage}%)`;
                }
            }
        }
    }
};

export const createDonutData = (val: number, total: number, colorIndex: number): ChartData<'doughnut'> => ({
    labels: ['Presente', 'Ausente'],
    datasets: [{ data: [val, Math.max(0, total - val)], backgroundColor: [PALETTE[colorIndex] || PALETTE[0], 'rgba(255, 255, 255, 0.05)'], borderWidth: 0 }]
});

export const getProfileBarOptions = (dataValues: number[]): ChartOptions<'bar'> => {
    const maxValue = Math.max(...(dataValues || [0]));

    const calculateScale = (max: number) => {
        if (max === 0) return { max: 100, stepSize: 20 };
        const roughStep = max / 5;
        const magnitude = Math.pow(10, Math.floor(Math.log10(roughStep)));
        const normalizedStep = roughStep / magnitude;

        let niceStep;
        if (normalizedStep <= 1) niceStep = 1;
        else if (normalizedStep <= 2) niceStep = 2;
        else if (normalizedStep <= 2.5) niceStep = 2.5;
        else if (normalizedStep <= 5) niceStep = 5;
        else niceStep = 10;

        const stepSize = niceStep * magnitude;
        const niceMax = Math.ceil(max / stepSize) * stepSize;

        return { max: niceMax, stepSize };
    };

    const { max, stepSize } = calculateScale(maxValue);

    return {
        indexAxis: 'y',
        maintainAspectRatio: false,
        layout: { padding: { left: 10, right: 20 } },
        animation: { duration: 1200, easing: 'easeOutQuart' },
        plugins: { legend: { display: false } },
        scales: {
            x: {
                grid: { color: 'rgba(255, 255, 255, 0.05)' },
                type: 'linear',
                beginAtZero: true,
                max: max,
                ticks: {
                    color: '#9ca3af',
                    stepSize: stepSize,
                    precision: 0
                }
            },
            y: {
                grid: { display: false },
                ticks: {
                    color: '#9ca3af',
                    autoSkip: false,
                    mirror: false,
                    callback: function (val) {
                        const label = this.getLabelForValue(val as number);
                        if (typeof label === 'string' && label.length > 15) {
                            const words = label.split(' ');
                            const lines: string[] = [];
                            let line = '';
                            words.forEach(word => {
                                if ((line + word).length > 20) {
                                    lines.push(line.trim());
                                    line = '';
                                }
                                line += word + ' ';
                            });
                            lines.push(line.trim());
                            return lines;
                        }
                        return label;
                    }
                }
            }
        }
    };
};

// Master taxonomies used to keep chart categories stable across transforms.

export const MASTER_LISTS = {
    SITUACAO: ['TOTAL_INFORMADO', 'BUSCANDO_OPORTUNIDADE', 'POSSUI_NEGOCIO', 'AUTONOMO_FREELANCER', 'FUNCIONARIO_CLT', 'ESTUDANTE_HOBBISTA'],
    IA: ['TOTAL_INFORMADO', 'INICIANTE', 'USUARIO_CASUAL', 'INTERMEDIARIO', 'AVANCADO'],
    DIGITAL: ['TOTAL_INFORMADO', 'POUCA', 'NENHUMA', 'INTERMEDIARIA', 'AVANCADA']
};

export const LABELS_MAP: { [key: string]: string } = {
    'TOTAL_INFORMADO': 'Total Informado', 'BUSCANDO_OPORTUNIDADE': 'Desempregado ou Transição',
    'POSSUI_NEGOCIO': 'Possui Negócio', 'AUTONOMO_FREELANCER': 'Autônomo ou Freelancer',
    'FUNCIONARIO_CLT': 'Funcionário CLT', 'ESTUDANTE_HOBBISTA': 'Estudante ou Hobbista',
    'INICIANTE': 'Iniciante', 'USUARIO_CASUAL': 'Usuário Casual', 'INTERMEDIARIO': 'Intermediário',
    'AVANCADO': 'Avançado', 'POUCA': 'Pouco', 'NENHUMA': 'Nenhum',
    'INTERMEDIARIA': 'Intermediário', 'AVANCADA': 'Avançado', 'GERAR_RENDA': 'Gerar Renda',
    'OTIMIZAR_NEGOCIO_TRABALHO': 'Otimizar Negócio ou Trabalho', 'APRENDIZADO_CURIOSIDADE': 'Desenvolver Habilidades'
};

export const formatLabel = (key: string) => LABELS_MAP[key] || key;

export const buildProfileData = (sourceData: Record<string, number> | undefined, masterList: string[]) => {
    if (!sourceData) return { labels: ['Aguardando...'], data: [0] };
    const labels = masterList.map(key => formatLabel(key));
    const data = masterList.map(key => sourceData[key] || 0);
    return { labels, data };
};

export interface BubblePoint {
    x: string;
    y: string;
    r: number;
    rawVal: number;
}

export const processBubbleData = (matriz: Record<string, number> | undefined): ChartData<'bubble'> => {
    if (!matriz) return { datasets: [] };

    const colorMap: Record<string, string> = {
        [MASTER_LISTS.IA[1] as string]: PALETTE[1] || '#3b82f6',
        [MASTER_LISTS.IA[2] as string]: PALETTE[2] || '#3b82f6',
        [MASTER_LISTS.IA[3] as string]: PALETTE[3] || '#3b82f6',
        [MASTER_LISTS.IA[4] as string]: PALETTE[4] || '#3b82f6'
    };

    const datasets: ChartData<'bubble'>['datasets'] = [];
    MASTER_LISTS.IA.slice(1).forEach(iaKey => {
        const points: BubblePoint[] = [];
        MASTER_LISTS.DIGITAL.slice(1).forEach(digKey => {
            const comboKey = `${digKey} | ${iaKey}`;
            const val = matriz[comboKey] || 0;
            if (val > 0) {
                points.push({
                    x: formatLabel(digKey),
                    y: formatLabel(iaKey),
                    r: Math.max(5, Math.sqrt(val) * 8),
                    rawVal: val
                });
            }
        });
        if (points.length > 0) {
            datasets.push({
                label: formatLabel(iaKey),
                data: points as unknown as { x: number; y: number; r: number }[],
                backgroundColor: colorMap[iaKey] || PALETTE[0],
                borderColor: 'transparent'
            });
        }
    });
    return { datasets };
};
