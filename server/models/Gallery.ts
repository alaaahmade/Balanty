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
    image1: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://img.youm7.com/ArticleImgs/2017/1/4/456524-%D9%85%D9%84%D8%B9%D8%A8-%D8%A7%D9%84%D9%86%D9%88%D8%B1-%D9%85%D8%B9%D9%82%D9%84-%D8%B3%D9%86%D8%AF%D8%B1%D9%84%D8%A7%D9%86%D8%AF.jpg',
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://fr.redacaoemcampo.com/img/reviews/99/sunderland-3.jpg',
    },
    image3: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://almrj3.com/wp-content/uploads/2022/09/%D8%B5%D9%88%D8%B1-%D9%85%D9%84%D8%B9%D8%A8-974-%D9%85%D9%86-%D8%A7%D9%84%D8%AF%D8%A7%D8%AE%D9%84-1.jpg',
    },
    image4: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://lh3.googleusercontent.com/vU_d67WsxBzkERVtMeDJKRRlD3DDG2dId--_2JgZrrL1UVlgOzwuGId2pTRugRMjZqu9uN2ddKA0RNhd0XROQVw6BcWzsuAR3pKgi-E',
    },
  },
  {
    sequelize,
    modelName: 'Gallery',
    tableName: 'gallery',
  },
);

export default Gallery;
