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
    StadiumId: DataTypes.INTEGER,
    image: {
      type: DataTypes.TEXT,
      defaultValue:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Etihad_Stadium.jpg/1024px-Etihad_Stadium.jpg',
    },
  },
  {
    sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
  },
);

export default Gallery;
