import { Sequelize } from 'sequelize';

const db = new Sequelize('postgres://postgres:postgres@localhost:5432/trash-it');

export { db };
