import { Request } from 'express';
import { Gallery, Stadium } from '../../models';

const getStadiumDetailsService = async (
  req: Request,
): Promise<object | undefined> => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export default getStadiumDetailsService;
