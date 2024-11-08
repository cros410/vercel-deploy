import { Reward, User } from "../models";

interface IReward {
    reward_id: number;
    image: string;
    imageHash:string;
    required_points: number;
    type: 'background' | 'avatar';
}
export const allRewardService = async (): Promise<IReward[]> => {
    const allReward = await Reward.findAll();
    return allReward
}

export const getRewardbyId = async (id: number): Promise<IReward | null> => {
    const reward = await Reward.findOne({
        where: { reward_id: id}
    });
    return reward;
}

export const updateDataReward =async (id:number,newRequiredPoints: number): Promise<number> => {
    const [updateCount] = await Reward.update(
        {required_points : newRequiredPoints}, 
        {where: {reward_id : id}}
    );
    return updateCount;
}

