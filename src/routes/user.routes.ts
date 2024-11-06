import express, { Router } from 'express';
import { createUserController } from '../controller/user.controller';

const userRouter: Router = express.Router();

userRouter.post('/user',createUserController);

export {userRouter}