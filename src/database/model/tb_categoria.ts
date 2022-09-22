import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';
import { PontoColetaModel } from './tb_ponto_coleta';

const CategoriesModel = db.define('tb_categorias', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	imageData: {
		type: DataTypes.STRING(100),
		allowNull: true
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	createdAt: {
		type: DataTypes.DATE,
		allowNull: true,
	},
	updatedAt: {
		type: DataTypes.DATE,
		allowNull: true,
	}
	
});

PontoColetaModel.belongsTo(CategoriesModel, {
	constraints: true,
	foreignKey: 'id_category'
})

PontoColetaModel.belongsTo(CategoriesModel);

export { CategoriesModel };
