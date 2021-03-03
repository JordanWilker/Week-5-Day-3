import GalaxysSchema from "../models/Galaxy";
import StarsSchema from "../models/Star"
import PlanetSchema from "../models/Planet"
import mongoose from "mongoose";

class DbContext {
  Galaxys = mongoose.model("Galaxy", GalaxysSchema);
  Stars = mongoose.model("Star", StarsSchema)
  Planets = mongoose.model("Planet", PlanetSchema)
}

export const dbContext = new DbContext();
