import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class MatchPlayer extends Model {
  declare userId: number;
  declare matchId: number;
}

MatchPlayer.init(
  {
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
  },
  { sequelize, modelName: 'MatchPlayer', tableName: 'MatchPlayer' },
);

export default MatchPlayer;
