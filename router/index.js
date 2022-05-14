import express from "express";
import UserController from "../controllers/userController.js";
import ProductController from "../controllers/productController.js";
import RequestValidator from "../middleware/request-validator.js";
import SignupUserScheme from "../schemes/signup_user_scheme.js";
import PayScheme from "../schemes/pay_product_scheme.js";

const router = express.Router();

router.post(
  "/signup",
  RequestValidator(SignupUserScheme),
  UserController.signup
);

router.post("/pay", RequestValidator(PayScheme), ProductController.pay);

export default router;
