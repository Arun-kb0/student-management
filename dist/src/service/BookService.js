"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const prismaClient_1 = require("../config/prismaClient");
class BookService {
    async findAll() {
        return await prismaClient_1.prismaClient.book.findMany();
    }
    async findOne(id) {
        return await prismaClient_1.prismaClient.book.findFirst({
            where: { id }
        });
    }
    async updateOne(id, book) {
        return await prismaClient_1.prismaClient.book.update({
            where: { id },
            data: book
        });
    }
    async create(book) {
        return await prismaClient_1.prismaClient.book.create({
            data: book
        });
    }
    async delete(id) {
        const deletedBook = await prismaClient_1.prismaClient.book.findFirstOrThrow({
            where: { id }
        });
        await prismaClient_1.prismaClient.book.delete({
            where: { id }
        });
        return deletedBook;
    }
}
exports.BookService = BookService;
//# sourceMappingURL=BookService.js.map