import { sequelize } from '..';
import insertData from './insertData';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: true });
  await insertData();
};
export default build;
