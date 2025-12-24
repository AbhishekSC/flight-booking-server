import { StatusCodes } from "http-status-codes";
import { CityRepository } from "../respositories/index.js";
import { AppError } from "../utils/errors/app-error.js";

const cityRepository = new CityRepository();

async function createCity(data) {
  try {
    const city = await cityRepository.create(data);
    console.log("inside service layer");
    return city;
  } catch (error) {
    // Client side issue
    if (
      error.name == "SequelizeValidationError" ||
      error.name == "SequelizeUniqueConstraintError"
    ) {
      let explanation = [];

      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }

    // TypeError and Sequelize Error
    throw new AppError(
      "Cannot create a new City object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export { createCity };
