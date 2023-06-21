import { Player } from '../models';

const playerService = async (userId: number) => {
  const player = await Player.findByPk(userId);
  return player;
};

export { playerService };
