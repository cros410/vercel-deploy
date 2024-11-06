import express, { Router } from 'express';
import { createQuizScore, getQuizQuestions } from '../controller/quizScore.controller';


const quizScoreRouter: Router = express.Router();

quizScoreRouter.post('/quiz-score',createQuizScore);
quizScoreRouter.get('/quiz/:quiz_category',getQuizQuestions);

export {quizScoreRouter}