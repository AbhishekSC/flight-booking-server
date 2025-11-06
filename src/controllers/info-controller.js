import { StatusCodes } from "http-status-codes";

function infoHealth(req, res) {
  return res
  .status(StatusCodes.OK)
  .json({
    success: true,
    message: "API is live",
    error: {},
    data: {},
  });
}

export { infoHealth };
