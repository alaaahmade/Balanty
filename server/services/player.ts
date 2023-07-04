import { Request } from 'express';
import { Op } from 'sequelize';
import { Match, Player, User } from '../models';
import updatedPLayerSchema from '../validations/playerSchema';

const getPlayerService = async (
  id: number,
): Promise<{
  status: number;
  data: string | object;
}> => {
  const player = await User.findOne({
    where: { id },
    attributes: ['username', 'phone', 'id'],
    include: [
      {
        model: Player,
      },
    ],
  });
  if (!player) {
    return {
      status: 401,
      data: 'هذا اللاعب غير موجود',
    };
  }

  return {
    status: 200,
    data: player,
  };
};

const updatePlayerService = async (
  req: Request,
): Promise<{
  status: number;
  data: string | object;
}> => {
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

  const [updatedRows, [updatedPlayer]] = await Player.update(
    { ...body },
    {
      where: { UserId: playerId },
      returning: true,
    },
  );

  if (updatedRows === 0) {
    return {
      status: 400,
      data: 'Failed to update the player',
    };
  }

  return {
    status: 200,
    data: updatedPlayer,
  };
};

const playerMatchesService = async (
  id: number,
): Promise<{ status: number; data: string | User | null }> => {
  const isPLayerExist = Player.findOne({ where: { UserId: id } });

  if (!isPLayerExist) {
    return {
      status: 401,
      data: 'هذا اللاعب غير موجود',
    };
  }

  const playerMatches = await User.findOne({
    where: { id },
    attributes: ['username'],
    include: [
      {
        model: Match,
        as: 'ownersMatches',
      },
      {
        model: Match,
        as: 'Matches',
      },
    ],
  });

  return {
    status: 200,
    data: playerMatches,
  };
};

const getPlayersService = async (
  req: Request,
): Promise<{ status: number; data: object }> => {
  const searchQuery = req.body;
  // const { page, pageSize } = req.params;
  const page = '1';
  const pageSize = '10';
  //  page Replace with the desired page number
  //  pageSize Replace with the desired page size (number of items per page)
  const pageNumber = parseInt(page, 10) || 1; // Default to page 1 if no page number is provided
  const itemsPerPage = parseInt(pageSize, 10) || 10; // Default to 10 items per page if no page size is provided

  const players = await Player.findAndCountAll({
    where: {
      name: {
        [Op.iLike]: `%${searchQuery}`,
      },
    },
    limit: pageNumber,
    offset: (pageNumber - 1) * itemsPerPage,
  });
  console.log(players);
  return {
    status: 201,
    data: players,
  };
};

export {
  getPlayerService,
  updatePlayerService,
  playerMatchesService,
  getPlayersService,
};
