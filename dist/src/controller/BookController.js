"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const CustomError_1 = require("../util/CustomError");
class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async getBooksPage(req, res, next) {
        try {
            const books = await this.bookService.findAll();
            res.render('home', { books });
        }
        catch (error) {
            next(error);
        }
    }
    async addBook(req, res, next) {
        try {
            const book = req.body;
            const newBook = await this.bookService.create(book);
            res.status(200).json(newBook);
        }
        catch (error) {
            next(error);
        }
    }
    async deleteBook(req, res, next) {
        try {
            const id = req.query.id;
            if (!id || isNaN(+id))
                throw new CustomError_1.CustomError('Invalid book id', 400);
            const deletedBook = await this.bookService.delete(+id);
            res.status(200).json(deletedBook);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.BookController = BookController;
//# sourceMappingURL=BookController.js.map