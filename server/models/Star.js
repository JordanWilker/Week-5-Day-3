import mongoose from "mongoose";
import Galaxy from "./Galaxy";
const Schema = mongoose.Schema;
const ObjectId = mongoose.SchemaTypes.ObjectId


const Star = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    galaxy: {type: ObjectId, ref: "Galaxy", required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Star;
