import { Request, Response } from 'express';
import { createUser } from '../services/user.service';
import { IUser } from '../interface/index.interface';


export const createUserController = async (req: Request, res: Response) => {
    const userData: IUser = req.body;
    try {

        const newUser = await createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        res.status(500).json(error);
    }
};