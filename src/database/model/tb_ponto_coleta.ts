import Sequelize, { DataTypes,  } from 'sequelize';
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
		type: DataTypes.STRING(100),
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
	//Status 0: Pendente; Status 1: Aceito; Status 2: Recusado
	status: {
		type: DataTypes.INTEGER,
		allowNull: true
	}
});

PontoCategoriesModel.belongsTo(PontoColetaModel, {
	constraints: true,
	foreignKey: 'id_ponto',
});



export { PontoColetaModel };
