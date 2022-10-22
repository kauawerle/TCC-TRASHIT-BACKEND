import express from 'express';
import cors from 'cors';
import path from 'path';
import { errors } from 'celebrate'

import { db } from './database/connection';

import swaggerUi from 'swagger-ui-express';
import bodyParser from 'body-parser';
import swaggerFile from "../swagger.json";

import { routes } from './routes';

const app = express();



app.use(cors());

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb' }));

app.use(routes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333, async () => {
	await db.sync();
	console.log('server started');

});
