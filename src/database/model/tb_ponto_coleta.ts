import Sequelize, { DataTypes, } from 'sequelize';
import { db } from '../connection';
import { PontoCategoriesModel } from './tb_ponto_categoria';


const PontoColetaModel = db.define('tb_ponto_coleta', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	image: {
		type: DataTypes.STRING(10485760),
		allowNull: false,
	},
	latitude: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	longitude: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
	street: {
		type: DataTypes.STRING(100),
		allowNull: true,
	},
	uf: {
		type: DataTypes.STRING(2),
		allowNull: false,
	},
	city: {
		type: DataTypes.STRING(120),
		allowNull: false,
	},
	country: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	status: {
		type: DataTypes.STRING(20),
		allowNull: true
	},
	cellphone: {
		type: DataTypes.STRING(16),
		allowNull: true,
	},
	email: {
		type: DataTypes.STRING(255),
		allowNull: true,
	},
	description: {
		type: DataTypes.STRING(255),
		allowNull: true,
	}
});

PontoCategoriesModel.belongsTo(PontoColetaModel, {
	constraints: true,
	foreignKey: 'id_ponto',
});



export { PontoColetaModel };
