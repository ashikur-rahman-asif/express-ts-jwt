import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({ success: true, users });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
      error: error.message || error,
    });
  }
};

// change role
export const changeUserRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (!["admin", "user"].includes(role)) {
      return res.status(400).json({
        success: false,
        message: "Invalid role. Allowed roles: admin, user",
      });
    }

    user.role = role;
    await user.save();

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log("Changing role error", error);
    res.status(500).json({
      success: false,
      message: "Failed to change user role",
      error: error,
    });
  }
};
