import { Op } from 'sequelize';
import { CustomRequest, IServiceResponse } from '../interfaces';
import { Match, Stadium, User } from '../models';
import { matchSchema } from '../validations';
import { matchesInterface } from '../interfaces/matchInterfaces';

export const createMatchService = async (
  req: CustomRequest,
): Promise<IServiceResponse> => {
  const { body, user } = req;
  const ownerId = user?.id;
  const { StadiumId, startDate, endDate } = body;
  const newStartTime = startDate;
  const newEndTime = endDate;
  const currentDate = new Date();
  const newDate = new Date(newStartTime);

  if (newDate < currentDate) {
    return {
      status: 401,
      data: 'هذا الوقت غير متاح',
    };
  }
  const data = await matchSchema.validateAsync(body);
  const isStadiumExist = await Stadium.findOne({
    where: { UserId: StadiumId },
  });

  if (!isStadiumExist) {
    return {
      status: 401,
      data: 'هذا الملعب غير متاح',
    };
  }
  const Exist = await Match.findOne({
    where: {
      [Op.or]: [
        { startDate: { [Op.gte]: newStartTime, [Op.lt]: newEndTime } },
        { endDate: { [Op.gt]: newStartTime, [Op.lte]: newEndTime } },
        {
          [Op.and]: [
            { startDate: { [Op.lte]: newStartTime } },
            { endDate: { [Op.gte]: newEndTime } },
          ],
        },
      ],
      stadiumId: StadiumId,
    },
  });

  if (!Exist) {
    const DBData = await Match.create({
      ...data,
      ownerId,
      stadiumId: StadiumId,
    });
    return {
      status: 201,
      data: DBData,
    };
  }
  return {
    status: 401,
    data: '! هذا الوقت محجوز',
  };
};
export const getAllMatches = async (): Promise<matchesInterface> => {
  const currentDate = Date.now();
  const currentDateObject = new Date(currentDate);
  const currentDateFormatted = currentDateObject.toISOString();

  const matches = await Match.findAll({
    where: {
      [Op.or]: [{ startDate: { [Op.gt]: currentDateFormatted } }],
    },
    include: [
      { model: User, as: 'ownerUser' },
      { model: User, as: 'stadiumMatch' },
    ],
  });

  if (matches.length > 0) {
    return {
      status: 200,
      data: matches,
    };
  } else {
    return {
      status: 404,
      data: 'لا يوجد مباريات',
    };
  }
};
