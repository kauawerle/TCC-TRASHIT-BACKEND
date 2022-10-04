import { Router } from 'express';

import PontoCategoriesController from '../controllers/PontoCategoriesController/PontoCategoriesController';

const pontoCategoriesRoutes = Router();

pontoCategoriesRoutes.post("", PontoCategoriesController.create)

pontoCategoriesRoutes.get("", PontoCategoriesController.findAll)

pontoCategoriesRoutes.get("/:id", PontoCategoriesController.findById)


export default pontoCategoriesRoutes;
