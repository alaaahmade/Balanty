import { Op } from 'sequelize';
import { CustomRequest, IServiceResponse } from '../interfaces';
import { Match } from '../models';

const getMatchService = async (
  req: CustomRequest,
): Promise<IServiceResponse> => {
  const { startDate, endDate } = req.query;
  const existingMatch = await Match.findOne({
    where: {
      [Op.or]: [
        { startDate: { [Op.between]: [startDate, endDate] } },
        { endDate: { [Op.between]: [startDate, endDate] } },
        {
          [Op.and]: [
            { startDate: { [Op.lte]: startDate } },
            { endDate: { [Op.gte]: endDate } },
          ],
        },
      ],
    },
  });

  if (!existingMatch) {
    return {
      status: 401,
      data: '! هذا الوقت محجوز',
    };
  }

  return {
    status: 200,
    data: existingMatch,
  };
};

export default getMatchService;
