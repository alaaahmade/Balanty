import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class stadiumsAttributes extends Model {
  declare user_id: number;
  declare address: string;
  declare description: string;
  declare price: number;
  declare ground: string;
}

const Stadium = stadiumsAttributes.init(
  {
    address: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    price: { type: DataTypes.INTEGER },
    ground: { type: DataTypes.STRING(50) },
  },
  {
    sequelize,
    modelName: 'Stadium',
    tableName: 'stadiums',
  },
);
export default Stadium;
