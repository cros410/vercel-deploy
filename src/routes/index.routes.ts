import { Application, Router } from "express";
import { quizScoreRouter } from "./quizScore.routes";
import { userRouter } from "./user.routes";

function router(app: Application): void {
    const routes: Router = Router();
    app.use('/api', routes);
  
    routes.use('/', quizScoreRouter);
    routes.use('/',userRouter);

  }
  
  export { router };