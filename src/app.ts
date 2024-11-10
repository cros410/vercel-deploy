import express, {Application,Request, Response } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { testConnection } from './utils/testConnection';
import cors from 'cors';
import './models/relations';
import { router } from './routes/index.routes';

dotenv.config();

const app:Application = express();


app.use(cors())
app.use(express.json());

router(app);

app.get("/", (req: Request, res: Response) => {
  res.send("¡Welcomeeeee to bloomme");
});

export default app;