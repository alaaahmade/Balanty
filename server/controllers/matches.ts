import { Request, Response } from 'express';
import getMatchService from '../services/matches';
const matchController = async (req: Request, res: Response): Promise<void> => {
  try {
    const serviceResponse = await getMatchService(req);

    res.status(serviceResponse.status).json(serviceResponse.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default matchController;
