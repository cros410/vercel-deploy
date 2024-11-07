import express, { Router } from 'express';
import { createQuizScore, getQuizQuestions } from '../controller/quizCategory.controller';


const quizCategoryRouter: Router = express.Router();

quizCategoryRouter.post('/quiz-score',createQuizScore);
quizCategoryRouter.get('/quiz/:name',getQuizQuestions);

export {quizCategoryRouter}