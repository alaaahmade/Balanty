import { Request } from 'express';
import { Gallery, Stadium, User } from '../models';

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
