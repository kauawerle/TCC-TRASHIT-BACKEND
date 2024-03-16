import bcrypt from "bcrypt";
import { cnpj as Cnpjoto } from "cpf-cnpj-validator";
import { NextFunction, Request, Response } from "express";
import { Op } from "sequelize";
import { v4 } from "uuid";

import { UserModel } from "../../database/model/user";

interface UserInterface {
	name: string;
	email: string;
	password: string;
	adm: string;
	cnpj: string;
	city: string;
	uf: string;
	number: string;
}
class UserController {
	async findAll(req: Request, res: Response) {
		try {
			const users = await UserModel.findAll();
			res.json(users);
		} catch (err) {
			return res.status(500).json(err);
		}
	}
	async findById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			UserModel.findByPk(id).then((result) => {
				res.status(200).json(result);
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}

	async findByEmail(req: Request, res: Response, next: NextFunction) {
		try {
			const { email, password } = req.query;

			if (!email || email === "") {
				const response = {
					message: "É necessário informar um Email.",
				};
				res.status(401).send(response);
				return next(response);
			}

			if (!password || password === "") {
				const response = {
					message: "É necessário informar uma Senha.",
				};
				res.status(401).send(response);
				return next(response);
			}

			UserModel.findOne({ where: { email: email } }).then((result) => {
				var user = result.toJSON();

				const password = req.query.password.toString();
				const match = bcrypt.compareSync(password, user.password);

				const response = {
					message:
						"Acesso não autorizado!, verifique seus dados e tente novamente",
				};
				result && match
					? res.status(200).json(result)
					: res.status(401).send(response);
				return next(response);
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}

	async create(req: Request, res: Response) {
		try {
			const { name, email, password, adm, cnpj, city, uf, number } = req.body;

			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(password, salt);

			const emailVerification = await UserModel.findOne({
				where: {
					email: {
						[Op.eq]: email,
					},
				},
			});

			const cnpjVerification = await UserModel.findOne({
				where: {
					cnpj: {
						[Op.eq]: cnpj,
					},
				},
			});

			if (adm === true) {
				var isValid = Cnpjoto.isValid(cnpj);

				if (isValid == false) {
					return res.status(400).json({ message: "Cnpj inválido" });
				}
			}

			if (emailVerification || cnpjVerification) {
				return res.status(400).json({ message: "Conta já cadastrado verifique seu email ou Cnpj." });
			} else {
				const user = await UserModel.create({
					id: v4(),
					name,
					email,
					password: hash,
					adm,
					cnpj,
					city,
					uf,
					number,
				});
				return res.status(201).json(user);
			}
		} catch (err) {
			return res.status(500).json(err);
		}
	}

	async update(req: Request, res: Response) {
		try {
			const { name, email, password, adm, cnpj, city, uf, number } = req.body;
			var salt = bcrypt.genSaltSync(10);
			var hash = bcrypt.hashSync(password, salt);

			await UserModel.update(
				{
					name,
					email,
					password: hash,
					adm,
					cnpj,
					city,
					uf,
					number,
				},
				{
					where: {
						id: req.params.id,
					},
				}
			).then((result) => {
				res.status(200).json(result);
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}
	async destroy(req: Request, res: Response) {
		try {
			await UserModel.destroy({
				where: {
					id: req.params.id,
				},
			}).then((result) => {
				res.status(200).json({ result: "deletado" });
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}

export default new UserController();
