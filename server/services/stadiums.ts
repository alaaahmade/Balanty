import { Request } from 'express';
import { Gallery, Stadium, User, Match } from '../models';
import { Op } from 'sequelize';

export const getAllStadiumsService = async (): Promise<{
  status: number;
  data: object;
}> => {
  const res = await User.findAll({
    where: { role: 'STADIUM' },
    attributes: ['username', 'id'],
  });
  return {
    status: 200,
    data: res,
  };
};

export const getStadiumDetailsService = async (
  req: Request,
): Promise<{ status: number; data: string | object }> => {
  const userId = req.params.id;
  const ExisteStadium = await Stadium.findOne({ where: { UserId: +userId } });
  if (!ExisteStadium) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }

  const res = await Gallery.findAll({
    include: [
      {
        model: Stadium,
        where: { UserId: +userId },
      },
    ],
  });
  return {
    status: 200,
    data: res,
  };
};

export const getStadiumMatchesService = async (
  req: Request,
): Promise<{ status: number; data: string | Match[] }> => {
  const { stadiumId } = req.params;

  const ExistStadium = await Stadium.findOne({ where: { UserId: +stadiumId } });
  if (!ExistStadium) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }
  const currentDate = new Date();
  const matches = await Match.findAll({
    where: {
      UserId: stadiumId,
      startDate: {
        [Op.gt]: currentDate,
      },
    },
  });

  return {
    status: 200,
    data: matches,
  };
};

export const getStadiumProfileService = async (
  req: Request,
): Promise<{ status: number; data: User | string | null }> => {
  const { id } = req.params;

  const ExistStadium = await Stadium.findOne({ where: { UserId: id } });
  if (!ExistStadium) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }

  const currentDate = new Date();
  const stadium = await User.findOne({
    where: { id },
    attributes: ['username', 'phone', 'id'],
    include: [
      {
        model: Stadium,
        where: { UserId: id },
        include: [
          {
            model: Gallery,
            as: 'stadiumGallery',
          },
        ],
      },
      {
        model: Match,
        as: 'stadiumMatches',
        where: {
          startDate: {
            [Op.gt]: currentDate,
          },
        },
      },
    ],
  });

  return {
    status: 200,
    data: stadium,
  };
};
