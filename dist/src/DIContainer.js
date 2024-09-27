"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DIContainer = void 0;
const BookService_1 = require("./service/BookService");
const BookController_1 = require("./controller/BookController");
const BookRoutes_1 = require("./routes/BookRoutes");
class DIContainer {
    static registerServices() {
        this.services.set(BookService_1.BookService.name, new BookService_1.BookService());
        const bookService = this.services.get(BookService_1.BookService.name);
        this.services.set(BookController_1.BookController.name, new BookController_1.BookController(bookService));
    }
    static registerService(name, instance) {
        if (!this.services.get(name)) {
            this.services.set(name, instance);
        }
    }
    static getService(name) {
        return this.services.get(name);
    }
    static getRoutes() {
        const bookController = this.getService(BookController_1.BookController.name);
        if (!bookController) {
            throw new Error('book controller not found');
        }
        return (0, BookRoutes_1.BookRoutes)(bookController);
    }
}
exports.DIContainer = DIContainer;
DIContainer.services = new Map();
//# sourceMappingURL=DIContainer.js.map