import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';


interface RewardAttributes {
    reward_id: number;
    name: string;
    image?: string;
    points: number;
    state: 'unlocked' | 'locked'; 
    type: 'background' | 'avatar';
}

interface RewardCreationAttributes extends Optional<RewardAttributes, 'reward_id' | 'image'> {}

class Reward extends Model<RewardAttributes, RewardCreationAttributes> implements RewardAttributes {
    public reward_id!: number; 
    public name!: string;
    public image?: string; 
    public points!: number;
    public state!: 'unlocked' | 'locked'; 
    public type!: 'background' | 'avatar'; 

    public readonly createdAt!: Date; 
    public readonly updatedAt!: Date; 
}

Reward.init(
    {
        reward_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.ENUM('unlocked', 'locked'),
            allowNull: false,
        },
        type: {
            type: DataTypes.ENUM('background', 'avatar'),
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Reward",
        tableName: "reward",
        timestamps: true, 
    }
);

export {Reward};