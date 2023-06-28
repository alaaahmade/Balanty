import { Player } from '../models';
import { Request } from 'express';

import updatedPLayerSchema from '../validations/playerSchema';

const getPlayerService = async (userId: number) => {
  const player = await Player.findByPk(userId);
  return player;
};

const updatePlayerService = async (req: Request) => {
  // const { UserId } = req.UserData;

  const playerId = 5;
  const { body } = req;
  const isPLayerExist = await Player.findOne({ where: { UserId: playerId } });

  if (!isPLayerExist) {
    return {
      status: 401,
      data: 'هذا اللاعب غير متاح',
    };
  }
  await updatedPLayerSchema.validateAsync(body);

  const updatedPlayer = await Player.update(
    { ...body },
    {
      where: { UserId: playerId },
    },
  );

  return {
    status: 200,
    data: {
      message: 'تم الحفظ بنجاح',
      user: updatedPlayer,
    },
  };
};

export { getPlayerService, updatePlayerService };
