import Sequelize, { DataTypes, QueryTypes } from 'sequelize';
import { db } from '../connection';
import { CategoriesModel } from './tb_categoria';


const PontoCategoriesModel = db.define('tb_ponto_categorias', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	cod_categoria: {
		type: DataTypes.UUID,
		references: {
			model: CategoriesModel,
			key: 'id',
		}
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false,
	}
	
});

export { PontoCategoriesModel };
