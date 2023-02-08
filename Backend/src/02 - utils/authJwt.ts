import UserModel from "../04 - models/UserModel";
import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

const secretKey = "123456";
function getNewToken(user: UserModel): string {
  const container = { user };

  const options = { expiresIn: "5h" };

  const token = jwt.sign(container, secretKey, options);

  return token;
}

async function verifyToken(request: Request): Promise<boolean> {
  return new Promise((resolve, reject) => {
    try {
      const header = request.header("authorization");
      if (!header) {
        resolve(false);
        return;
      }
      const token = header.substring(7);
      if (!token) {
        resolve(false);
        return;
      }

      jwt.verify(token, secretKey, (err) => {
        if (err) {
          resolve(false);
          return;
        }

        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export default { getNewToken, verifyToken };
