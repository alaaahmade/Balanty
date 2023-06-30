import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Stadium extends Model {
  declare user_id: number;
  declare address: string;
  declare description: string;
  declare price: number;
  declare ground: string;
}

Stadium.init(
  {
    address: { type: DataTypes.STRING, defaultValue: 'قم باضافة عنوانك' },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'يمكنك اضافة وصف من هنا',
    },
    price: { type: DataTypes.INTEGER, defaultValue: 0 },
    ground: {
      type: DataTypes.STRING(50),
      defaultValue: 'يمكنك اضافة نوع الارضية ',
    },
  },
  {
    sequelize,
    modelName: 'Stadium',
    tableName: 'stadiums',
  },
);
export default Stadium;
