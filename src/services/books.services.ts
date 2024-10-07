import { booksDatabase } from "../database/database";
import { TBook, TCreateBookBody, TEditBodySchema, generateId } from "../interfaces/booksInterface";

export class BooksServices {

    getBooks(search?: string): TBook[] {
        if (search) {
            const searchValue = booksDatabase.filter(book => book.name.toLowerCase().includes(search.toLowerCase()));
            return searchValue;
        }

        return booksDatabase;
    }

    getOneBook(id: string): TBook | undefined {
        const findBook = booksDatabase.find(book => book.id === Number(id));
        return findBook;
    }

    createBook = (data: TCreateBookBody): TBook => {
        const newBook: TBook = {
            id: generateId(),
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        booksDatabase.push(newBook);
        return newBook;
    }

    updateBook(id: string, data: TEditBodySchema): TBook | undefined {
        const index: number = booksDatabase.findIndex(book => book.id === Number(id));

        if (index !== -1) {
            const updateBook: TBook = {
                ...booksDatabase[index],
                ...data,
            };

            booksDatabase.splice(index, 1, updateBook);
            return updateBook;
        }

        return undefined;
    }

    deleteBook(id: string): void {
        const index = booksDatabase.findIndex(book => book.id === Number(id));

        if (index !== -1) {
            booksDatabase.splice(index, 1);
        }
    }
}
