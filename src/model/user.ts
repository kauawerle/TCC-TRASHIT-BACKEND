import Sequelize from 'sequelize';
const database = require('./db');

const User = database.define('user', {
	id: {
		type: Sequelize.INTEGER,
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
		allowNull: false
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

export { User };
