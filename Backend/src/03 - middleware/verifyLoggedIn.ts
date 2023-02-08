import { Request, Response, NextFunction } from "express";
import authJwt from "../02 - utils/authJwt";

async function verifyLoggedIn(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    await authJwt.verifyToken(request);
    next();
  } catch (error) {
    next(error);
  }
}

export default verifyLoggedIn;
