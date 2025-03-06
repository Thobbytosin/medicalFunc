import { NextFunction, Request, Response } from "express";
import catchAsyncError from "./catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { IUser } from "../models/user.model";

dotenv.config();

export const isUserAuthenticated = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    // check if user is logged in (check and verify access token)
    const { access_token } = req.cookies;

    console.log("AUTHENTICATION:", req.cookies);

    // if there is no access token
    if (!access_token)
      return next(new ErrorHandler("Access Denied: Login to proceed", 403));

    // verify access token
    const decode: any = jwt.verify(
      access_token,
      process.env.SIGN_IN_ACCESS_SECRET_KEY || ""
    );

    if (!decode) return next(new ErrorHandler("Invalid token", 404));

    req.user = decode.user;
    return next();
  }
);
