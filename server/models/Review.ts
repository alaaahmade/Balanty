import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/config/connection';

class Review extends Model {
  public id!: number;
  public player_id!: number;
  public Stadium_id!: number;
}

Review.init(
  {
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Player',
        key: 'id',
      },
    },
    Stadium_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Stadium',
        key: 'id',
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
