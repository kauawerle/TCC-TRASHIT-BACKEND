import { Request, Response } from "express";
import { v4 } from "uuid";
import { UserModel } from "../../database/model/user";

class UserController {
	async findAll(req: Request, res: Response) {
		try {
			const users = await UserModel.findAll();
			res.json(users);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}
	async findById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			UserModel.findByPk(id).then(result => {
				res.status(200).json(result)
			});
		} catch (err) {
			return res.status(500).json(err);

		}
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

			return res.status(201).json(user);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}
	async update(req: Request, res: Response) {
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

			await UserModel.update({
				name,
				email,
				password,
				cnpj,
				city,
				uf,
				number
			}, {
				where: {
					id: req.params.id
				}
			}).then(result => {
				res.status(200).json(result)
			});

		} catch (err) {
			return res.status(500).json(err);

		}
	}
	async destroy(req: Request, res: Response) {
		try {
			await UserModel.destroy({
				where: {
					id: req.params.id
				}
			}).then(result => {
				res.status(200).json({result: 'deletado'});
			})
		} catch (err) {
			return res.status(500).json(err);
		}
	}

}

export default new UserController();
