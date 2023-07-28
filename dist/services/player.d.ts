import { Request } from 'express';
import { User } from '../models';
declare const getPlayerService: (id: number) => Promise<{
    status: number;
    data: string | object;
}>;
declare const updatePlayerService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
declare const playerMatchesService: (id: number) => Promise<{
    status: number;
    data: string | User | null;
}>;
declare const playerAvatarService: (id: number) => Promise<{
    status: number;
    data: string;
}>;
declare const getPlayersService: (req: Request) => Promise<{
    status: number;
    data: object;
}>;
declare const updateCoverService: (req: Request) => Promise<{
    status: number;
    data: string;
}>;
declare const updateAvatarService: (req: Request) => Promise<{
    status: number;
    data: string;
}>;
export { getPlayerService, updatePlayerService, playerMatchesService, playerAvatarService, getPlayersService, updateCoverService, updateAvatarService, };
