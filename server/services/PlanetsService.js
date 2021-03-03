import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async delete(id) {
      let planets = await dbContext.Planets.findByIdAndDelete(id)
      return planets
  }
  async find(query={}) {
    let planets = await dbContext.Planets.find(query);
    return planets;
  }
  async findById(id) {
    let planet = await dbContext.Planets.findById(id).populate("star","title");
    if (!planet) {
      throw new BadRequest("Invalid Id");
    }
    return planet;
  }
  async create(body){
    return await dbContext.Planets.create(body)
  }
}

export const planetsService = new PlanetsService();