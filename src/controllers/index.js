import {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
} from "./airplane-controller.js";
import { infoHealth } from "./info-controller.js";

const infoController = {
  infoHealth,
};

const AirplaneController = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
};

export { infoController, AirplaneController };
