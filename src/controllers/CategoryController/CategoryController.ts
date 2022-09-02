import { Request, Response } from "express";
import { v4 } from "uuid";
import { CategoriesModel } from "../../database/model/tb_categoria";
import fs from 'fs'

class CategoryController {
	async findAll(req: Request, res: Response) {
	
	}
	async findById(req: Request, res: Response) {
		
	}
	async create(req: Request, res: Response) {
		try {
			var __basedir: string;
			const {title} = req.body;
			// const {imageData} = req.file.mimetype;
			
			const category = await CategoriesModel.create({
				id: v4(),
				title, 
				// imageData
			});
			
			return res.status(200).json(category);
		}
		catch (err) {
			console.log(err);
			return res.status(500).json({ err: err.message });
		}
	}
	async update(req: Request, res: Response) {
		
	}
	async destroy(req: Request, res: Response) {
	
	}

}

export default new CategoryController();
