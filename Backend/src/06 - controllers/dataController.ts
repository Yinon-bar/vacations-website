import express, { NextFunction, Request, Response } from "express";
import ServerModel from "../04 - models/Model";
import dataLogic from "../05 - logic/dataLogic";

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
