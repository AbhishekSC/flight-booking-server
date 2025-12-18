import {
  createAirplane,
  getAirplanes,
  getAirplane,
} from "./airplane-controller.js";
import { infoHealth } from "./info-controller.js";

const infoController = {
  infoHealth,
};

const AirplaneController = {
  createAirplane,
  getAirplanes,
  getAirplane,
};

export { infoController, AirplaneController };
