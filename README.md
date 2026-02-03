# PULSE System

**Prospective User & Lead Strategy Engine**

<div align="justify">A production-grade, event-driven agentic system for prospect intelligence, lead qualification, and performance insights — operating end-to-end across prospecting, conversion, and analytics. In production, serving thousands of users every month. Designed with a strong emphasis on architectural robustness, observability, and long-term maintainability.</div><br>

![CI Status](https://github.com/gamtcode/pulse-system/actions/workflows/ci.yaml/badge.svg)

---

## Overview

<div align="justify">The PULSE System is an event-driven operational intelligence architecture composed of 22 orchestrated AI agents organized into independent “execution cores” that turn events (messages, comments, postbacks, and channel signals) into traceable decisions — from trigger to persisted outcome — with state governance, continuity, and reliability. Rather than behaving like a reactive bot, the system operates as a strategic execution and prospecting engine (Prospective User & Lead Strategy Engine), designed to support multi-channel operations with a predictable pipeline and end-to-end consistency.

At its core, PULSE combines a state-machine–driven conversational engine with a parallel mesh of NLU agents to convert free-form language into operational signals (profile, intent, context, contact) without blocking the conversation flow. This enables progressive psychographic and social profiling: with every interaction, the system understands, qualifies, validates, and persists data while maintaining an auditable trail of “what was inferred,” “what was confirmed,” and “what was stored.”

As an applied intelligence layer, PULSE delivers the data infrastructure for continuous ETL and high-performance BI visualization, with stable output contracts (KPIs, funnels, trends, pagination) and backend-consolidated computation to ensure consistency and speed. In parallel, it supports consultative selling by driving structured discovery and contextual organization with operational rigor — connecting acquisition, qualification, and business intelligence in a single system.</div>

---

## Design Philosophy

### Why Client-Side Rendering (SPA)?

This project deliberately uses **Client-Side Rendering (SPA)** via React + Vite:

| Approach | Trade-off | This Project |
| --- | --- | --- |
| **SSG** | Zero runtime, fast load | ❌ Not suitable for real-time dashboards |
| **SSR** | Server load, hydration | ❌ Unnecessary complexity for internal tools |
| **CSR (SPA)** | Rich interactivity, state persistence | ✅ Perfect fit for BI/SaaS |

**Rationale:**
- **High Interactivity:** Complex charts, kanban boards, and real-time status updates rely on persistent client state.
- **Decoupled Architecture:** Acts as a pure consumer of valid API contracts, allowing independent backend evolution.
- **Operational Resilience:** Static distribution eliminates Node.js runtime maintenance from the frontend layer.

### No Overengineering

Intentionally avoided:

- **Micro-frontends**: A modular monolith is sufficient and easier to maintain for this team size.
- **Complex State Machines**: Zustand handles global state effectively without Redux boilerplate.
- **Server Components**: Focus remains on rich client-side interactivity and immediate feedback.

---

## Technical Highlights

### 🎯 Observability Playground

The `ObservabilityPlayground` component provides a safe harness for testing error boundaries and Sentry integration:

```
UI Action → SentryAdapter → Console/Network
     ↑            |
     └────────────┘
```

**Key features:**
- Simulates synchronous crashing errors to test React Error Boundaries.
- Triggers strictly typed asynchronous failures.
- Verifies "NoOp" behavior in development vs. real transmission in production.
- Ensures observability failures never degrade the user experience.

### 📊 Chart Stress Testing

Leveraging Playwright for rigorous performance validation:

- **Physics Simulation**: Validates 60fps rendering under high data load.
- **Stress Tests**: Automates rapid tab switching to detect memory leaks or canvas context losses.
- **Regression Prevention**: Ensures new chart types do not introduce layout shifts or console errors.

---

## Technology Stack

### Core

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI framework with concurrent features |
| TypeScript | 5.9 | Strict typing and compile-time safety |
| Vite | 7 | Fast development server and optimized bundling |

### State & UI

| Technology | Purpose |
|------------|---------|
| Zustand | Lightweight global state management |
| Tailwind CSS | v4 with native `@theme` design tokens |
| Chart.js | Canvas-based data visualization |
| Lucide React | Icon library with tree-shaking support |

### Infrastructure

| Technology | Purpose |
|------------|---------|
| Sentry | Error monitoring (adapter-isolated) |
| LaunchDarkly | Feature flags (mock-first architecture) |
| Zod | Runtime schema validation |

### Testing

| Technology | Purpose |
|------------|---------|
| Vitest | Unit and integration tests |
| Testing Library | Component behavior testing |
| Playwright | End-to-end and smoke tests |

---

## Architecture

### Project Structure

```
src/
├── components/     # React components (layout + domain)
├── pages/          # Route components
├── hooks/          # Custom hooks
├── store/          # Zustand stores
├── services/       # API layer
├── schemas/        # Zod validation schemas
├── types/          # TypeScript definitions
├── flags/          # Feature flag abstraction
└── observability/  # Error tracking abstraction
```

### Component Categories

| Category | Examples | Responsibility |
| --- | --- | --- |
| **Layout** | `NavBar`, `Sidebar` | App shell, navigation, and responsiveness |
| **Dashboard** | `BusinessROI`, `EventArchitecture` | Domain-specific visualization & business logic |
| **Primitives** | `Card`, `Badge` | Reusable UI atoms with consistent styling |
| **Infrastructure** | `SentryAdapter`, `FlagProvider` | Technical foundations and external integrations |

### Adapter Pattern

External SDKs are never imported directly into domain code. Every integration follows a strict pattern:

- **Interface** — SDK-agnostic contract
- **Adapter** — Vendor-specific implementation
- **NoOp Fallback** — Silent fallback for test/dev
- **Safe Wiring** — Runtime environment detection

This applies to Sentry, LaunchDarkly, and any future third-party integration.

### Design System

Tailwind CSS 4 with a CSS-first approach:

- Design tokens defined in `src/index.css` using `@theme`
- Custom animations and glassmorphism utilities
- Responsive hyphenation rules
- Comprehensive print styles for reports

---

## Feature Flags

**Pattern:** Mock-First + Adapter-Based

The application never imports LaunchDarkly directly. Flags always have local defaults, and tests never depend on the real SDK.

This enables local development without credentials, deterministic testing, and safe gradual rollouts.

---

## Observability

**Pattern:** Adapter-Isolated

- Single import point for Sentry SDK
- No crashes if observability fails
- Silent operation in tests
- Environment-aware behavior
- **Observability Playground** included for internal validation

---

## Testing Strategy

### Testing Pyramid

1. **Unit Tests** — Business logic, hooks, isolated components
2. **Integration Tests** — Component collaboration, state + UI interaction
3. **E2E Tests** — Critical paths (smoke) and stress testing (charts)

### Infrastructure

- Centralized setup with mock-first providers
- Silent observability in tests
- Zero external network dependency

---

## CI/CD Pipeline

### Continuous Integration

Quality gate on every push and pull request:

- ESLint static analysis
- Vitest unit tests
- Production build
- Playwright E2E smoke tests

### Deployment

- Static build output (`dist/`)
- Automated FTP deployment via GitHub Actions
- Compatible with any static hosting (HostGator, Vercel, Netlify)

---

## Scope

### Included

- **Complete Frontend Architecture**: Everything from the Vite build to the component tree.
- **Mock-First Infrastructure**: Feature flags and reliability layers built for testability.
- **Operational Intelligence Dashboard**: All visualization and reporting views.
- **Automated Pipeline**: CI/CD workflows for quality and deployment.

### Intentionally Out of Scope

- **Backend API Implementation**: This repository contains only the frontend consumer; the backend is a separate service.
- **Authentication Logic**: Auth is managed via `useAuth` hook contracts, assuming a pre-authenticated session or external provider.
- **Global State Persistence**: Session storage is prioritized over local storage for security.

---

## Development

```bash
# Install dependencies
npm ci

# Development server
npm run dev

# Run tests
npm test

# E2E tests
npm run test:e2e

# Production build
npm run build
```

---

## Production Preview

**[pulse.architecode.com](https://pulse.architecode.com)**

---

## License

Proprietary software. All rights reserved.

---

<p align="center">
  <sub>Developed by <a href="https://architecode.com"><strong>Architecode</strong></a> — Software Architecture & Engineering</sub>
</p>