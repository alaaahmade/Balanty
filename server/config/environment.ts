import 'dotenv/config';
import { Dialect } from 'sequelize';

const { DEV_DB_URL, DATABASE_URL, TEST_URL, NODE_ENV } = process.env;

export const { PORT } = process.env || 8080;
export interface connectionOption {
  dialect: Dialect;
  dialictoption?: {
    ssl: boolean | object;
  };
}

if (!NODE_ENV || !DATABASE_URL) {
  throw new Error('Invalid Enviroment Variables');
}
export const sequelizeOption: connectionOption = {
  dialect: 'postgres',
};

export let dbUrl = '';

if (NODE_ENV === 'production' && DATABASE_URL) {
  dbUrl = DATABASE_URL;
  sequelizeOption.dialictoption = { ssl: { rejectUnauthorized: false } };
} else if (NODE_ENV === 'development' && DEV_DB_URL) {
  dbUrl = DEV_DB_URL;
} else if (NODE_ENV === 'test' && TEST_URL) {
  dbUrl = TEST_URL;
} else {
  throw new Error('Invalid NODE_ENV');
}
