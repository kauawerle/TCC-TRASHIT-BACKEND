import express from 'express';
import multerConfig from '../config/multer';
import multer from 'multer';
import { Router } from 'express';
import UserController from '../controllers/UserController/UserController';

const routes = Router();

routes.post("/user", UserController.create)

routes.get("/user", UserController.findAll)

routes.get("/user/:id", UserController.findById)

routes.put("/user/:id", UserController.update)

routes.delete("/user/:id", UserController.destroy)

export default routes;
