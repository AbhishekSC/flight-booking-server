import { createAirplane } from "./airplane-controller.js";
import { getAirplanes } from "./airplane-controller.js";
import { infoHealth } from "./info-controller.js";

const infoController = {
  infoHealth,
};

const AirplaneController = {
  createAirplane,
  getAirplanes,
};

export { infoController, AirplaneController };
