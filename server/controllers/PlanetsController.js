import express from "express";
import BaseController from "../utils/BaseController";
import { planetsService } from "../services/PlanetsService";

export class PlanetsController extends BaseController {
  constructor() {
    super("api/planets");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .get("/:id",this.getById)
      .delete("/:id",this.delete)
  }
  async getAll(req, res, next) {
    try {
      res.send(await planetsService.find(req.query));

    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.send(201, await planetsService.create(req.body));
    } catch (error) {
      next(error);
    }
  }
  async getById(req,res,next){
      try {
        res.send(await planetsService.findById(req.params.id));
      } catch (error) {
          next(error);
      }
  }
  async delete(req,res,next){
    try {
      res.send(await planetsService.delete(req.params.id));
    } catch (error) {
        next(error);
    }
}
  
}
