import express, { Router } from 'express';
import { createQuizScore, finishQuiz, getQuizQuestions } from '../controller/quizCategory.controller';

const quizCategoryRouter: Router = express.Router();

quizCategoryRouter.post('/quiz-score',createQuizScore);
quizCategoryRouter.post('/finish-quiz', finishQuiz);
quizCategoryRouter.get('/quiz/:name',getQuizQuestions);

export {quizCategoryRouter}