import { Op } from 'sequelize';
import { CustomRequest, IServiceResponse } from '../interfaces';
import { Match, Stadium } from '../models';
import matchSchema from '../validations';

const createMatchService = async (
  req: CustomRequest,
): Promise<IServiceResponse> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
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
  const ExisteStadium = await Stadium.findOne({ where: { UserId: StadiumId } });
  console.log(data);

  if (!ExisteStadium) {
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
      owner_id,
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

export default createMatchService;
