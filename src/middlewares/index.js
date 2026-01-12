import { validateCreateRequest } from "./airplane-middlewares.js";
import { validateCreateCityRequest } from "./city-middlewares.js";

let CityMiddlewares = {
  validateCreateCityRequest,
};

let AirplaneMiddlewares = {
  validateCreateRequest,
};

export { AirplaneMiddlewares, CityMiddlewares };
