import { randomInt } from "node:crypto";
import type { Request, Response } from "express";
import type { PetType } from "../types/PetType";

export class PetController {
	private pets: PetType[] = [];

	criarPet(req: Request, res: Response) {
		const { nome, especie, idade, adotado } = req.body as PetType;

		const pet: PetType = {
			id: randomInt(1000),
			nome,
			especie,
			idade,
			adotado,
		};

		this.pets.push(pet);

		return res.status(201).json({ pet });
	}
}
