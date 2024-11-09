import express, { Router } from 'express';
import { createQuizScore, getQuizQuestions } from '../controller/quizCategory.controller';
import { isAuthenticated } from '../middleware/auth.middleware';


const quizCategoryRouter: Router = express.Router();

quizCategoryRouter.post('/quiz-score',createQuizScore);
// quizCategoryRouter.post('/finish-quiz', finishQuiz);
quizCategoryRouter.get('/quiz/:type/:type_id', isAuthenticated ,getQuizQuestions);
// quizCategoryRouter.put('/quiz-score', updateQuizScore);

export {quizCategoryRouter}