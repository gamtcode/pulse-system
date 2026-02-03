export * from './dashboard';

// Re-exports Lead as the canonical domain type to avoid duplicate contracts across modules.
import { Lead } from '@/schemas/leadSchema';
export type { Lead };

import { DashboardStats } from './dashboard';

export interface DashboardApiResponse {
    stats: DashboardStats;
    data: Lead[];
    meta?: {
        total?: number;
        page?: number;
        limit?: number;
    };
}

export interface KernelData {
    id: string;
    title: string;
    content: string; // HTML payload rendered by the UI.
}

export interface LoginCredentials {
    instagramUser: string;
}

export interface AuthResponse {
    success: boolean;
    message?: string;
}
