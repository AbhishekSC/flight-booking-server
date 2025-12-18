import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import { AppError } from "../utils/errors/app-error.js";

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating an airplane";
    ErrorResponse.error = new AppError(
      ["Model Number not found on the oncoming request in the correct form"],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

export { validateCreateRequest };
