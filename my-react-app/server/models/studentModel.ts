
import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  section: string;
  field: string;
  fees: number;
}

const studentSchema: Schema = new Schema({
  section: { type: String, required: true },
  field: { type: String, required: true },
  fees: { type: Number, required: true },
});

export default mongoose.model<IStudent>("Student", studentSchema);
