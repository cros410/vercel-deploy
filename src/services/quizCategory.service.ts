import { QuizCategory, Module } from "../models";
import { generateQuizQuestions } from "./gemini.service";
// import { getQuizIdByCategory } from "./gemini.service";




export const saveQuizScore = async (score: number, nameCategory: string) => {
    const existingScore = await QuizCategory.findOne({ where: { name: nameCategory } });
    if (existingScore) {
            throw new Error (`This name  already has a record in the category "${nameCategory}".`)
    }
    return await QuizCategory.create({ score, name: nameCategory });
}

export const generateQuestionsByType = async (type: string, id: number) => {
    let name: string;
    if (type === 'category') {
        const category = await QuizCategory.findByPk(id);
        if (!category) {
            throw new Error('Categoría no encontrada');
        }
        name = category.name;
    } else if (type === 'module') {
        const module = await Module.findByPk(id);
        if (!module) {
            throw new Error('Módulo no encontrado');
        }
        name = module.name;
    } else {
        throw new Error('Tipo inválido. Debe ser "category" o "module".');
    }
    await generateQuizQuestions(name, type, id);
};

//get total point quiz
// export const getQuizScoreByCategory = async (quizCategory: string): Promise<number> => {
//     const quiz = await QuizCategory.findOne({
//         where: { name: quizCategory },
//         attributes: ['score']
//     });

//     if (!quiz) throw new Error('Quiz category not found');

//     return quiz.score;
// };

// export const calculateUserScore = async (quizCategory: string, userAnswers: { question_id: number, answer: string }[], user_id: number) => {
//     const quizScore = await getQuizScoreByCategory(quizCategory);
//     const quiz_id = await getQuizIdByCategory(quizCategory);

//     if (!quiz_id) throw new Error('No quiz_id found for category');

//     const questions = await Question.findAll({
//         where: { quiz_id }
//     });

//     const pointsPerQuestion = quizScore / questions.length;
//     let totalScore = 0;

//     // Validar respuestas
//     for (const userAnswer of userAnswers) {
//         const question = await Question.findByPk(userAnswer.question_id, {
//             include: [{ model: Option, where: { is_correct: true }, as: 'Options' }]
//         });

//         if (question && question.Options[0].option_text === userAnswer.answer) {
//             totalScore += pointsPerQuestion;
//         }
//     }

//     // Actualizar el total de puntos del usuario
//     const user = await User.findByPk(user_id);
//     if (user) {
//         user.total_point = (user.total_point || 0) + totalScore;
//         await user.save();
//     }

//     return totalScore;
// };