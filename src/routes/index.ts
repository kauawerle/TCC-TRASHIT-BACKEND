import { Router } from 'express';

import userRoutes from './userRoutes';
import categoryRoutes from './categoryRoute';
import pontoColetaRoutes from './pontoColetaRoute';
import PontoCategoriesController from '../controllers/PontoCategoriesController/PontoCategoriesController';
import pontoCategoriesRoutes from './pontoCategoriesRoute';


const routes = Router();

routes.use('/user', userRoutes);
routes.use('/category', categoryRoutes);
routes.use('/pontocoleta', pontoColetaRoutes);
routes.use('/pontocategories', pontoCategoriesRoutes);

export {routes}
