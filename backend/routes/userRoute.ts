import express from 'express';
import {
  getUserController,
  updateUserController,
  userRegController,
} from '../controllers/userController';
import { jwtCheck, jwtParser } from '../middleware/auth';

const userRouter = express.Router();

userRouter.get('/me', jwtCheck, jwtParser, getUserController);
userRouter.post('/', jwtCheck, userRegController);
userRouter.patch('/', jwtCheck, jwtParser, updateUserController);

export default userRouter;
