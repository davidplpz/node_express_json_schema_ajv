import express from 'express';
import UserController from '../controllers/userController.js';
import RequestValidator from '../middleware/request-validator.js';
import RegisterUserScheme from '../schemes/register_user_scheme.js';

const router = express.Router();

router.post(
  '/signup',
  RequestValidator(RegisterUserScheme),
  UserController.signup
);

export default router;
