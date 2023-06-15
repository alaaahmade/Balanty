import { sequelize } from '../config';

const build = () => {
  sequelize.sync({ force: true });
};

export default build;
