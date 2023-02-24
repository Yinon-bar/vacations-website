import express, { NextFunction, Request, Response } from "express";
import CredentialsModel from "../04 - models/credentialsModel";
import UserModel from "../04 - models/UserModel";
import authLogic from "../05 - logic/authLogic";

const router = express.Router();

router.post(
  "/auth/register",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = new UserModel(request.body);
      const auth = await authLogic.register(user);
      response.status(201).json(auth);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/auth/login",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const credentials = new CredentialsModel(request.body);
      const auth = await authLogic.login(credentials);
      response.json(auth);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
