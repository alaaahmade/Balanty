import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';
console.log(sequelize);

class Stadium extends Model {
  declare user_id: number;
  declare address: string;
  declare description: string;
  declare price: number;
  declare ground: string;
}

Stadium.init(
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
