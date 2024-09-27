"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = BookRoutes;
const express_1 = require("express");
const router = (0, express_1.Router)();
function BookRoutes(bookController) {
    if (!bookController) {
        throw new Error('book controller not found');
    }
    router.route('/')
        .get(bookController.getBooksPage.bind(bookController))
        .delete(bookController.deleteBook.bind(bookController));
    router.route('/book/create')
        .post(bookController.addBook.bind(bookController));
    return router;
}
//# sourceMappingURL=BookRoutes.js.map