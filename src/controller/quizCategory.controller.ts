import { Request, Response } from 'express';
import { saveQuizScore } from '../services/quizScore.service';
import { generateQuizQuestions } from '../services/gemini.service';

export const createQuizScore = async (req: Request, res: Response) => {
    const { score, user_id, name } = req.body;

    try {
        const newScore = await saveQuizScore(score, user_id, name);
        res.status(201).json(newScore);
    } catch (error) {
        console.error('Error al guardar el puntaje:', error);
        res.status(500).json({ error: 'Error al guardar el puntaje.' });
    }
}


export const getQuizQuestions = async (req: Request, res: Response) => {
    const { name } = req.params;

    try {
        const quizData = await generateQuizQuestions(name);
        res.json({ mesage:"quiz questions and answers created and saved" });
    } catch (error) {
        console.error('Error al generar preguntas:', error);
        res.status(500).json({ error: 'Hubo un error al generar el quiz.' });
    }
};