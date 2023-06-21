import insertData from './insertData';
import { sequelize } from '..';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: false });
  await insertData();
};
export default build;
