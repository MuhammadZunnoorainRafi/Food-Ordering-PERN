import express from 'express';
import { userRegController } from '../controllers/userController';
import { jwtCheck } from '../middleware/auth';

const userRouter = express.Router();

userRouter.post('/', jwtCheck, userRegController);

export default userRouter;
