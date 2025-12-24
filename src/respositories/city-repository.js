import { CrudRepository } from "./crud-repository.js";
import models from "../models/index.js";

class CityRepository extends CrudRepository {
  constructor() {
    console.log("City model: ", models.City);
    super(models.City);
  }
}

export { CityRepository };
