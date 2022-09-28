import { Request, Response } from "express";
import { v4 } from "uuid";
import { PontoCategoriesModel } from "../../database/model/tb_ponto_categoria";

class PontoCategoriesController {
	async index(req: Request, res: Response) {

	}

	async findAll(req: Request, res: Response) {
		try {
			const pontos = await PontoCategoriesModel.findAll();
			res.json(pontos);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}
	async findById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			PontoCategoriesModel.findByPk(id).then(result => {
				res.status(200).json(result)
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}
	async create(req: Request, res: Response) {
		try {
			const {
				id
			} = req.body;

			const pontos = await PontoCategoriesModel.create({
				id: v4()
			});

			return res.status(200).json(pontos);
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ err: err.message });
		}
	}

}

export default new PontoCategoriesController();
