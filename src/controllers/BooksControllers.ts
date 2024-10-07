import { Request, Response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
    getBooks(req: Request, res: Response): Response {
        console.log(req.query);
        const booksServices = new BooksServices();
        const response = booksServices.getBooks(req.query.search as string);
        return res.status(200).json(response);
    }

    getOneBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const response = booksServices.getOneBook(req.params.id);
        return res.status(200).json(response);
    }

    createBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const response = booksServices.createBook(req.body);
        return res.status(201).json(response);
    }

    deleteBook(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        booksServices.deleteBook(req.params.id);
        return res.status(204).json({ message: "Livro excluido com sucesso" });
    }
    
    updateBooks(req: Request, res: Response): Response {
        const booksServices = new BooksServices();
        const response = booksServices.updateBook(req.params.id, req.body);
        return res.status(200).json(response);
    }

}
