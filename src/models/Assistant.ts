import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';



interface AssistantAttributes {
    assistant_id: number;
    user_id: number; 
    name: string;
    image?: string; 
}


interface AssistantCreationAttributes extends Optional<AssistantAttributes, 'assistant_id' | 'image'> {}

class Assistant extends Model<AssistantAttributes, AssistantCreationAttributes> implements AssistantAttributes {
    public assistant_id!: number; 
    public user_id!: number; 
    public name!: string;
    public image?: string;


    public readonly createdAt!: Date; 
    public readonly updatedAt!: Date; 
}


Assistant.init(
    {
        assistant_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'user_id',
            },
            allowNull: false, 
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
    },
    {
        sequelize,
        modelName: "Assistant",
        tableName: "assistant",
        timestamps: true, 
    }
);



export {Assistant};





/*Table assistant{
    assistant_id integer [primary key] 
    user_id fk
    name varchar
    image varchar
  }*/