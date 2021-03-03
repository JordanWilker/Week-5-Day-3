import express from "express";
import BaseController from "../utils/BaseController";
import { starsService } from "../services/StarsService";

export class StarsController extends BaseController {
  constructor() {
    super("api/stars");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id",this.getById)
      .delete("/:id",this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await starsService.find(req.query));

    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await starsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
  async getById(req,res,next){
      try {
        res.send(await starsService.findById(req.params.id));
      } catch (error) {
          next(error);
      }
  }
  async delete(req,res,next){
    try {
      res.send(await starsService.delete(req.params.id));
    } catch (error) {
        next(error);
    }
}
  
}
