import express from "express";
import path from "path";
import { config as envConfig } from "dotenv";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";


envConfig()
const app = express()
const port = process.env.PORT

app.set('views', path.join(__dirname, '../views'))
app.set('view engine','ejs')

app.use(express.json())
app.use(logger)


app.use('/static',express.static(path.join(__dirname,'../public')))




app.use(errorHandler)

app.listen(port, () => {
  console.log(`server running at port ${port}`)
})