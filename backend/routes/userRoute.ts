import express from 'express';
import { userRegController } from '../controllers/userController';

const userRouter = express.Router();

userRouter.post('/', userRegController);

export default userRouter;
