import { RequestHandler, Request, Response } from 'express';

import {
  UpdateStadiumDataService,
  getAllStadiumsService,
  getStadiumDetailsService,
  getStadiumMatchesService,
  getStadiumProfileService,
  getStadiumsService,
} from '../services';

import {
  AddStadiumImageService,
  UpdateStadiumGalleryService,
  deleteStadiumImageService,
  getBestStadiumsService,
} from '../services/stadiums';

export const getAllStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = (await getAllStadiumsService()) as {
    status: number;
    data: object;
  };
  res.status(response?.status).json(response);
};

export const getStadiumDetails: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getStadiumDetailsService(req);
  res.status(response?.status).json(response);
};

export const getStadiumMatches: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const matches = await getStadiumMatchesService(req);
  res.status(matches.status).json(matches);
};

export const getStadiumProfile: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const matches = await getStadiumProfileService(req);
  res.status(matches.status).json(matches);
};

export const getStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getStadiumsService();
  res.status(response.status).json(response);
};

export const UpdateStadiumData: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await UpdateStadiumDataService(req);

  res.status(response.status).json(response);
};

export const UpdateStadiumGallery: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await UpdateStadiumGalleryService(req);

  res.status(response.status).json(response);
};

export const AddStadiumImage: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await AddStadiumImageService(req);

  res.status(response.status).json(response);
};

export const deleteStadiumImage: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await deleteStadiumImageService(req);

  res.status(response.status).json(response);
};

export const getBestStadiums: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const response = await getBestStadiumsService();
  res.status(response.status).json(response);
};
