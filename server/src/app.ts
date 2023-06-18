import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import applicationsRoute from "./routes/applications";
import propertiesRoute from "./routes/properties";
import cors from "cors";

dotenv.config();

const app = express();

// CORS middleware
app.use(cors());

// Connect to the database
mongoose
  .connect(process.env.MONGO || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to db", err);
  });

// Middleware
app.use(express.json());

// Routes
app.use("/api/applications", applicationsRoute);
app.use("/api/properties", propertiesRoute);

export default app;
