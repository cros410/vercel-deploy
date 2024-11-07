import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { Reward } from "../models";


export const storeReward = async (req: Request, res: Response) => {
  const { required_points, type} = req.body;
  const imageFile = req.file;

  if (!imageFile || !required_points || !type) {
    res.status(400).json({ error: "Missing data" });
    return;
  }
  const fileName = `${Date.now()}_image.jpg`;
  const filePath = path.join(__dirname, "../uploads", fileName);
 
  fs.writeFile(filePath,imageFile.buffer, async (err) => {
    if (err) {
       res.status(500).json({ error: "Error saving image" });
       return;
    }
    try {
      const newReward = await Reward.create({
        image: filePath,
        required_points,
        type,
      });
      res.status(201).json(newReward);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error saving Reward" });
    }
  });
};

