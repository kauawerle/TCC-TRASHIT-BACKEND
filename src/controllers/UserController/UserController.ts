import { Request, Response } from "express";
import { v4 as V4Options } from "uuid";
import { UserModel } from "../../database/model/user";

class UserController {
	async findAll(req: Request, res: Response) {

	}
	async findOne(req: Request, res: Response) {

	}
	async create(req: Request, res: Response) {
		const {
			name,
			email,
			password,
			cnpj,
			city,
			uf,
			number
		} = req.body;

		const user = await UserModel.create({
			id: V4Options(),
			name,
			email,
			password,
			cnpj,
			city,
			uf,
			number
		});

		return res.status(201).json(user);
	}
	async update(req: Request, res: Response) {

	}
	async destroy(req: Request, res: Response) {

	}


}

export default new UserController();
