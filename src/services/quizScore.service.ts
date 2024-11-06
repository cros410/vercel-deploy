import { QuizScore } from "../models";

export const saveQuizScore = async(score:number,userId:number,quizCategory:string) =>{
    return await QuizScore.create({score,user_id:userId,quiz_category:quizCategory});
}