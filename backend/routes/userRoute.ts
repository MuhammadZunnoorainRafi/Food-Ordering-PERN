import express from 'express';
import {
  updateUserController,
  userRegController,
} from '../controllers/userController';
import { jwtCheck, jwtParser } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/', jwtCheck, userRegController);
userRouter.patch('/', jwtCheck, jwtParser, updateUserController);

export default userRouter;
