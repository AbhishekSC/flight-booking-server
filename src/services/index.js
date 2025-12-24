import {
  createAirplane,
  getAirplane,
  getAirplanes,
  destroyAirplane,
} from "./airplane-service.js";

import { createCity } from "./city-service.js";

const CityService= {
  createCity,
}

const AirplaneService = {
  createAirplane,
  getAirplane,
  getAirplanes,
  destroyAirplane,
};

export { AirplaneService, CityService };
