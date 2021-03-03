import mongoose from "mongoose";
import Star from "./Star";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId


const Planet = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    star: {type: ObjectId, ref: "Star", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Planet;
