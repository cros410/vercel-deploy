import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();
if (!process.env.GEMINI_API_KEY) {
    throw new Error('La clave de API GEMINI_API_KEY no está definida en el archivo .env');
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("",process.env.GEMINI_API_KEY)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const generateQuizQuestions = async (quizCategory: string) => {
    const prompt = `
    Genera 3 preguntas de trivia sobre el tema: ${quizCategory}.
    Cada pregunta debe tener 4 opciones de respuesta, con una marcada como la correcta.
    Formatea la respuesta en JSON con el siguiente formato:
    [
      {
        "question": "Texto de la pregunta",
        "options": ["opción1", "opción2", "opción3", "opción4"],
        "correctAnswer": "opción correcta"
      },
      ...
    ]
  `;

    const result = await model.generateContent([
        { text: prompt }
    ]);
    const generatedText = result.response.text();
    console.log(generatedText)
    const cleanedText = generatedText.replace(/```json|```/g, '').trim();
    try {
        return JSON.parse(cleanedText );
    } catch (error) {
        console.error('Error al parsear la respuesta del modelo:', error);
        throw new Error('Error en el formato de respuesta.');
    }
};

