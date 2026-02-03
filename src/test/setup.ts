import '@testing-library/jest-dom';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import { resetMockFlags } from './mocks/LaunchDarklyMock';

// Route LaunchDarkly SDK imports to our in-memory mock for deterministic tests.
vi.mock('launchdarkly-react-client-sdk', async () => {
    const mock = await import('./mocks/LaunchDarklyMock');
    return mock;
});

afterEach(() => {
    cleanup();
    resetMockFlags();
});
