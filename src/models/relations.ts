import { Module } from "./Module";
import { Option } from "./option";
import { Path } from "./Path";
import { Question } from "./question";
import { QuizScore } from "./QuizScore";
import { Reward } from "./Reward";
import { User } from "./User";

User.belongsTo(Reward, { foreignKey: 'reward_id' });
Reward.hasMany(User, { foreignKey: 'reward_id' });

//Relacion uno a muchos de User a quizscore
User.hasMany(QuizScore, { foreignKey: 'user_id' });
QuizScore.belongsTo(User, { foreignKey: 'user_id' });


Path.hasMany(Module,{foreignKey: 'path_id',})
Module.belongsTo(Path,{foreignKey: 'path_id'});

QuizScore.hasMany(Question,{foreignKey: 'score_id'});
Question.belongsTo(QuizScore,{foreignKey: 'score_id'});

Question.hasMany(Option, { foreignKey: 'question_id' });
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