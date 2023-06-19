import 'dotenv/config';
import { Dialect } from 'sequelize';

const { DEV_DB_URL, DATABASE_URL, TEST_URL, NODE_ENV } = process.env;

export const { PORT } = process.env || 8080;
export const { SECRET_KEY } = process.env;

interface connectionOption {
  dialect: Dialect;
  dialectOptions?: {
    ssl: boolean | object;
  };
}

if (!NODE_ENV || !DATABASE_URL) {
  throw new Error('Invalid Environment Variables');
}
export const sequelizeOption: connectionOption = {
  dialect: 'postgres',
};

export let dbUrl = '';

if (NODE_ENV === 'production' && DATABASE_URL) {
  dbUrl = DATABASE_URL;
  sequelizeOption.dialectOptions = { ssl: { rejectUnauthorized: false } };
} else if (NODE_ENV === 'development' && DEV_DB_URL) {
  sequelizeOption.dialectOptions = { ssl: false };
  dbUrl = DEV_DB_URL;
} else if (NODE_ENV === 'test' && TEST_URL) {
  sequelizeOption.dialectOptions = { ssl: false };
  dbUrl = TEST_URL;
} else {
  throw new Error('Invalid NODE_ENV');
}
