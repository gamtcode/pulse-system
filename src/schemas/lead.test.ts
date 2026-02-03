import { describe, it, expect } from 'vitest';
import { leadSchema } from './leadSchema';

describe('Lead Schema Validation', () => {
    it('should validate a perfectly formatted lead', () => {
        const validLead = {
            id: '12345',
            name: 'John Doe',
            whatsapp: '5511999999999',
            username: '@johndoe',
            report: 'Interested in premium plan',
            createdAt: '2023-10-27T10:00:00Z',
        };

        const result = leadSchema.safeParse(validLead);
        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.data).toEqual(validLead);
        }
    });

    it('should accept number as id', () => {
        const leadWithNumberId = {
            id: 12345,
            name: 'Jane Doe',
        };
        const result = leadSchema.safeParse(leadWithNumberId);
        expect(result.success).toBe(true);
    });

    it('should reject objects missing required fields (id)', () => {
        const invalidLead = {
            name: 'Ghost User',
        };
        const result = leadSchema.safeParse(invalidLead);
        expect(result.success).toBe(false);
    });

    it('accepts nulls for nullable/optional fields (integration payloads)', () => {
        const leadWithNulls = {
            id: '999',
            name: null,
            whatsapp: null,
        };
        const result = leadSchema.safeParse(leadWithNulls);
        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.data.name).toBeNull();
        }
    });

    it('should reject invalid types', () => {
        const leadWithInvalidType = {
            id: '123',
            name: 12345, // invalid type
        };
        const result = leadSchema.safeParse(leadWithInvalidType);
        expect(result.success).toBe(false);
    })
});
