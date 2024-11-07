import { Module } from "./Module";
import { Option } from "./Option";
import { Path } from "./Path";
import { Question } from "./Question";
import { QuizCategory } from "./QuizCategory";
import { Reward } from "./Reward";
import { User } from "./User";

User.belongsTo(Reward, { foreignKey: 'reward_id' });
Reward.hasMany(User, { foreignKey: 'reward_id' });

//Relacion uno a muchos de User a quizscore
User.hasMany(QuizCategory, { foreignKey: 'user_id' });
QuizCategory.belongsTo(User, { foreignKey: 'user_id' });


Path.hasMany(Module,{foreignKey: 'path_id',})
Module.belongsTo(Path,{foreignKey: 'path_id'});

QuizCategory.hasMany(Question,{foreignKey: 'quiz_id'});
Question.belongsTo(QuizCategory,{foreignKey: 'quiz_id'});

Question.hasMany(Option, { foreignKey: 'question_id' , as: 'Options' });
Option.belongsTo(Question, { foreignKey: 'question_id' });

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