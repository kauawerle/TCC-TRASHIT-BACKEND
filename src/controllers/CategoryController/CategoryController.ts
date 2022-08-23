import { Request, Response } from "express";
import multer from "multer";
import { v4 } from "uuid";
import { CategoriesModel } from "../../database/model/tb_categoria";

class CategoryController {
	async findAll(req: Request, res: Response) {
	
	}
	async findById(req: Request, res: Response) {
		
	}
	async create(req: Request, res: Response) {
		try {
			const {title} = req.body;
			const storage = multer.memoryStorage();

			const upload = multer({storage: storage});
			

			const category = await CategoriesModel.create({
				id: v4(),
				title,
				imageData: req.file.buffer, 
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
