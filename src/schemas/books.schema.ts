import { z } from "zod";

export const bookSchema = z.object({
    id: z.number().positive().optional(),
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
});

export const createBookBodySchema = bookSchema.omit({ id: true, createdAt: true, updatedAt: true });

export const editBookBodySchema = bookSchema.omit({ id: true }).partial({ name: true, pages: true });
