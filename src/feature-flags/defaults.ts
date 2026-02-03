/**
 * Default values for all feature flags.
 * These flags are used as fallback when LaunchDarkly is unavailable.
 */
import { FeatureFlags } from './types';

export const defaultFeatureFlags: FeatureFlags = {
    newDashboard: false,
    betaCharts: false,
    ui_badge_enabled: false,
};
