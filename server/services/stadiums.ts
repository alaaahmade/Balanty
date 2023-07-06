import { Request } from 'express';
import { Gallery, Stadium, User, Match, Review } from '../models';
import { Op } from 'sequelize';
import updatedValueSchema from '../validations/stadiumProfileSchema';

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

export const getStadiumsService = async (
  req: Request,
): Promise<{
  status: number;
  data: object;
}> => {
  const { page } = req.params;

  const Stadiums = await User.findAll({
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

  const pageSize = 8;
  const startIndex = ((+page as number) - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedItems = Stadiums.slice(startIndex, endIndex);

  return {
    status: 200,
    data: paginatedItems,
  };
};
export const UpdateStadiumDataService = async (
  req: Request,
): Promise<{
  status: number;
  data: string | { message: string; stadiumResult: number; UserResult: number };
}> => {
  const StadiumId = req.user?.id;

  const { body } = req;

  const isStadiumExist = await Stadium.findOne({
    where: { UserId: StadiumId },
  });
  if (!isStadiumExist) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }
  await updatedValueSchema.validateAsync(body);

  const stadiumResult = await Stadium.update(body, {
    where: { UserId: StadiumId },
  });

  const UserResult = await User.update(body, { where: { id: StadiumId } });

  return {
    status: 200,
    data: {
      message: 'تم الحفظ بنجاح',
      stadiumResult: [stadiumResult as Array<number>][0][0],
      UserResult: [UserResult as Array<number>][0][0],
    },
  };
};

export const UpdateStadiumGalleryService = async (
  req: Request,
): Promise<{
  status: number;
  data: string | object;
}> => {
  const {
    body: { image, id, StadiumId, userId },
  } = req;

  const checkAuthId = req.user?.id;

  if (+userId !== +(checkAuthId as number)) {
    return {
      status: 401,
      data: 'UnAuthorize',
    };
  }

  const check = await Gallery.findAll({ where: { id, StadiumId } });
  if (!check.length) {
    return {
      status: 404,
      data: ' هذه الصورة غير موجودة',
    };
  }

  const galleries = await Gallery.update(
    { image },
    { where: { id, StadiumId }, returning: true },
  );

  return {
    status: 200,
    data: galleries[1][0].dataValues,
  };
};

export const AddStadiumImageService = async (
  req: Request,
): Promise<{
  status: number;
  data: string | object;
}> => {
  const { body } = req;
  const { StadiumId, userId } = body;

  const checkAuthId = req.user?.id;

  if (+userId !== +(checkAuthId as number)) {
    return {
      status: 401,
      data: 'UnAuthorize',
    };
  }

  const check = await Gallery.findAll({ where: { StadiumId } });
  if (check.length >= 4) {
    return {
      status: 401,
      data: 'لا يمكن اضافة اكثر من اربعة صور',
    };
  }

  const galleries = await Gallery.create({ ...body, StadiumId });

  return {
    status: 200,
    data: galleries,
  };
};

export const deleteStadiumImageService = async (
  req: Request,
): Promise<{ status: number; data: string | number }> => {
  const { ImageId, StadiumId, userId } = req.params;
  const checkAuthId = req.user?.id;

  if (+userId !== +(checkAuthId as number)) {
    return {
      status: 401,
      data: 'UnAuthorize',
    };
  }

  const check = await Gallery.findOne({
    where: { StadiumId: +StadiumId, id: +ImageId },
  });
  if (!check) {
    return {
      status: 404,
      data: 'هذه الصورة غير موجودة',
    };
  }

  const result = await Gallery.destroy({
    where: { StadiumId: +StadiumId, id: +ImageId },
  });

  return { status: 204, data: result };
};

export const getBestStadiumsService = async (): Promise<{
  status: number;
  data: object;
}> => {
  const Stadiums = await User.findAll({
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

  const stadiumWithAverage = Stadiums.map((stadium: User) => {
    const totalReviews = (stadium.StadiumsReviews as Review[]).length;
    const averageReview =
      (stadium.StadiumsReviews as Review[]).reduce(
        (sum: number, review: { value: string }) => sum + +review.value,
        0,
      ) / totalReviews;

    stadium.StadiumsReviews = averageReview || 0;

    return stadium;
  });

  const sortedStadiums = stadiumWithAverage.sort(
    (a, b) => (b.StadiumsReviews as number) - (a.StadiumsReviews as number),
  );

  const topThreeStadiums = sortedStadiums.slice(0, 3);

  return {
    status: 200,
    data: topThreeStadiums,
  };
};
export const searchStadiumsService = async (req: Request) => {
  const { search } = req.query;

  const Stadiums = await User.findAll({
    where: {
      role: 'STADIUM',
      username: {
        [Op.iLike]: `${search}%`,
      },
    },
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

  const stadiumWithAverage = Stadiums.map((stadium: User) => {
    const totalReviews = (stadium.StadiumsReviews as Review[]).length;
    const averageReview =
      (stadium.StadiumsReviews as Review[]).reduce(
        (sum: number, review: { value: string }) => sum + +review.value,
        0,
      ) / totalReviews;

    stadium.StadiumsReviews = averageReview || 0;

    return stadium;
  });

  const sortedStadiums = stadiumWithAverage.sort(
    (a, b) => (b.StadiumsReviews as number) - (a.StadiumsReviews as number),
  );

  const topThreeStadiums = sortedStadiums.slice(0, 3);

  return {
    status: 200,
    data: topThreeStadiums,
  };
};
