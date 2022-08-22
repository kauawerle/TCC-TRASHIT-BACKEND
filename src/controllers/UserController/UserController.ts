import { Request, Response } from "express";
import { v4 } from "uuid";
import { UserModel } from "../../database/model/user";

class UserController {
	async findAll(req: Request, res: Response) {

	}
	async findOne(req: Request, res: Response) {

	}
	async create(req: Request, res: Response) {
		try {
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
				id: v4(),
				name,
				email,
				password,
				cnpj,
				city,
				uf,
				number
			});
			console.log(v4());
			

			return res.status(201).json(user);
		}
		catch (err) {
			console.log(v4());

			console.log(err);
			return res.status(500).json(err);
		}
	}
	async update(req: Request, res: Response) {

	}
	async destroy(req: Request, res: Response) {

	}


}

export default new UserController();
