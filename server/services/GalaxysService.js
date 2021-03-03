import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxysService {
  async delete(id) {
    let galaxys = await dbContext.Galaxys.findByIdAndDelete(id)
      return galaxys
  }
  async find(query={}) {
    let galaxys = await dbContext.Galaxys.find(query);
    return galaxys;
  }
  async findById(id) {
    let galaxy = await dbContext.Galaxys.findById(id);
    if (!galaxy) {
      throw new BadRequest("Invalid Id");
    }
    return galaxy;
  }
  async create(body){
    return await dbContext.Galaxys.create(body)
  }
  async getById(req,res,next){
    try {
      res.send(await galaxysService.findById(req.params.id));
    } catch (error) {
        next(error);
    }
}
}

export const galaxysService = new GalaxysService();