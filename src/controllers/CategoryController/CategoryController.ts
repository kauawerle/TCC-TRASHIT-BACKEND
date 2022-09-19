import { Request, Response } from "express";
import { v4 } from "uuid";
import { CategoriesModel } from "../../database/model/tb_categoria";
import { db } from "../../database/connection";
import { QueryTypes } from "sequelize";
import sequelize  from "sequelize"
class CategoryController {
	async index(req: Request, res: Response) {

	}

	async findAll(req: Request, res: Response) {
		
		try {
			let {id, title, image} = req.body;
			const categorias = await CategoriesModel.findAll();
			image = `http://192.168.0.107:3333/uploads/${req.file.path}`
			const sas =	categorias.every((category) => {
				id: v4(),
				title,
				image
			})

			return res.json(sas);
		}
		catch (err) {
			return res.status(500).json(err);
		}
	}
	async findById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			CategoriesModel.findByPk(id).then(result => {
				res.status(200).json(result)
			});
		} catch (err) {
			return res.status(500).json(err);
		}
	}
	async create(req: Request, res: Response) {
		try {
			const { title } = req.body;

			const category = await CategoriesModel.create({
				id: v4(),
				title,
				imageDate: `http://192.168.0.107:3333/uploads/${req.file.path}`
			});

			return res.status(200).json(category);
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ err: err.message });
		}
	}

}

export default new CategoryController();
