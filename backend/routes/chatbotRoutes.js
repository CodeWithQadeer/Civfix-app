import express from "express";
import { handleChatbotQuery } from "../controllers/chatbotController.js";

const router = express.Router();

// ✅ POST /api/chatbot
router.post("/", handleChatbotQuery);

export default router;
