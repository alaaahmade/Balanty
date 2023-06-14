import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/config/connection';

class Review extends Model {
  declare player_id: number;
  declare Stadium_id: number;
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
