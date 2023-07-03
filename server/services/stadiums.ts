import { Request } from 'express';
import { Gallery, Stadium, User, Match, Review } from '../models';
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
  const isStadiumExist = await Stadium.findOne({ where: { UserId: +userId } });
  if (!isStadiumExist) {
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

  const isStadiumExist = await Stadium.findOne({
    where: { UserId: +stadiumId },
  });
  if (!isStadiumExist) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }
  const currentDate = new Date();
  const matches = await Match.findAll({
    where: {
      stadiumId: stadiumId,
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
): Promise<{ status: number; data: User | null | string }> => {
  const { id } = req.params;

  const isStadiumExist = await Stadium.findOne({ where: { UserId: id } });
  if (!isStadiumExist) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }
  const stadium = await User.findOne({
    where: { id },
    attributes: ['username', 'phone', 'id'],
    include: [
      {
        model: Stadium,
        include: [
          {
            model: Gallery,
            as: 'stadiumGallery',
          },
        ],
      },
      {
        model: Review,
        as: 'StadiumsReviews',
      },
    ],
  });

  return {
    status: 200,
    data: stadium,
  };
};

export const getStadiumsService = async (): Promise<{
  status: number;
  data: object;
}> => {
  const response = await User.findAll({
    where: { role: 'STADIUM' },
    attributes: ['id', 'username'],
    include: [
      {
        model: Stadium,
        include: [
          {
            model: Gallery,
            as: 'stadiumGallery',
            limit: 1,
          },
        ],
      },
      { model: Review, as: 'StadiumsReviews', attributes: ['value'] },
    ],
  });

  return {
    status: 200,
    data: response,
  };
};
