import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async delete(id) {
    let stars = await dbContext.Stars.findByIdAndDelete(id)
    return stars
  }
  async find(query={}) {
    let stars = await dbContext.Stars.find(query);
    return stars;
  }
  async findById(id) {
    let star = await dbContext.Stars.findById(id).populate("galaxy","title");
    if (!star) {
      throw new BadRequest("Invalid Id");
    }
    return star;
  }
  async create(body){
    return await dbContext.Stars.create(body)
  }
}

export const starsService = new StarsService();