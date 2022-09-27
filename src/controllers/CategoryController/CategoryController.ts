import { Request, Response } from "express";
import { v4 } from "uuid";
import { CategoriesModel } from "../../database/model/tb_categoria";

class CategoryController {
	async index(req: Request, res: Response) {

	}

	async findAll(req: Request, res: Response) {
		
		try {
			const categories = await CategoriesModel.findAll();
			res.json(categories);
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

	async destroy(req: Request, res: Response) {
		try {
			await CategoriesModel.destroy({
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

export default new CategoryController();
