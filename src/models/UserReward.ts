import { DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';
import { Reward } from './Reward';



interface UserRewardAttributes {
    user_id:number;
    reward_id:number;
}

interface UserRewardCreationAttributes extends Optional<UserRewardAttributes, 'user_id'| 'reward_id'> { }



class UserReward extends Model<UserRewardAttributes,UserRewardCreationAttributes> implements UserRewardAttributes{
    public user_id!:number;
    public reward_id!:number;
}

UserReward.init(
    {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: User,
                key: 'user_id'
            }
        },
        reward_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: Reward,
                key: 'reward_id'
            }
        }
    },
    {
        sequelize,
        modelName: "UserReward",
        tableName: "user_reward",
        timestamps: true, 
    }

);

export {UserReward}