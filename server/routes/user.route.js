import express from "express";
import { register } from "../controllers/user.controller.jd";

const router = express.Router();

router.route("/register").post(register);


export default router;