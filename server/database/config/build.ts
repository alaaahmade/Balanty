mport { sequelize } from '..';
import { BUILD_DB } from '../../config';
import insertData from './insertData';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: false });
  await insertData();
};

if (BUILD_DB) {
  build();
}

export default build;
