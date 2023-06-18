import { Request, Response, NextFunction } from "express";
import Application, { IApplication } from "../models/Application";
import Property from "../models/Property";
import { createError } from "../utils/error";

export const createApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const propertyId: string = req.body.propertyid;
  const newApplication: IApplication = new Application(req.body);

  try {
    const savedApplication: IApplication = await newApplication.save();
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $push: { applications: savedApplication._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).send(savedApplication);
  } catch (error) {
    next(error);
  }
};

export const updateApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const updatedApplication: IApplication | null = await Application.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedApplication);
  } catch (error) {
    next(error);
  }
};

export const deleteApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const propertyId: string = req.body.propertyid;
  try {
    await Application.findByIdAndDelete(req.params.id);
    try {
      await Property.findByIdAndUpdate(propertyId, {
        $pull: { applications: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json("Application has been deleted.");
  } catch (error) {
    next(error);
  }
};

export const getApplication = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const application: IApplication | null = await Application.findById(req.params.id);
    res.status(200).json(application);
  } catch (error) {
    next(error);
  }
};

export const getAllApplications = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const applications: IApplication[] = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    next(error);
  }
};
