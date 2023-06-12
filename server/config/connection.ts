import { Sequelize } from 'sequelize';
import 'dotenv/config';
import { dbUrl, sequelizeOption } from './environment';

export const sequelize = new Sequelize(dbUrl, sequelizeOption);
