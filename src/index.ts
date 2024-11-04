import express, { Response } from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { testConnection } from './utils/testConnection';
import './models/relations'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (res: Response) => {
  res.send("¡Welcomeeeee");
});


const startServer = async (): Promise<void> => {
  try {
    await testConnection();
    console.log("Database connected");

    await sequelize.sync();
    console.log("Database synchronized successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();