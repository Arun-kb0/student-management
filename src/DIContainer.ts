import { BookService } from "./service/BookService"
import { BookController } from "./controller/BookController"
import { BookRoutes } from "./routes/BookRoutes"



export class DIContainer {

  private static services: Map<string, any> = new Map()

  static registerServices() {
    this.services.set(BookService.name, new BookService())

    const bookService = this.services.get(BookService.name)
    this.services.set(BookController.name, new BookController(bookService))


  }

  static registerService<T>(name: string, instance: T) {
    if (!this.services.get(name)) {
      this.services.set(name, instance)
    }
  }

  static getService<T>(name: string): T {
    return this.services.get(name)
  }

  static getRoutes() {
    const bookController = this.getService<BookController>(BookController.name)
    if (!bookController) {
      throw new Error('book controller not found')
    }
    return BookRoutes(bookController)
  }


}