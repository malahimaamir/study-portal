
import { Request, Response } from "express";
import Student from "../models/studentModel";

export const createStudent = async (req: Request, res: Response) => {
  try {
    const { section, field, fees } = req.body;
    const newStudent = new Student({ section, field, fees });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Error saving student", error });
  }
};

export const getStudents = async (_req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};
