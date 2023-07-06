import { IServiceResponse } from '../interfaces';
import { matchesInterface } from '../interfaces/matchInterfaces';
import { Request } from 'express';
export declare const createMatchService: (req: Request) => Promise<IServiceResponse>;
export declare const getAllMatches: () => Promise<matchesInterface>;
