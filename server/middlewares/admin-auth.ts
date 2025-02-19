import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/errorHandler";

export const authorizeRoleAdmin = (...allowedrole: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user?.role.some((role) => allowedrole.includes(role))) {
      return next(
        new ErrorHandler(
          `Permission Denied: Only an ${allowedrole} can access this.`,
          403
        )
      );
    }
    next();
  };
};

// return next(new ErrorHandler(`Permission Denied: Requires ${roles.join(" or ")}`, 403));
