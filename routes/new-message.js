import { Router } from "express";
import getNewMessagePage from "../controllers/getNewMessagePage.js";
import createMessage from "../controllers/createMessage.js";
const router = Router();

router.get("/", getNewMessagePage);
router.post("/",createMessage);

export default router;