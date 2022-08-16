import express from 'express';
import multerConfig from '../config/multer';
import multer from 'multer';
import { Router } from 'express';
import CollectorController  from '../controllers/CollectorController/CollectorController';

const collectorRoutes = new CollectorController();

const routes = Router();

routes.post("/", (req, res) => {
    return collectorRoutes.create(req, res);
})

routes.get("/", (req, res) => {
    return collectorRoutes.list(req, res);
})

export default routes;
