import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class CreateIsTrue {
    checkIfBookIsCreated(req: Request, res: Response, next: NextFunction): Response | void {
        const index = booksDatabase.findIndex((book) => book.id === Number(req.params.id));

        if (index === -1) {
            throw new AppError(404, "Book not found.");
        }
        res.locals.bookIndex = index;

        return next();
    }

    checkingIfBookNameIsNotRepeat(req: Request, res: Response, next: NextFunction): Response | void {
        const nameFound = booksDatabase.find((book) => book.name === req.body.name);

        if (nameFound) {
            throw new AppError(409, "Book already registered.");
        }
        return next();
    }
}
