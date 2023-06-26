import { Request } from 'express';
import { Match, Stadium } from '../models';

export interface CustomRequest extends Request {
  userData?: { owner_id?: number } | undefined;
}

export interface IServiceResponse {
  status: number;
  data: string | object;
}

export interface matchesInterface {
  status: number;
  data: (Match & { Stadium?: Stadium })[] | string;
}
