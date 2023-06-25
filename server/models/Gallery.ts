import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

class Gallery extends Model {
  declare image1: string;
  declare image2: string;
  declare image3: string;
  declare image4: string;
  declare stadium_id: number;
}
Gallery.init(
  {
    image1: { type: DataTypes.TEXT },
    image2: { type: DataTypes.TEXT },
    image3: { type: DataTypes.TEXT },
    image4: { type: DataTypes.TEXT },
  },
  {
    sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
  },
);

export default Gallery;
