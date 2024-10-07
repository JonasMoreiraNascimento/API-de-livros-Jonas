import { z } from "zod";
import { bookSchema, createBookBodySchema, editBookBodySchema } from "../schemas/books.schema";

export type TBook = z.infer<typeof bookSchema>;
export type TCreateBookBody = z.infer<typeof createBookBodySchema>;
export type TEditBodySchema = z.infer<typeof editBookBodySchema>;

export type DeleteMessage = {
    message: string;
};

let id = 0;

export const generateId = () => {
    id++;
    return id;
};
