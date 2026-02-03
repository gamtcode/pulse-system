import { z } from 'zod';

export const leadSchema = z.object({
    id: z.union([z.string(), z.number()]),
    name: z.string().optional().nullable(),
    whatsapp: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    report: z.string().optional().nullable(),
    createdAt: z.string().optional().nullable(),
});

/**
 * Inferred type derived from the runtime schema to keep types and validation in sync.
 */
export type Lead = z.infer<typeof leadSchema>;
