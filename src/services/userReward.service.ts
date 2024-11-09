import { User, UserReward } from "../models";

interface IUserReward{
    user_id:number,
    reward_id:number,
}

export const existingRewardServices = async(userId: number, rewardId: number) => {
    const existingReward = await UserReward.findOne({
        where: {
            user_id: userId,
            reward_id: rewardId,
        }
    });
    return existingReward
}
export const insertRewardUserServices = async(userId: number, rewardId: number,rewardType: string ):Promise<IUserReward> => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error("User not found");
    }
        const insertReward = await UserReward.create({
        user_id:userId,
        reward_id:rewardId,
        reward_type: rewardType,
    })
    return insertReward;
   
}
