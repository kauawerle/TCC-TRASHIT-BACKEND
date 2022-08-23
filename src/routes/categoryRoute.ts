import { Router } from 'express';
import CategoryController from '../controllers/CategoryController/CategoryController';

const categoryRoutes = Router();

categoryRoutes.post("", CategoryController.create)

categoryRoutes.get("", CategoryController.findAll)

categoryRoutes.get(":id", CategoryController.findById)

categoryRoutes.put(":id", CategoryController.update)

categoryRoutes.delete(":id", CategoryController.destroy)

export default categoryRoutes;
