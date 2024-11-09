import { Application, Router } from "express";
import { quizCategoryRouter } from "./quizCategory.routes";
import { userRouter } from "./user.routes";
import { authRouter } from "./auth.routes";
import { rewardRouter } from "./reward.routes";
import { userRewardRouter } from "./userReward";
import { pathRouter } from "./path.routes";

function router(app: Application): void {
    app.use('/api/quiz-category', quizCategoryRouter);
    app.use('/api/users',userRouter);
    app.use('/api/auth',authRouter);
    app.use('/api/rewards',rewardRouter)
    app.use('/api/user-rewards',userRewardRouter)
    app.use('/api/paths',pathRouter)

  }
  
  export { router };