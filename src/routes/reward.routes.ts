import express, { Router } from 'express';
import { storeReward } from '../controller/reward.controller';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const rewardRouter : Router = express.Router();

rewardRouter.post('/reward', upload.single('image'),storeReward);

export{rewardRouter}