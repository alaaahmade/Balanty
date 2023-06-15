import CustomRequest from '../../interfaces';
import { Match } from '../../models';
import matchSchema from '../../validations';

const createMatchService = async (req: CustomRequest): Promise<unknown> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
  await matchSchema.validateAsync(body);
  const data = await Match.create({ ...body, owner_id });
  return data;
};

export default createMatchService;
