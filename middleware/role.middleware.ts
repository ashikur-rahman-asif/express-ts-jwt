import { NextFunction, Response } from "express";
import { AuthRequest } from "./auth.middleware";

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({
          success: false,
          message: "Access denied",
        });
      }
      next();
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error?.message || error,
      });
    }
  };
};
