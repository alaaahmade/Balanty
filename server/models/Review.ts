import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Review extends Model {
  declare PlayerId: number;
  declare StadiumId: number;
  declare value: string;
}

Review.init(
  {
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 0.5,
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
