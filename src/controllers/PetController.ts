import { randomInt } from "node:crypto";
import type { Request, Response } from "express";

type Pet = {
	readonly id: number;
	nome: string;
	especie: string;
	idade: number;
	adotado: boolean;
};

export class PetController {
	private pets: Pet[] = [];

	criarPet(req: Request, res: Response) {
		const { nome, especie, idade, adotado } = req.body as Pet;
		const pet = {
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
