import express from "express";
import {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  getComplaintById,
  getComplaintStatus,
  updateComplaint,
} from "../controllers/complaintController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validate.js";
import { createComplaintSchema, updateComplaintSchema } from "../validations/complaintValidation.js";

const router = express.Router();

router.post("/", protect, validate(createComplaintSchema), createComplaint);
router.get("/my", protect, getMyComplaints);
router.get("/", getAllComplaints);
router.get("/:id", protect, getComplaintById);
router.get("/chatbot/status/:id", protect, getComplaintStatus);
router.put("/:id", protect, adminOnly, validate(updateComplaintSchema), updateComplaint);

export default router;
