import { NextFunction, Request, Response } from "express";
import { RoutNotFoundErrorModel } from "../04 - models/ErrorModels";

function routeNotFound(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const err = new RoutNotFoundErrorModel(request.originalUrl);
  next(err);
}

export default routeNotFound;
