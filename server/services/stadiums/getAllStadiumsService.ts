import { Request } from 'express';
import { Gallery, Stadium, User } from '../../models';

const getAllStadiumsService = async (
  req: Request,
): Promise<object | undefined> => {
  try {
    const res = await User.findAll({
      where: { role: 'STADIUM' },
      attributes: ['username', 'id'],
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getAllStadiumsService;
