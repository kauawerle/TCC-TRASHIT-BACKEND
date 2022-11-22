import { Request, Response } from "express";
import { v4 } from "uuid";
import { QueryTypes } from "sequelize";

import { PontoColetaModel } from "../../database/model/tb_ponto_coleta";
import { PontoCategoriesModel } from "../../database/model/tb_ponto_categoria";
import { CategoriesModel } from "../../database/model/tb_categoria";

class PontoColetaController {
	async index(req: Request, res: Response) {

	}

	async findAll(req: Request, res: Response) {
		try {
			const pontos = await PontoColetaModel.findAll();
			res.json(pontos);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}

	async findByCategories(req: Request, res: Response) {
		try {
			const { id_category } = req.query;

			if (id_category == undefined) {
				const pontos = await PontoColetaModel.findAll();
				res.json(pontos);
			} else {
				const categoryFiltered = await PontoCategoriesModel.findAll({
					where: [{ "id_category": id_category }],
					include: [{
						model: PontoColetaModel,
					}]
				})

				const uniqueCategories = Object.values(categoryFiltered).reduce((acc, curr: any) => {
					const index = acc.findIndex(a => a.id_category !== curr.id_category);
					if (index < 0 && curr.id_category) {
						acc.push(curr)

					}
					return acc
				}, [])

				res.status(200).json(uniqueCategories)
			}
		} catch (err) {
			return res.status(500).json(err);
		}
	}

	async findCategoriesByPoint(req: Request, res: Response) {
		try {
			const { id_ponto } = req.query;

			const categoryFiltered = await CategoriesModel.findAll({
				include: [{
					where: [{ "id_ponto": id_ponto }],
					model: PontoCategoriesModel,
				}]
			})

			res.status(200).json(categoryFiltered)

		} catch (err) {
			return res.status(500).json(err);
		}
	}

	async findById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			PontoColetaModel.findByPk(id).then(result => {
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
				latitude,
				longitude,
				uf,
				city,
				country,
				image,
				items,
				id_user,
				status,
				email,
				cellphone
			} = req.body;


			const pontos = {
				id: v4(),
				name,
				image,
				latitude,
				longitude,
				uf,
				city,
				country,
				id_user,
				email,
				cellphone,
				status
			};

			const insertedIds: any = await PontoColetaModel.create(pontos)
			const pontoId = insertedIds.id

			const pointItems = items
				.split(',')
				.map((item_id: string) => {
					return {
						id_category: item_id,
						id_ponto: pontoId,
					}
				})

			Object.values(pointItems).map((point_category: any) => {
				const id_category = point_category.id_category
				const id_ponto = point_category.id_ponto
				PontoCategoriesModel.create({
					id_category,
					id_ponto
				})

			})

			return res.json({
				id: pontoId,
				...pontos
			})
		}
		catch (err) {
			return res.status(500).json({ err: err.message });
		}
	}

	async destroy(req: Request, res: Response) {
		try {
			const { id } = req.query;

			const destroyCategories =
				await PontoCategoriesModel.destroy({
					where: { id_ponto: id }
				})

			const destroyPoints =
				await PontoColetaModel.destroy({
					where: { id: id }
				})

			res.status(200).json([destroyPoints, destroyCategories])
		} catch (err) {
			return res.status(500).json(err);
		}
	}
}

export default new PontoColetaController();
