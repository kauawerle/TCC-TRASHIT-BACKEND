import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/trash-it')

export { sequelize };
