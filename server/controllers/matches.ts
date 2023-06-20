import { Request, Response } from 'express';
import { Match } from '../models';

const getMatches = async (req: Request, res: Response): Promise<void> => {
  const matches = await Match.findAll();
  console.log(matches);

  res.send(matches);
};

export default getMatches;
