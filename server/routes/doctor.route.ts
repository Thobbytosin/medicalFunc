import { Router } from "express";
import { updateAccessToken } from "../middlewares/updateToken";
import { isUserAuthenticated } from "../middlewares/authentication";
import { authorizeRoleAdmin } from "../middlewares/admin-auth";
import { uploadDoctor } from "../controllers/doctor.controller";

const doctorRouter = Router();

doctorRouter.post(
  "/upload-doctor",
  updateAccessToken,
  isUserAuthenticated,
  authorizeRoleAdmin("administrator"),
  uploadDoctor
);
