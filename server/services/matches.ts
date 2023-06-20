import { Op } from 'sequelize';
import CustomRequest from '../interfaces';
import { Match } from '../models';
import { CustomError } from '../utils';
import matchSchema from '../validations';

const createMatchService = async (req: CustomRequest): Promise<unknown> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
  const { StadiumId, startDate, endDate } = body;
  const newStartTime = startDate;
  const newEndTime = endDate;

  const data = await matchSchema.validateAsync(body);

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
      UserId: StadiumId,
    },
  });

  if (!Exist) {
    const DBData = await Match.create({
      ...data,
      owner_id,
      UserId: StadiumId,
    });
    return DBData;
  }

  return '! هذا الوقت محجوز';
};

export default createMatchService;
