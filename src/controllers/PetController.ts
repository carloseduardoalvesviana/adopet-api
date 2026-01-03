import type { Request, Response } from "express";
import type { PetType } from "../types/PetType";

export class PetController {
	private pets: PetType[] = [];

	index(_req: Request, res: Response) {
		return res.status(200).json({ pets: this.pets });
	}

	show(req: Request, res: Response) {
		const { id } = req.params;

		const pet = this.pets.find((p) => p.id === Number(id));

		if (!pet) {
			return res.status(404).json({ message: "Pet não encontrado" });
		}

		return res.status(200).json({ pet });
	}

	update(req: Request, res: Response) {
		const { id } = req.params;
		const { nome, especie, idade, adotado } = req.body as PetType;

		const pet = this.pets.find((p) => p.id === Number(id));

		if (!pet) {
			return res.status(404).json({ message: "Pet não encontrado" });
		}

		Object.assign(pet, { nome, especie, idade, adotado });

		return res.status(200).json({ pet });
	}

	delete(req: Request, res: Response) {
		const { id } = req.params;

		const petIndex = this.pets.findIndex((p) => p.id === Number(id));

		if (petIndex === -1) {
			return res.status(404).json({ message: "Pet não encontrado" });
		}

		this.pets.splice(petIndex, 1);

		return res.status(204).send();
	}

	store(req: Request, res: Response) {
		const { nome, especie, idade, adotado } = req.body as PetType;

		const pet: PetType = {
			id: this.pets.length + 1,
			nome,
			especie,
			idade,
			adotado,
		};

		this.pets.push(pet);

		return res.status(201).json({ pet });
	}
}
