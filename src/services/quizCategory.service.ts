import { QuizCategory } from "../models";

export const saveQuizScore = async(score:number,userId:number,nameCategory:string) =>{
    return await QuizCategory.create({score,user_id:userId,name:nameCategory});
}