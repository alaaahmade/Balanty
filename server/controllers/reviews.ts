import { Request, RequestHandler, Response } from 'express';
import {
  addReviewService,
  getPlayerReviewService,
  getReviewService,
} from '../services';

export const getReview: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getReviewService(req);
  res.status(response.status).json(response);
};

export const addReview: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await addReviewService(req);
  res.status(response.status).json(response);
};

export const getPlayerReview: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getPlayerReviewService(req);
  res.status(response.status).json(response);
};
