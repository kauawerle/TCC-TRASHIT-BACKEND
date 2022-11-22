import { Sequelize } from 'sequelize';

let db = new Sequelize('postgres://postgres:root@localhost:5432/trash-it');


	export { db };
