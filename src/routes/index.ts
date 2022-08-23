import { Router } from 'express';
import userRoutes from './userRoutes';
import categoryRoutes from './categoryRoute';


const routes = Router();

routes.use('/user/', userRoutes);
routes.use('/category/', categoryRoutes);

export {routes}
