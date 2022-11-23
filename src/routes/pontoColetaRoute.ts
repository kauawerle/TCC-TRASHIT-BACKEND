import { Router } from 'express';
import multer from 'multer';
import PontoColetaController from '../controllers/PontoColetaController/PontoColetaController';

import uploadImage from '../config/multer';

const pontoColetaRoutes = Router();

pontoColetaRoutes.post("", uploadImage.single('imageData'), PontoColetaController.create)

pontoColetaRoutes.get("", PontoColetaController.findAll)

pontoColetaRoutes.get("/findCa", PontoColetaController.findByCategories)

pontoColetaRoutes.get("/findCategoriesByPoint", PontoColetaController.findCategoriesByPoint)

pontoColetaRoutes.get("/:id", PontoColetaController.findById)
 
pontoColetaRoutes.delete("/delete", PontoColetaController.destroy)

pontoColetaRoutes.put("/:id", PontoColetaController.updateStatus)

export default pontoColetaRoutes;
