import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import path from 'path';
import { errors } from 'celebrate'
import { db } from './database/connection';


import swaggerUi from 'swagger-ui-express';

import swaggerFile from "../swagger.json";

const app = express();



app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(3333, async () => {
	await db.sync();
	console.log('server started');

});
