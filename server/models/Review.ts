import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Review extends Model {
  declare PlayerId: number;
  declare StadiumId: number;
  declare value: number;
}

Review.init(
  {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
  },
  {
    sequelize,
    modelName: 'Review',
    tableName: 'reviews',
  },
);

export default Review;
