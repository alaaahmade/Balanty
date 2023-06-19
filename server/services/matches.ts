import { Request } from 'express';
import { Match } from '../models';

export const getStadiumMatchesService = async (
  req: Request,
): Promise<Match[]> => {
  const { stadiumId } = req.params;
  return await Match.findAll({ where: { UserId: stadiumId } });
};
