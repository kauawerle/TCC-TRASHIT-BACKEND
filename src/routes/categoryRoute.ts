import { Router } from 'express';
import multer from 'multer';
import CategoryController from '../controllers/CategoryController/CategoryController';

const upload = multer({dest: 'uploads/'});


const categoryRoutes = Router();

categoryRoutes.post("",  upload.single('image'), CategoryController.create)

categoryRoutes.get("", CategoryController.findAll)

categoryRoutes.get("/:id", CategoryController.findById)

categoryRoutes.put("/:id", CategoryController.update)

categoryRoutes.delete("/:id", CategoryController.destroy)

export default categoryRoutes;
