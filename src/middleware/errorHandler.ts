import { NextFunction, Request, Response } from "express";
import { CustomError } from "../util/CustomError";

export const errorHandler = (
  error: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof CustomError) {
    console.log(error.message)
    res.status(error.statusCode).json(error.message)
    return
  }
  console.log(error.message)
  res.status(500).json('Internal server error')
}