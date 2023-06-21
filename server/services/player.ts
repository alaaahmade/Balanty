import { Player } from '../models';

const getPlayerById = async (userId: number) => {
  const player = await Player.findByPk(userId);
  return player;
};

const updatePlayerById = async (playerId: number, updatedData: object) => {
  const [updatedPlayer] = await Player.update(updatedData, {
    where: { id: playerId },
    returning: true,
  });

  return updatedPlayer;
};

export { getPlayerById, updatePlayerById };
