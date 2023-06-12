import { Sequelize } from 'sequelize';
import 'dotenv/config';
import { dbUrl, sequelizeOption } from '../../config';

export const sequelize = new Sequelize(dbUrl, {
  ...sequelizeOption,
});
