import CustomRequest from '../interfaces';
import { Match } from '../models';
import matchSchema from '../validations';

const createMatchService = async (req: CustomRequest): Promise<unknown> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
  const { startDate } = body;
  const Exist = await Match.findOne({ where: { owner_id, startDate } });
  if (!Exist) {
    const data = await matchSchema.validateAsync(body);
    const DBData = await Match.create({ ...data, owner_id });
    return DBData;
  }
  return '! هذا الوقت محجوز';
};

export default createMatchService;
