import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';

const UserModel = db.define('tb_users', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},

	name: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	email: {
		type: Sequelize.STRING(200),
		allowNull: false
	},
	adm: {
		type: Sequelize.BOOLEAN,
		allowNull: false
	},
	cnpj: {
		type: Sequelize.STRING(200),
		allowNull: true
	},

	city: {
		type: Sequelize.STRING(200),
		allowNull: false
	},

	uf: {
		type: Sequelize.STRING(2),
		allowNull: false
	},

	number: {
		type: Sequelize.STRING(18),
		allowNull: false
	},

	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
});

export { UserModel };
