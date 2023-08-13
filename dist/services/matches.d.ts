import { IServiceResponse } from '../interfaces';
import { matchesInterface } from '../interfaces/matchInterfaces';
import { Request } from 'express';
import MatchPlayer from '../models/MatchPlayer';
export declare const createMatchService: (req: Request) => Promise<IServiceResponse>;
export declare const getAllMatches: (req: Request) => Promise<matchesInterface>;
export declare const getMyMatchesService: (req: Request) => Promise<matchesInterface>;
export declare const JoinToMatchService: (req: Request) => Promise<{
    status: number;
    data: MatchPlayer | null | string;
}>;
