import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate'

import { db } from './database/connection';

import swaggerUi from 'swagger-ui-express';
import swaggerFile from "../swagger.json";

import { routes } from './routes/index';

const app = express();

const port = 3400

app.use(cors());

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(port, async () => {
	await db.sync();
	console.log('server started, port: ' + port);

});
