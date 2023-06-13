import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../database';

class ConversationAttributes extends Model {
  declare match_id: number;
  
}

export const Conversation = ConversationAttributes.init(
  {
    
  },
  { sequelize, modelName: 'Conversation', tableName: 'conversation' },
);
