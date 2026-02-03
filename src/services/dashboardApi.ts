import { DashboardFilters, DashboardApiResponse } from '@/types';
import { leadSchema } from '@/schemas/leadSchema';

const API_URL = 'https://webhook.gamt.click/webhook/query';

/**
 * Fetches dashboard data from the backend webhook.
 *
 * @param filters - Filter parameters from the UI state/store.
 * @returns A promise resolving to dashboard data.
 * @throws Error on non-OK HTTP responses or network failures.
 * @throws Schema validation errors when the response payload violates the lead schema contract.
 */
export const fetchDashboardData = async (filters: DashboardFilters): Promise<DashboardApiResponse> => {
    try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const startDateISO = filters.startDate ? new Date(filters.startDate).toISOString() : null;
        const endDateISO = filters.endDate ? new Date(filters.endDate).toISOString() : null;

        const payload = {
            startDate: startDateISO,
            endDate: endDateISO,
            userTimezone: userTimezone,
            hasWhatsapp: filters.hasWhatsapp,
            hasName: filters.hasName,
            hasInstagram: filters.hasInstagram,
            hasDescription: filters.hasDescription,
            searchName: filters.searchName,
            searchDescription: filters.searchDescription,
            page: filters.page,
            limit: filters.pageSize
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        // Validates the payload before UI consumption to enforce the response contract.
        if (data && Array.isArray(data.data)) {
            try {
                leadSchema.array().parse(data.data);
            } catch (validationError) {
                console.error("Zod Validation Error:", validationError);
                throw validationError;
            }
        }

        return data as DashboardApiResponse;
    } catch (error) {
        console.error('Service Error:', error);
        throw error;
    }
};
