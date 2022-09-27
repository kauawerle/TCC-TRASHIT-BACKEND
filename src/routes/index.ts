import { Router } from 'express';

import userRoutes from './userRoutes';
import categoryRoutes from './categoryRoute';
import pontoColetaRoutes from './pontoColetaRoute';


const routes = Router();

routes.use('/user', userRoutes);
routes.use('/category', categoryRoutes);
routes.use('/pontocoleta', pontoColetaRoutes);

export {routes}
