import mongoose, { Schema, Document } from "mongoose";

export interface IDonation extends Document {
  name: string;
  email: string;
  age: number;
  bookTitle: string;
  author: string;
  quantity: number;
  createdAt: Date;
}

const donationSchema = new Schema<IDonation>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    bookTitle: { type: String, required: true },
    author: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ChildrenDonation = mongoose.model<IDonation>("Childrens", donationSchema);
export const YoungsterDonation = mongoose.model<IDonation>("Youngsters", donationSchema);
export const OldsterDonation = mongoose.model<IDonation>("Oldsters", donationSchema);
