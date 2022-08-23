import Sequelize, { DataTypes } from 'sequelize';
import { db } from '../connection';

const CategoriesModel = db.define('tb_categoria', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	imageData: {
		type: DataTypes.BLOB('long'),
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false,
	}
});

export { CategoriesModel };
