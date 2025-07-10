import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express();

// middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

export default app;
