import { BookController } from "../controller/BookController";
import { Router } from "express";

const router = Router()

export function BookRoutes(
  bookController: BookController
) {

  if (!bookController) {
    throw new Error('book controller not found')
  }

  router.route('/')
    .get(bookController.getBooksPage.bind(bookController))
    .delete(bookController.deleteBook.bind(bookController))

  router.route('/create')
    .get(bookController.getCreatePage.bind(bookController))
    .post(bookController.addBook.bind(bookController))

  router.route('/edit')
    .get(bookController.getUpdatePage.bind(bookController))
    .patch(bookController.updateBook.bind(bookController))


  return router
}