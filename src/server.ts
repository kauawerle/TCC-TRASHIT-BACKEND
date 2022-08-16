import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import path from 'path';
import {errors} from 'celebrate'
import { db } from './database/connection';

const app = express();

const con = db();
app.set("db", con);

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());
app.listen(3333);