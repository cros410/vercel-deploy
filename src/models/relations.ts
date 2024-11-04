import { Assistant } from "./Assistant";
import { Reward } from "./Reward";
import { User } from "./User";

User.belongsTo(Assistant, { foreignKey: 'assistant_id' });
Assistant.hasMany(User, { foreignKey: 'assistant_id' });

User.belongsTo(Reward, { foreignKey: 'reward_id' });
Reward.hasMany(User, { foreignKey: 'reward_id' });