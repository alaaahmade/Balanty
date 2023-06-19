import CustomRequest from '../interfaces';
import { Match } from '../models';
import { CustomError } from '../utils';
import matchSchema from '../validations';

const createMatchService = async (req: CustomRequest): Promise<unknown> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
  const { StadiumId, startDate } = body;

  // console.log({ StadiumId, startDate });
  if (!StadiumId) {
    throw new CustomError(422, 'ValidationError Said Alaa');
  }
  const Exist = await Match.findOne({
    where: { startDate, user_id: StadiumId },
  });
  if (!Exist) {
    const data = await matchSchema.validateAsync(body);
    const DBData = await Match.create({ ...data, owner_id });
    return DBData;
  }
  // console.log(Exist);

  return '! هذا الوقت محجوز';
};

export default createMatchService;
