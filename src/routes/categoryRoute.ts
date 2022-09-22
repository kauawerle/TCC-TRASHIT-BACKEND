import { Router } from 'express';
import multer from 'multer';
import CategoryController from '../controllers/CategoryController/CategoryController';

import uploads from '../config/multer';

const categoryRoutes = Router();

categoryRoutes.post("",  uploads.single('imageData'), CategoryController.create)

categoryRoutes.get("", CategoryController.findAll)

categoryRoutes.get("/:id", CategoryController.findById)

categoryRoutes.delete("/:id", CategoryController.destroy)


export default categoryRoutes;
