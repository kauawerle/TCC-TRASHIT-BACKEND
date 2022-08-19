import Sequelize from 'sequelize';
import { db } from '../connection';

const UserModel = db.define('user', {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},

	name: {
		type: Sequelize.STRING,
		allowNull: false
	},

	email: {
		type: Sequelize.STRING,
		allowNull: false
	},

	cnpj: {
		type: Sequelize.STRING,
		allowNull: true
	},

	city: {
		type: Sequelize.STRING,
		allowNull: false
	},

	uf: {
		type: Sequelize.STRING,
		allowNull: false
	},

	number: {
		type: Sequelize.STRING,
		allowNull: false
	},

	password: {
		type: Sequelize.STRING,
		allowNull: false
	},

});

export { UserModel };
