import { sequelize } from '..';
import { nodeEnv } from '../../config';
import insertData from './insertData';

const build = async (): Promise<void> => {
  await sequelize.sync({ force: true, logging: false });
  await insertData();
};
if (nodeEnv !== 'test') {
  build();
}
export default build;
