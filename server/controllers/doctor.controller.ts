import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError";
import ErrorHandler from "../utils/errorHandler";
import User from "../models/user.model";
import Doctor from "../models/doctor.model";
import cloudUploader from "../utils/cloudinary";

//////////////////////////////////////////////////////////////////////////////////////////////// UPLOAD DOCTOR
export const uploadDoctor = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    if (!data) return next(new ErrorHandler("All fields are required", 400));

    const userId = req.user._id;

    const user = await User.findById(userId);

    // double check again if user exists
    if (!user) return next(new ErrorHandler("Authorization Restricted", 400));

    const checkDoctor = await Doctor.findOne({ name: data.name });

    // check if doctor exists
    if (checkDoctor)
      return next(
        new ErrorHandler(
          "Permission denied: Cannot upload same doctor credentials twice",
          422
        )
      );

    // handl doctor image upload to server
    const thumbnail = data.thumbnail;

    if (!thumbnail)
      return next(
        new ErrorHandler("Permission Denied: Doctor MUST have an image", 403)
      );

    // upload the thumbnail
    // create the folder path the image will be uploaded on cloudinary
    const folderPath = `medicalFunc/doctors/${data.name}`;

    // the cloudUploader takes 3 arguments (the foldl)
    await cloudUploader.upload(
      thumbnail,
      {
        folder: folderPath,
        transformation: { gravity: "face" },
      },
      async (error: any, result) => {
        // if there is an error, the code stops here
        if (error) return next(new ErrorHandler(error.message, 400));

        const publicId = result?.public_id;

        const thumbnailId = publicId?.split("/").pop(); // fetch the last id

        const thumbnailUrl = result?.secure_url;

        data.thumbnail = {
          id: thumbnailId,
          url: thumbnailUrl,
        };
      }
    );

    // create doctor
    const doctor = await Doctor.create(data);

    res.status(201).json({ success: true, message: "Doctor Uploaded", doctor });
  }
);
