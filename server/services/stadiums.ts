import { Request } from 'express';
import { Match, Stadium } from '../models';
import { Op } from 'sequelize';

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
