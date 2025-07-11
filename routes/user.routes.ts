import express from "express";
import { changeUserRole, getAllUsers } from "../controller/user.controller";
import { isAuthenticated } from "../middleware/auth.middleware";
import { authorizeRoles } from "../middleware/role.middleware";

const router = express.Router();

router.get("/", isAuthenticated, authorizeRoles("admin"), getAllUsers);

router.patch(
  "/role/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  changeUserRole
);

export default router;
