import express from "express";
import { infoController } from "../../controllers/index.js";

const router = express.Router();

router.use("/info", infoController.infoHealth);

export default router;
