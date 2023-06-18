import mongoose, { Document, Schema } from "mongoose";

export interface IProperty extends Document {
  name: string;
  type: string;
  city: string;
  address: string;
  roomPrice: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  distance: string;
  photos: string[];
  roomsAvailable: number;
  rating?: number;
  applications?: string[];
  featured: boolean;
}


const PropertySchema = new Schema<IProperty>(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    roomPrice: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    roomsAvailable: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    applications: {
      type: [String],
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IProperty>("Property", PropertySchema);
