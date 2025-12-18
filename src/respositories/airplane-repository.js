import { CrudRepository } from "./crud-repository.js";
import models from "../models/index.js";

class AirplaneRepository extends CrudRepository {
  constructor() {
    console.log("Airplane model: ", models.Airplane);
    super(models.Airplane);
  }
}

export { AirplaneRepository };
