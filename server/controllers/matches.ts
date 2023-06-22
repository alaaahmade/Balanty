import { Request, Response } from 'express';
import { Match } from '../models';

const getMatches = (req: Request, res: Response): void => {
  Match.findAll()
    .then(Match => {
      res.status(200).json({
        status: 200,
        data: Match,
      });
    })
    .catch(error => {
      res.status(400).json({
        status: 400,
        message: 'Bad request',
      });
    });
};

export default getMatches;
