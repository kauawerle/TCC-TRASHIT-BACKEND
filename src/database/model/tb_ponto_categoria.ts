import Sequelize, { DataTypes, QueryTypes } from 'sequelize';
import { db } from '../connection';
import { CategoriesModel } from './tb_categoria';
import { PontoColetaModel } from './tb_ponto_coleta';


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

PontoColetaModel.belongsTo(PontoCategoriesModel, {
	constraints: true,
	foreignKey: 'id_category',
});

export { PontoCategoriesModel };
