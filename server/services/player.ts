import { Request } from 'express';
import { Op } from 'sequelize';
import { Match, Player, User } from '../models';
import updatedPLayerSchema from '../validations/playerSchema';
import { CustomUser } from '../interfaces/player';

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
  const playerId = req.user?.id;
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

const playerAvatarService = async (
  id: number,
): Promise<{ status: number; data: string }> => {
  const player = await User.findOne({
    where: { id },
    attributes: ['id'],
    include: [
      {
        model: Player,
        attributes: ['avatar'],
      },
    ],
  });
  if (!player) {
    return {
      status: 404,
      data: 'هذا اللاعب غير موجود',
    };
  }
  return { status: 200, data: (player as CustomUser).Player.avatar };
};

const getPlayersService = async (
  req: Request,
): Promise<{ status: number; data: object }> => {
  const { search } = req.query;
  const { page } = req.params;

  const pageSize = 8;
  const offset = (Number(page) - 1) * pageSize;

  const { count, rows: players } = await User.findAndCountAll({
    where: {
      username: {
        [Op.iLike]: `%${search ?? ''}%`,
      },
      role: 'PLAYER',
    },
    include: [{ model: Player, attributes: ['avatar', 'UserId'] }],
    limit: pageSize,
    offset: offset,
  });

  const totalPages = Math.ceil(count / pageSize);
  const paginatedItems = players;

  return {
    status: 200,
    data: {
      items: paginatedItems,
      totalItems: count,
      totalPages: totalPages,
      currentPage: Number(page),
    },
  };
};

const updateCoverService = async (req: Request) => {
  const { newCover } = req.body;
  const { playerId } = req.params;
  const UserId = req.user?.id;

  const isPLayerExist = await Player.findOne({
    where: { UserId, id: playerId },
  });
  if (!isPLayerExist) {
    return {
      status: 401,
      data: 'هذا اللاعب غير متاح',
    };
  }

  const updateCover = await Player.update(
    { cover: newCover },
    { where: { id: playerId } },
  );

  return {
    status: 200,
    data: +updateCover === 1 ? 'successful' : 'fail',
  };
};

const updateAvatarService = async (req: Request) => {
  const { newAvatar } = req.body;
  const { playerId } = req.params;
  const UserId = req.user?.id;

  const isPLayerExist = await Player.findOne({
    where: { UserId, id: playerId },
  });
  if (!isPLayerExist) {
    return {
      status: 401,
      data: 'هذا اللاعب غير متاح',
    };
  }

  const updateCover = await Player.update(
    { avatar: newAvatar },
    { where: { id: playerId } },
  );

  return {
    status: 200,
    data: +updateCover === 1 ? 'successful' : 'fail',
  };
};

export {
  getPlayerService,
  updatePlayerService,
  playerMatchesService,
  playerAvatarService,
  getPlayersService,
  updateCoverService,
  updateAvatarService,
};
