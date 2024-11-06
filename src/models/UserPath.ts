import { DataTypes, Model, Optional} from 'sequelize';
import { sequelize } from '../config/database';
import { User } from './User';
import { Path } from './Path';

interface UserPathAttributes{
    user_id:number;
    path_id:number;
}

interface UserPathCreationAttributes extends Optional<UserPathAttributes, 'user_id'| 'path_id'> { }

class UserPath extends Model<UserPathAttributes,UserPathCreationAttributes> implements UserPathAttributes{
    public user_id!:number;
    public path_id!:number;
}

UserPath.init({
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: User,
            key: 'user_id'
        }
    },
    path_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: Path,
            key: 'path_id'
        }
    }
},
{
    sequelize,
    modelName: "UserPath",
    tableName: "user_path",
    timestamps: true, 
}
)
export {UserPath}