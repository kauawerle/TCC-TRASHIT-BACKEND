import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';
import { CategoriesModel } from './tb_categoria';

const PontoColetaModel = db.define('tb_ponto_categorias', {
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
	// image: {
	// 	type: DataTypes
	// }
	
});

export { PontoColetaModel };
