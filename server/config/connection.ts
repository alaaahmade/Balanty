import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(
  'postgres://ecommerce:123@localhost:5432/balanty',
);
