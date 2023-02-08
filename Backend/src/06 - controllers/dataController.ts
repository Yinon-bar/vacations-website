import express, { NextFunction, Request, Response } from "express";
import UserModel from "../04 - models/UserModel";
import dataLogic from "../05 - logic/dataLogic";
import usersLogic from "../05 - logic/usersLogic";
import authLogic from "../05 - logic/authLogic";
import verifyLoggedIn from "../03 - middleware/verifyLoggedIn";

const router = express.Router();

router.get(
  "/vacations",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product = await dataLogic.getVacations();
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/vacations",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      request.body.image = request.files?.image;
      // console.log(request.body);
      const vacation = await dataLogic.addVacation(request.body);
      response.json(vacation);
    } catch (error) {
      next(error);
    }
  }
);

// Get users
router.get(
  "/users",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const product = await usersLogic.getAllUsers();
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Create a new user
router.post(
  "/users",
  verifyLoggedIn,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = new UserModel(request.body);
      const newUser = await authLogic.register(user);
      response.json(newUser);
    } catch (error) {
      next(error);
    }
  }
);
// router.put(
//   "/servers",
//   async (request: Request, response: Response, next: NextFunction) => {
//     try {
//       const body = new ServerModel(request.body);
//       console.log(body);
//       const product = await dataLogic.updateStatus(body);
//       response.json(product);
//     } catch (error) {
//       next(error);
//     }
//   }
// );

export default router;
