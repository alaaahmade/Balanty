import { Op } from 'sequelize';
import { IServiceResponse } from '../interfaces';
import { Gallery, Match, Stadium, User } from '../models';
import { matchSchema } from '../validations';
import { matchesInterface } from '../interfaces/matchInterfaces';
import { Request } from 'express';
import MatchPlayer from '../models/MatchPlayer';

export const createMatchService = async (
  req: Request,
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

export const getAllMatches = async (
  req: Request,
): Promise<matchesInterface> => {
  const { search } = req.query;
  const currentDate = Date.now();
  const currentDateObject = new Date(currentDate);
  const currentDateFormatted = currentDateObject.toISOString();
  const userId = req.user?.id;
  const matches = await Match.findAll({
    where: {
      [Op.or]: [{ startDate: { [Op.gt]: currentDateFormatted } }],
    },
    include: [
      { model: User, as: 'ownerUser', attributes: ['id', 'username', 'role'] },
      {
        model: User,
        as: 'stadiumMatch',
        attributes: ['id', 'username', 'role'],
        include: [
          {
            model: Stadium,
            include: [{ model: Gallery, as: 'stadiumGallery' }],
          },
        ],
      },
      {
        model: User,
        as: 'Players',
        attributes: ['id', 'username', 'role'],
      },
    ],
  });

  const playerMatches = await MatchPlayer.findAll({
    where: { userId },
    attributes: ['matchId'],
  });

  if (matches.length > 0) {
    if (search) {
      const newMAtches = matches.filter(match =>
        match.dataValues.title.includes(search),
      );
      return {
        status: 200,
        data: newMAtches,
        playerMatches,
      };
    } else {
      return {
        status: 200,
        data: matches,
        playerMatches,
      };
    }
  } else {
    return {
      status: 404,
      data: 'لا يوجد مباريات',
    };
  }
};

export const getMyMatchesService = async (
  req: Request,
): Promise<matchesInterface> => {
  const userId = req.user?.id;

  const matchesIds = await MatchPlayer.findAll({
    where: {
      userId,
    },
    attributes: ['matchId'],
  });
  const PlayerMatchesId = matchesIds.map(matchPlayer => matchPlayer.matchId);

  const matches = await Match.findAll({
    where: {
      id: {
        [Op.in]: PlayerMatchesId,
      },
    },
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

export const getMatchDataService = async (
  req: Request,
): Promise<matchesInterface> => {
  const currentDate = Date.now();
  const currentDateObject = new Date(currentDate);
  const currentDateFormatted = currentDateObject.toISOString();
  const { matchId } = req.params;
  const match = await Match.findOne({
    where: {
      [Op.or]: [{ startDate: { [Op.gt]: currentDateFormatted } }],
      id: matchId,
    },
    include: [
      { model: User, as: 'ownerUser', attributes: ['id', 'username', 'role'] },
      {
        model: User,
        as: 'stadiumMatch',
        attributes: ['id', 'username', 'role'],
        include: [
          {
            model: Stadium,
            include: [{ model: Gallery, as: 'stadiumGallery' }],
          },
        ],
      },
      {
        model: User,
        as: 'Players',
        attributes: ['id', 'username', 'role'],
      },
    ],
  });

  if (!match) {
    return {
      status: 404,
      data: 'لا يوجد مباريات',
    };
  }
  return {
    status: 200,
    data: match,
  };
};

export const JoinToMatchService = async (
  req: Request,
): Promise<{ status: number; data: MatchPlayer | null | string }> => {
  const playerId = req.user?.id;
  const { matchId } = req.params;
  const checkExist = await User.findOne({
    where: { id: playerId },
  });

  if (!checkExist) {
    return {
      status: 404,
      data: 'هذا اللاعب غير موجود',
    };
  }

  const user = await User.findByPk(playerId);
  const match = await Match.findByPk(matchId);

  const data = await MatchPlayer.findOne({
    where: { userId: playerId, matchId },
  });

  if (data) {
    return {
      status: 401,
      data: 'لا يمكنك الانضمام مرتين في نفس الدوري',
    };
  }
  const matchP = await MatchPlayer.create({
    userId: user?.id,
    matchId: match?.id,
  });

  return {
    status: 200,
    data: matchP,
  };
};
