import mongoose, { Document, Schema, Model } from "mongoose";

export interface IApplication extends Document {
  title: string;
  email: string;
  phone: string;
  message: string;
}

const ApplicationSchema: Schema<IApplication> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Application: Model<IApplication> = mongoose.model<IApplication>("Application", ApplicationSchema);
export default Application;
