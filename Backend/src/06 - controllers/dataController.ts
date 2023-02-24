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
// Create user "like"
router.post(
  "/likes",
  verifyLoggedIn,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = new UserModel(request.body.user);
      // console.log(user);
      const vacation = request.body.vacation;
      const like = await dataLogic.addLike(user, vacation);
      // console.log(user, vacation);
      response.json(like);
    } catch (error) {
      next(error);
    }
  }
);

// Get all likes
router.get(
  "/likes",
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const likes = await dataLogic.getAlllLikes();
      response.json(likes);
    } catch (error) {
      next(error);
    }
  }
);
// Get single like
router.post(
  "/likes/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const vacation = request.body.id;
    console.log("backend: " + vacation);
    const userId = +request.params.id;
    // console.log(userId);

    try {
      const product = await dataLogic.getSingleLike(userId, vacation);
      response.json(product);
    } catch (error) {
      next(error);
    }
  }
);

// Delete user "like"
router.delete(
  "/likes/:id",
  verifyLoggedIn,
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const userId = +request.params.id;
      const like = await dataLogic.removeLike(userId);
      response.status(204).json(like);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
