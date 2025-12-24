import express from "express";
import { infoController } from "../../controllers/index.js";
import airplaneRoutes from "./airplane-routes.js";
import cityRoutes from "./city-routes.js";

const router = express.Router();

router.use("/airplanes", airplaneRoutes);
router.use("/cities", cityRoutes);
router.use("/info", infoController.infoHealth);

export default router;
