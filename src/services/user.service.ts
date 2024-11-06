import { User } from "../models";
import { IUser } from '../interface/index.interface';

export const createUser = async (userData: IUser):Promise<IUser> => {
        const newUser = await User.create(userData);
        return newUser;
};