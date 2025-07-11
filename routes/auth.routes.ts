import express from "express";
import { login, logout, registerUser } from "../controller/auth.controller";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.post("/logout", logout);

export default router;
