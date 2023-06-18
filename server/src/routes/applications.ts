import express from "express";
import {
  createApplication,
  updateApplication,
  deleteApplication,
  getApplication,
  getAllApplications,
} from "../controllers/applicationController";

const router = express.Router();

// CREATE
router.post("/:propertyid", createApplication);

// UPDATE
router.put("/:id", updateApplication);

// DELETE
router.delete("/:id/:propertyid", deleteApplication);

// GET
router.get("/:id", getApplication);

// GET ALL
router.get("/", getAllApplications);

export default router;
