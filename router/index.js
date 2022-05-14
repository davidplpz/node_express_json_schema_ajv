import express from "express";
import UserController from "../controllers/userController.js";
import RequestValidator from "../middleware/request-validator.js";
import SignupUserScheme from "../schemes/signup_user_scheme.js";

const router = express.Router();

router.post(
  "/signup",
  RequestValidator(SignupUserScheme),
  UserController.signup
);

export default router;
