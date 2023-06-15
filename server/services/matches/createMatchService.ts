import CustomRequest from '../../interfaces';
import { Match } from '../../models';

const createMatchService = async (req: CustomRequest): Promise<void> => {
  const { body, userData } = req;
  const owner_id = userData?.owner_id;
  await Match.create({ ...body, owner_id });
};

export default createMatchService;
