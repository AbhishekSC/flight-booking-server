import {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
} from "./airplane-controller.js";

import { createCity } from "./city-controller.js";

import { infoHealth } from "./info-controller.js";

const CityController = {
  createCity,
};

const infoController = {
  infoHealth,
};

const AirplaneController = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};

export { infoController, AirplaneController, CityController };
