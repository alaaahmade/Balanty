import { Request, RequestHandler, Response } from 'express';
import { getReviewService } from '../services';

export const getReview: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getReviewService(req);
  res.json(response);
};

// export const addReview = () => {};
