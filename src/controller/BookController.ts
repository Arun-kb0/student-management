import { Prisma } from "@prisma/client";
import { BookService } from "../service/BookService";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../util/CustomError";


export class BookController {

  constructor(
    private bookService: BookService
  ) { }

  async getBooksPage(req: Request, res: Response, next: NextFunction) {
    try {
      const books: Prisma.BookCreateInput[] = await this.bookService.findAll()
      res.render('home', { books })
    } catch (error) {
      next(error)
    }
  }

  async getCreatePage(req: Request, res: Response, next: NextFunction) {
    try {
      res.render('edit', { isCreate: true, book: null })
    } catch (error) {
      next(error)
    }
  }

  async addBook(req: Request, res: Response, next: NextFunction) {
    try {
      const book: Prisma.BookCreateInput = req.body
      const newBook = await this.bookService.create(book)
      res.status(200).json(newBook)
    } catch (error) {
      next(error)
    }
  }



  async getUpdatePage(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.query.id
      if (!id || isNaN(+id)) throw new CustomError('Invalid book id', 400)
      const book = await this.bookService.findOne(+id)
      res.render('edit', { isCreate: false, book })
    } catch (error) {
      next(error)
    }
  }

  async updateBook(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.query.id
      const book: Prisma.BookCreateInput = req.body
      if (!id || isNaN(+id)) throw new CustomError('Invalid book id', 400)
      const newBook = await this.bookService.updateOne(+id, book)
      res.status(200).json(newBook)
    } catch (error) {
      next(error)
    }
  }

  async deleteBook(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.query.id
      if (!id || isNaN(+id)) throw new CustomError('Invalid book id', 400)
      const deletedBook = await this.bookService.delete(+id)
      res.status(200).json(deletedBook)
    } catch (error) {
      next(error)
    }
  }

}