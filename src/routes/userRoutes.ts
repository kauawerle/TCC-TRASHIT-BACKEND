import { Router } from 'express';
import UserController from '../controllers/UserController/UserController';

const userRoutes = Router();

userRoutes.post("", UserController.create)

userRoutes.get("", UserController.findAll)

userRoutes.get("/authent/:email", UserController.findByEmail)

userRoutes.get("/:id", UserController.findById)

userRoutes.put("/:id", UserController.update)

userRoutes.delete("/:id", UserController.destroy)

export default userRoutes;
