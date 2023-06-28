import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Gallery extends Model {
  declare image: string;
  declare StadiumId: number;
}
Gallery.init(
  {
    StadiumId: DataTypes.INTEGER,
    image: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
  },
);

export default Gallery;
