import { AuthResponse } from '@/types';

const N8N_LOGIN_WEBHOOK_URL = 'https://webhook.gamt.click/webhook/login';

export const authService = {
    /**
     * Authenticates a user through the login webhook.
     *
     * @param instagramUser - Username credential used by the authentication flow.
     * @param password - User password.
     * @returns Authentication response payload on success.
     * @throws Error on network failures or non-2xx responses.
     */
    async login(instagramUser: string, password: string): Promise<AuthResponse> {
        const response = await fetch(N8N_LOGIN_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ instagramUser, password })
        });

        if (!response.ok) throw new Error('Erro na rede');
        return await response.json();
    }
};
