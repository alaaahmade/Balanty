import { sequelize } from '../config/connection';
import insertData from './InsertData';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: true });
  await insertData();
};
export default build;
