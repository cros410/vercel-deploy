import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';

interface QuizScoreAttributes {
    score_id: number;
    score: number;
    user_id: number;
    quiz_category: string;
}

interface QuizScoreCreationAttributes extends Optional<QuizScoreAttributes, 'score_id'> { }

class QuizScore extends Model<QuizScoreAttributes, QuizScoreCreationAttributes> implements QuizScoreAttributes {
    public score_id!: number;
    public score!: number;
    public user_id!: number;
    public quiz_category!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

QuizScore.init({
    score_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    quiz_category: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}
    , {
        sequelize,
        modelName: "QuizScore",
        tableName: "quiz_score",
        timestamps: true,
    }
);

export { QuizScore }