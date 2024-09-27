import express from "express";
import path from "path";
import { config as envConfig } from "dotenv";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import { DIContainer } from "./DIContainer";
import { BookService } from "./service/BookService";


envConfig()
const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, '../views'))
app.set('view engine','ejs')

app.use(express.json())
app.use(logger)
DIContainer.registerServices()
const bookRoutes = DIContainer.getRoutes()


app.use('/static',express.static(path.join(__dirname,'../public')))

app.use('/',bookRoutes)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})