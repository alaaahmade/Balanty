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
        'https://lh3.googleusercontent.com/vU_d67WsxBzkERVtMeDJKRRlD3DDG2dId--_2JgZrrL1UVlgOzwuGId2pTRugRMjZqu9uN2ddKA0RNhd0XROQVw6BcWzsuAR3pKgi-E',
    },
    image2: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://lh3.googleusercontent.com/vU_d67WsxBzkERVtMeDJKRRlD3DDG2dId--_2JgZrrL1UVlgOzwuGId2pTRugRMjZqu9uN2ddKA0RNhd0XROQVw6BcWzsuAR3pKgi-E',
    },
    image3: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue:
        'https://lh3.googleusercontent.com/vU_d67WsxBzkERVtMeDJKRRlD3DDG2dId--_2JgZrrL1UVlgOzwuGId2pTRugRMjZqu9uN2ddKA0RNhd0XROQVw6BcWzsuAR3pKgi-E',
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
