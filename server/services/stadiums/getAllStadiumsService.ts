import { Request } from 'express';
import { Gallery, Stadium } from '../../models';

const getAllStadiumsService = async (
  req: Request,
): Promise<object | undefined> => {
  try {
    const res = await Gallery.findAll({
      include: [
        {
          model: Stadium,
        },
      ],
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getAllStadiumsService;
