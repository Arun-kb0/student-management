import { Prisma } from "@prisma/client";
import { prismaClient } from "../config/prismaClient";

export class BookService {

  async findAll() {
    return await prismaClient.book.findMany()
  }

  async findOne(id: number) {
    return await prismaClient.book.findFirst({
      where: { id }
    })
  }

  async updateOne(id: number, book: Prisma.BookUpdateInput) {
    return await prismaClient.book.update({
      where: { id },
      data: book
    })
  }

  async create(book: Prisma.BookCreateInput) {
    return await prismaClient.book.create({
      data: book
    })
  }

  async delete(id: number) {
    const deletedBook = await prismaClient.book.findFirstOrThrow({
      where: {id}
    })
    await prismaClient.book.delete({
      where: { id }
    })
    return deletedBook
  }

}