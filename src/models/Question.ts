import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { QuizCategory } from './QuizCategory';


interface QuestionAttributes {
    question_id: number;
    question_text: string;
    quiz_id: number;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'question_id'> { }


class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
    public question_id!: number;
    public question_text!: string;
    public quiz_id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Question.init({
    question_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quiz_id: {
        type: DataTypes.INTEGER,
        references: {
            model: QuizCategory,
            key: 'quiz_id'
        }
    },
}, {
    sequelize, modelName: 'Question', tableName: "question",
    timestamps: true,
});


export { Question }