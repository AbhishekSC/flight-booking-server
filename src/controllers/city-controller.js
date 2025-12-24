import { StatusCodes } from "http-status-codes";
import { CityService } from "../services/index.js";
import { SuccessResponse, ErrorResponse } from "../utils/common/index.js";

/**
 * POST : /cities
 * req-body : {name: 'Indore'}
 */
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });

    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.error = error;
    res.status(error.statusCode).json(ErrorResponse);
  }
}

export { createCity };
