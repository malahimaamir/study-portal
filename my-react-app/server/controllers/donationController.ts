import { Request, Response } from "express";
import { ChildrenDonation, YoungsterDonation, OldsterDonation } from "../models/donationModel";

export const createDonation = async (req: Request, res: Response) => {
  try {
    const { name, email, age, bookTitle, author, quantity } = req.body;

    let donation;

    if (age <= 18) {
      donation = await ChildrenDonation.create({ name, email, age, bookTitle, author, quantity });
    } else if (age > 18 && age <= 40) {
      donation = await YoungsterDonation.create({ name, email, age, bookTitle, author, quantity });
    } else {
      donation = await OldsterDonation.create({ name, email, age, bookTitle, author, quantity });
    }

    res.status(201).json({ success: true, donation });
  } catch (error) {
    console.error("Error saving donation:", error);
    res.status(500).json({ success: false, message: "Error saving donation" });
  }
};

export const getDonations = async (req: Request, res: Response) => {
  try {
    const childrens = await ChildrenDonation.find();
    const youngsters = await YoungsterDonation.find();
    const oldsters = await OldsterDonation.find();

    res.json({ childrens, youngsters, oldsters });
  } catch (error) {
    res.status(500).json({ message: "Error fetching donations" });
  }
};
