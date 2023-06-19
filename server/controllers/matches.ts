import { NextFunction, Request, Response } from 'express';
import Match from '../models/Match';

const getMatchesController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const matches = await Match.findAll();
  console.log(matches);
};

export default getMatchesController;
