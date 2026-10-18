import { Router } from "express";
import deleteMessage from "../controllers/deleteMessage.js";

const router = Router();

router.post("/:messageId", deleteMessage);

export default router;
