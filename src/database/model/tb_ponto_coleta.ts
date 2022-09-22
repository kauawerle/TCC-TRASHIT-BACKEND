import Sequelize, { DataTypes,  } from 'sequelize';
import { db } from '../connection';


const PontoColetaModel = db.define('tb_ponto_categorias', {
	id_ponto_coleta: {
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
	}
});

export { PontoColetaModel };
