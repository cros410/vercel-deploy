import { Reward } from "../models";

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

