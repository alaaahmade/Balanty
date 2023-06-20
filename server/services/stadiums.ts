import { Request } from 'express';
import { Gallery, Stadium, User } from '../models';

export const getAllStadiumsService = async (
  req: Request,
): Promise<object | undefined> => {
  const res = await User.findAll({
    where: { role: 'STADIUM' },
    attributes: ['username', 'id'],
  });
  return res;
};

export const getStadiumDetailsService = async (
  req: Request,
): Promise<object | undefined> => {
  const userId = req.params.id;
  const res = await Gallery.findAll({
    include: [
      {
        model: Stadium,
        where: { user_id: +userId },
      },
    ],
  });
  return res;
};
