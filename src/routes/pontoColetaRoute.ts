import { Router } from 'express';
import multer from 'multer';
import PontoColetaController from '../controllers/PontoColetaController/PontoColetaController';

import uploads from '../config/multer';

const pontoColetaRoutes = Router();

pontoColetaRoutes.post("", uploads.single('imageData'), PontoColetaController.create)

pontoColetaRoutes.get("", PontoColetaController.findAll)

pontoColetaRoutes.get("/:id", PontoColetaController.findById)


export default pontoColetaRoutes;
