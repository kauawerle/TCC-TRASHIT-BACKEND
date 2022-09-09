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
	async findByEmail(req: Request, res: Response) {
		try {
			const { email, password } = req.query;
			UserModel.findOne({ where: { email: email, password: password} })
				.then((result) => {
					result ?
					res.status(200).json(result)
					: res.status(500)
				});
		} catch (err) {
			throw err

		}
	}

	async create(req: Request, res: Response) {
		try {
			const {
				name,
				email,
				password,
				adm,
				cnpj,
				city,
				uf,
				number
			} = req.body;

			console.log(
				name,
				email,
				password,
				adm,
				cnpj,
				city,
				uf,
				number
			)

			const user = await UserModel.create({
				id: v4(),
				name,
				email,
				password,
				adm,
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
				adm,
				cnpj,
				city,
				uf,
				number
			} = req.body;

			await UserModel.update({
				name,
				email,
				password,
				adm,
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
				res.status(200).json({ result: 'deletado' });
			})
		} catch (err) {
			return res.status(500).json(err);
		}
	}

}

export default new UserController();
