import { Router } from "express";
import { PetController } from "../controllers/PetController";

const petRouter = Router();

const petController = new PetController();

petRouter.post("/pets", (req, res) => petController.store(req, res));
petRouter.get("/pets", (req, res) => petController.index(req, res));
petRouter.get("/pets/:id", (req, res) => petController.show(req, res));
petRouter.put("/pets/:id", (req, res) => petController.update(req, res));
petRouter.delete("/pets/:id", (req, res) => petController.delete(req, res));

export { petRouter };
