import { DataTypes } from 'sequelize';
import { db } from '../connection';

const PontoCategoriesModel = db.define('tb_ponto_categorias', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		allowNull: false,
		primaryKey: true
	}

});

export { PontoCategoriesModel };
