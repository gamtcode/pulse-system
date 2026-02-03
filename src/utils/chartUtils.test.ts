import { describe, it, expect } from 'vitest';
import { buildProfileData, processBubbleData, calculatePercent, MASTER_LISTS, BubblePoint } from './chartUtils';

describe('Chart Utils Validation', () => {

    describe('calculatePercent', () => {
        it('should calculate percentage string correctly', () => {
            expect(calculatePercent(10, 100)).toBe('10%');
            expect(calculatePercent(1, 3)).toBe('33%');
        });

        it('should handle division by zero', () => {
            expect(calculatePercent(50, 0)).toBe('0%');
        });
    });

    describe('buildProfileData', () => {
        const masterList = ['A', 'B', 'C'];

        it('should map values correctly (Happy Path)', () => {
            const source = { 'A': 10, 'B': 20, 'C': 30 };
            const result = buildProfileData(source, masterList);
            expect(result.data).toEqual([10, 20, 30]);
            expect(result.labels).toEqual(['A', 'B', 'C']);
        });

        it('should handle missing keys by returning 0', () => {
            const source = { 'A': 10 };
            const result = buildProfileData(source, masterList);
            expect(result.data).toEqual([10, 0, 0]);
        });

        it('should handle undefined source data', () => {
            const result = buildProfileData(undefined, masterList);
            expect(result.labels).toEqual(['Aguardando...']);
            expect(result.data).toEqual([0]);
        });
    });

    describe('processBubbleData', () => {
        it('should return empty datasets if matrix is undefined', () => {
            const result = processBubbleData(undefined);
            expect(result.datasets).toEqual([]);
        });

        it('should process matrix data into bubble points', () => {
            /**
             * We intentionally derive keys from MASTER_LISTS to keep this test aligned with
             * the production taxonomy. If the canonical order/labels change, this test should
             * fail and force a conscious update (instead of silently drifting).
             */
            const iaKey = MASTER_LISTS.IA[1];
            const digKey = MASTER_LISTS.DIGITAL[1];
            const comboKey = `${digKey} | ${iaKey}`;

            const matrix = {
                [comboKey]: 5
            };

            const result = processBubbleData(matrix);
            expect(result.datasets.length).toBeGreaterThan(0);

            const dataset = result.datasets.find(d => d.label === 'Iniciante');
            expect(dataset).toBeDefined();

            if (dataset) {
                const point = (dataset.data as unknown as BubblePoint[]).find((p) => p.x === 'Pouco');
                expect(point).toBeDefined();
                expect(point!.rawVal).toBe(5);
                expect(point!.r).toBeGreaterThan(5);
            }
        });

        it('should ignore zero values', () => {
            const iaKey = MASTER_LISTS.IA[1];
            const digKey = MASTER_LISTS.DIGITAL[1];
            const comboKey = `${digKey} | ${iaKey}`;

            const matrix = { [comboKey]: 0 };
            const result = processBubbleData(matrix);

            /**
             * Implementation detail: depending on how datasets are constructed, a dataset may
             * not exist at all when all points are filtered out (value=0), or it may exist
             * with an empty data array. Both outcomes are valid as long as no point is emitted.
             */
            const dataset = result.datasets.find(d => d.label === 'Iniciante');

            if (dataset) {
                expect(dataset.data.length).toBe(0);
            } else {
                expect(dataset).toBeUndefined();
            }
        });
    });
});
