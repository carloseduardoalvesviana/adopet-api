import { Router } from "express";
import { PetController } from "../controllers/PetController";

const petRouter = Router();

const petController = new PetController();

petRouter.post("/pets", (req, res) => petController.criarPet(req, res));

export default petRouter;
