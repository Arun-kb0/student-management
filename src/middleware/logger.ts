import { Request,Response,NextFunction } from "express"

export const logger = (req: Request, res: Response, next: NextFunction) => {
  const format = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
  console.log(format)
  next()
}