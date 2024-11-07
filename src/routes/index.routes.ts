import { Application, Router } from "express";
import { quizCategoryRouter } from "./quizCategory.routes";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { rewardRouter } from "./reward.routes";

function router(app: Application): void {
    const routes: Router = Router();
    app.use('/api', routes);
  
    routes.use('/', quizCategoryRouter);
    routes.use('/',userRouter);
    routes.use('/',authRouter);
    routes.use('/',rewardRouter)

  }
  
  export { router };