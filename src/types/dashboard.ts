export interface User {
    id?: string | number;
    name?: string;
    whatsapp?: string;
    username?: string;
    report?: string;
    createdAt?: string | Date;
    [key: string]: unknown;
}

export interface DashboardStats {
    totalLeads: number;
    withWhatsapp: number;
    withName: number;
    withDescription: number;
    funnel: {
        step4: number;
    };
    aba3_perfil: {
        situacao_profissional?: Record<string, number>;
        nivel_ia?: Record<string, number>;
        nivel_digital?: Record<string, number>;
        matriz_maturidade?: Record<string, number>;
        count_situacao?: number;
        count_ia?: number;
        count_digital?: number;
        [key: string]: Record<string, number> | number | undefined;
    };
    aba4_insights: {
        interesse_primario?: Record<string, number>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        objeto_principal?: Record<string, number> | any[];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        categoria_principal?: any; // Complex nested structures
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        intencao_busca?: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        analise_gatilhos?: any;
        dores_gatilhos?: Record<string, string>;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        [key: string]: any;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface DashboardFilters {
    searchName?: string;
    searchDescription?: string;
    pageSize?: number | string;
    page?: number;
    startDate?: string | null;
    endDate?: string | null;
    hasName?: boolean;
    hasWhatsapp?: boolean;
    hasInstagram?: boolean;
    hasDescription?: boolean;
    [key: string]: unknown;
}
