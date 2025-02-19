import { Router } from "express";
import {
  accountVerification,
  forgotPassword,
  getUserData,
  loginUser,
  registerUser,
  resetPassword,
  signOut,
} from "../controllers/auth.controller";
import { isUserAuthenticated } from "../middlewares/authentication";
import { updateAccessToken } from "../middlewares/updateToken";

const userRouter = Router();

userRouter.post("/signup", registerUser);
userRouter.post("/account-verification", accountVerification);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.post("/reset-password", resetPassword);
userRouter.get("/signout", updateAccessToken, isUserAuthenticated, signOut);
userRouter.get("/me", updateAccessToken, isUserAuthenticated, getUserData);

export default userRouter;
