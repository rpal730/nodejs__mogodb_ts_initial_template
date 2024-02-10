import { NextFunction, Request, Response } from "express";
import { CustomError } from "../utils/errors";

export default class ErrorController {

  handleRequestErrors(error: Error, req: Request, res: Response, next: NextFunction): void {
    res
      .status(400)
      .json({
        code: (error as CustomError).errorCode,
        message: error.message
      });
    // next();
  }
}