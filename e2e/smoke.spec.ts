import { test, expect } from '@playwright/test';

test.describe('PULSE System - Smoke Tests', () => {

    test('should load the Landing Page without errors', async ({ page }) => {
        // Collect console errors and assert at the end to avoid failing mid-navigation.
        const consoleErrors: string[] = [];
        page.on('console', msg => {
            if (msg.type() === 'error') consoleErrors.push(msg.text());
        });

        await page.goto('/');

        await expect(page).toHaveTitle(/PULSE System/);

        await expect(page.locator('main')).toBeVisible();

        expect(consoleErrors).toEqual([]);
    });

    test('should load the Dashboard and render critical components', async ({ page }) => {
        // Deterministic auth: seed localStorage before accessing protected routes.
        await page.goto('/'); // Establish origin so localStorage writes apply to this domain.
        await page.evaluate(() => {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loginTime', String(new Date().getTime()));
        });

        await page.goto('/dashboard');

        await expect(page.locator('#dashboard-root')).toBeVisible();

        await expect(page.getByRole('button', { name: 'Gerar Relatório' })).toBeVisible();

        await expect(page.locator('#dashboard-tabs')).toBeVisible();

        await expect(page.getByRole('button', { name: 'Relatório de Leads' })).toBeVisible();

        await expect(page.locator('table')).toBeVisible();
    });

});
