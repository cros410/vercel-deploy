import express, { Request, Response } from 'express';
import {sequelize} from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

sequelize.authenticate()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((error: unknown) => {
    if (error instanceof Error) {
      console.error('Unable to connect:', error.message);
    } else {
      console.error('Unable to connect: Unknown error', error);
    }
  });

app.get('/', (req: Request, res: Response) => {
  res.send('API is working');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });