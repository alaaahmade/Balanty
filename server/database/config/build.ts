import insertData from './insertData';
import { sequelize } from '..';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: true });
  await insertData();
};
export default build;
