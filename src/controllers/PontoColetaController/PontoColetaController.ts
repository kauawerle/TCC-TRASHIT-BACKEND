import { Request, Response } from "express";
import { v4 } from "uuid";
import { PontoColetaModel } from "../../database/model/tb_ponto_coleta";

class CategoryController {
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
				street,
				uf,
				city,
				country,
				image,
				id_user
			} = req.body;

			const pontos = await PontoColetaModel.create({
				id: v4(),
				name,
				image,
				latitude,
				longitude,
				street,
				uf,
				city,
				country,
				id_user
			});

			return res.status(200).json(pontos);
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ err: err.message });
		}
	}

}

export default new CategoryController();
