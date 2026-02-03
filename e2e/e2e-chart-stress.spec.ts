import { test, expect } from '@playwright/test';

test.describe('PULSE System - Chart Stress Tests @stress', () => {
    test('should survive rapid tab switching and zoom stress without errors', async ({ page, context }) => {
        test.setTimeout(120000); // Extends timeout to accommodate the stress loop.

        // Collect errors during the run and assert only at the end to reduce flakiness.
        const consoleErrors: string[] = [];
        const pageErrors: Error[] = [];

        page.on('console', (msg) => {
            if (msg.type() === 'error') {
                consoleErrors.push(msg.text());
            }
        });

        page.on('pageerror', (error) => {
            pageErrors.push(error);
        });

        // Deterministic auth: pre-seed storage before navigation to avoid login race conditions.
        await context.addInitScript(() => {
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('loginTime', String(Date.now()));
        });

        await page.goto('/dashboard');

        // Gate interactions on a stable root node to avoid acting on partial renders.
        await expect(page.locator('#dashboard-root')).toBeVisible({ timeout: 30000 });

        // Bootstrap the first lazy-loaded tab to stabilize subsequent tab switching.
        console.log('Bootstrapping Stats Tab...');

        const statsButton = page.getByRole('button', { name: /Performance de Captura/i });

        await expect(statsButton).toBeAttached({ timeout: 30000 });
        await expect(statsButton).toBeVisible({ timeout: 30000 });

        // Avoid scrollIntoViewIfNeeded: it can flake on React re-renders and stale handles.
        // click() already auto-scrolls and auto-waits.
        await statsButton.click({ trial: true });
        await statsButton.click();

        // Deterministic anchor: wait for tab content to mount before starting the stress loop.
        await page.locator('[data-tab-content="stats"]').waitFor({ state: 'attached', timeout: 30000 });
        console.log('Stats Tab Bootstrapped.');

        const tabs: Array<'stats' | 'profile' | 'insights'> = ['stats', 'profile', 'insights'];
        const iterations = 3;

        console.log('Starting Stress Loop...');
        for (let i = 0; i < iterations; i++) {
            for (const tab of tabs) {
                const tabButton = page.getByRole('button', { name: getTabLabelRegex(tab) });

                await expect(tabButton).toBeAttached({ timeout: 30000 });
                await tabButton.click({ trial: true });
                await tabButton.click();

                await page.locator(`[data-tab-content="${tab}"]`).waitFor({ state: 'attached', timeout: 30000 });
            }
        }
        console.log('Stress Loop Completed.');

        // Simulate zoom-like pressure via viewport resizing to exercise resize observers.
        // Avoid arbitrary timeouts; resizing should trigger observers deterministically.
        await page.setViewportSize({ width: 800, height: 600 });
        await page.setViewportSize({ width: 1200, height: 800 });
        await page.setViewportSize({ width: 1920, height: 1080 });

        // Assert at the end so intermediate noise is captured without aborting the run.
        if (consoleErrors.length > 0) {
            console.error('Captured Console Errors:', consoleErrors);
        }
        if (pageErrors.length > 0) {
            console.error('Captured Page Errors:', pageErrors);
        }

        expect(consoleErrors).toHaveLength(0);
        expect(pageErrors).toHaveLength(0);
    });
});

function getTabLabelRegex(id: 'stats' | 'profile' | 'insights'): RegExp {
    const map: Record<typeof id, RegExp> = {
        stats: /Performance de Captura/i,
        profile: /Análise de Perfil/i,
        insights: /Insights de Conteúdo/i,
    };
    return map[id];
}
