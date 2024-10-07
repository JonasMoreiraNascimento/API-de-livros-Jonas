import { NextFunction, Response, Request } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class IsBookIdValid {
    static execute(req: Request, res: Response, next: NextFunction) {
        const bookFound = booksDatabase.some((book) => book.id === Number(req.params.id));

        if (!bookFound) {
            throw new AppError(404, "Book not found.");
        }

        res.locals.book = bookFound;
        next();
    }
}
