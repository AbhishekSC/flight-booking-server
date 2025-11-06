import express from "express";
import { StatusCodes } from "http-status-codes";

const router = express.Router();

router.get("/info", (req, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API v2 is live",
    error: {},
    data: {},
  });
});

export default router;
