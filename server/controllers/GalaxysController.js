import express from "express";
import BaseController from "../utils/BaseController";
import { galaxysService } from "../services/GalaxysService";
import { starsService } from "../services/StarsService";

export class GalaxysController extends BaseController {
  constructor() {
    super("api/galaxys");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id/stars", this.getStarsByGalaxy)
      .delete("/:id", this.delete)
      .get("/:id",this.getById)

  }
  async getById(req,res,next){
    try {
      res.send(await galaxysService.findById(req.params.id));
    } catch (error) {
        next(error);
    }
}

  async getAll(req, res, next) {
    try {
      res.send(await galaxysService.find(req.query));

    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await galaxysService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
  async getStarsByGalaxy(req, res, next){
    try{
      res.send(await starsService.find({ galaxy: req.params.id }));
    }catch (error){
      next(error)
    }
  }
  async delete(req,res,next){
    try {
      res.send(await galaxysService.delete(req.params.id));
    } catch (error) {
        next(error);
    }
}
}
