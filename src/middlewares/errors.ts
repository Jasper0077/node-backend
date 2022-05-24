import { NextFunction, Request, Response } from "express";
import httpError, { HttpError } from "http-errors";

export const missingRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next(httpError(404, "Route not found"));
}

export const errorReponseHandler = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status) {
    res.status(err.status).json({
      data: null,
      message: err.message,
      errors: null
    })
  } else {
    res.status(500).json({
      data: null,
      message: "Internal server error",
      errors: null
    })
  }
}

/* 
Response in JSON format
 - data
 - errors
 - message
*/