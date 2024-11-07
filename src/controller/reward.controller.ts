import { Request, Response } from "express";
import path from "path";
import fs from "fs-extra";
import { Reward } from "../models";
import crypto from "crypto";

export const storeReward = async (req: Request, res: Response) => {
  const { required_points, type} = req.body;
  const imageFile = req.file;

  if (!imageFile || !required_points || !type) {
    res.status(400).json({ error: "Missing data" });
    return;
  }
  const hash = crypto.createHash("md5").update(imageFile.buffer).digest("hex");

try {
    const existingReward = await Reward.findOne({ where: { imageHash: hash } });

    if (existingReward) {
       res.status(400).json({ error: "The image is already stored as a reward" });
       return
       
}
    const fileName = `${hash}_image.jpg`;
    const filePath = path.join(__dirname, "../uploads", fileName);

    await fs.ensureDir(path.join(__dirname, "../uploads"));
    await fs.writeFile(filePath, imageFile.buffer);

    const newReward = await Reward.create({
      image: filePath,
      imageHash: hash,
      required_points,
      type,
    });

    res.status(201).json(newReward);
  } catch (error) {
    console.error("Error saving image:", error);
    res.status(500).json({ error: "Error saving image" });
  }
};
