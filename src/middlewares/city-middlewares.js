import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/errors/app-error.js";

function validateCreateCityRequest(req, res, next) {
  if (!req.body.name) {
    ErrorResponse.message = "Something went wrong while creating an city";
    ErrorResponse.error = new AppError(
      ["Name not found on the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

export { validateCreateCityRequest };
