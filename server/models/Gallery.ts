import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Gallery extends Model {
  declare image: string;
  declare stadium_id: number;
}
Gallery.init(
  {
    image: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
  },
);

export default Gallery;
