import { Request, Response, Router } from "express";
import { BooksControllers } from "../controllers/BooksControllers";
import { IsBookIdValid } from "../middlewares/isBookIdValid.middleware";
import { CreateIsTrue } from "../middlewares/createdIsTrue.middleware";
import { ValidateRequest } from "../middlewares/validateRequest.middleware";
import { createBookBodySchema, editBookBodySchema } from "../schemas/books.schema";

export const booksRouter = Router();

const booksControllers = new BooksControllers();
const createdIsTrue = new CreateIsTrue();

booksRouter.get("/", booksControllers.getBooks);

booksRouter.get("/:id", IsBookIdValid.execute, booksControllers.getOneBook);

booksRouter.post(
    "/",
    ValidateRequest.execute({
        body: createBookBodySchema
    }),
    createdIsTrue.checkingIfBookNameIsNotRepeat,
    booksControllers.createBook
);

booksRouter.use("/:id", createdIsTrue.checkingIfBookNameIsNotRepeat);

booksRouter.patch(
    "/:id",
    ValidateRequest.execute({
        body: editBookBodySchema
    }),
    IsBookIdValid.execute,
    booksControllers.updateBooks
);

booksRouter.delete("/:id", IsBookIdValid.execute, booksControllers.deleteBook);
