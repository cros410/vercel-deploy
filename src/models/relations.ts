import { Module } from "./Module";
import { Path } from "./Path";
import { QuizScore } from "./QuizScore";
import { Reward } from "./Reward";
import { User } from "./User";


User.belongsTo(Reward, { foreignKey: 'reward_id' });
Reward.hasMany(User, { foreignKey: 'reward_id' });

//Relacion uno a muchos de User a quizscore
User.hasMany(QuizScore, { foreignKey: 'user_id' });
QuizScore.belongsTo(User, { foreignKey: 'user_id' });


Path.hasMany(Module,{
    foreignKey: 'path_id',
})
Module.belongsTo(Path,{foreignKey: 'path_id'});


//Reacion de muchos a muchos
User.belongsToMany(Reward,{
    through: 'user_reward',
    foreignKey: 'user_id',
})

Reward.belongsToMany(User,{
    through: 'user_reward',
    foreignKey: 'reward_id',
})
//--------------------------

User.belongsToMany(Path,{
    through: 'user_path',
    foreignKey: 'user_id',
})

Path.belongsToMany(User,{
    through: 'user_path',
    foreignKey: 'path_id',
})