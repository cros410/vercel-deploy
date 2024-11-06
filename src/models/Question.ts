import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { QuizScore } from './QuizScore';


interface QuestionAttributes {
    question_id: number;
    question_text: string;
    score_id: number;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, 'question_id'> { }


class Question extends Model<QuestionAttributes, QuestionCreationAttributes> implements QuestionAttributes {
    public question_id!: number;
    public question_text!: string;
    public score_id!: number;

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
    score_id: {
        type: DataTypes.INTEGER,
        references: {
            model: QuizScore,
            key: 'score_id'
        }
    },
}, {
    sequelize, modelName: 'Question', tableName: "question",
    timestamps: true,
});


export { Question }