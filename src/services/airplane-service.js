import { StatusCodes } from "http-status-codes";
import { AirplaneRepository } from "../respositories/index.js";
import { AppError } from "../utils/errors/app-error.js";

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRepository.create(data);
    return airplane;
  } catch (error) {
    // Client side issue
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      // errors" [
      //   ValidationErrorItem {
      //     message: "",
      //     type: "",
      //     path: "",
      //     value: "",
      //     instance: ""
      //   },
      //   {},
      //   {},
      //   {}
      // ];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(`Error Explanation: ${explanation}`);
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    // TypeError and Sequelize Error
    throw new AppError(
      "Cannot create a new Airplane object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getAirplanes() {
  try {
    const airplanes = await airplaneRepository.getAll();
    return airplanes;
  } catch (error) {
    throw new AppError(
      "Cannot fetch data of all the airplanes",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export { createAirplane, getAirplanes };
