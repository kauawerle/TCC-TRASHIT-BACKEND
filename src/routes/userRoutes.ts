import { Router } from 'express';
import UserController from '../controllers/UserController/UserController';

const userRoutes = Router();

userRoutes.post("/user", UserController.create)

userRoutes.get("/user", UserController.findAll)

userRoutes.get("/user/:id", UserController.findById)

userRoutes.put("/user/:id", UserController.update)

userRoutes.delete("/user/:id", UserController.destroy)

export default userRoutes;
