import { Request } from 'express';
import { User, Match } from '../models';
export declare const getAllStadiumsService: () => Promise<{
    status: number;
    data: object;
}>;
export declare const getStadiumDetailsService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
export declare const getStadiumMatchesService: (req: Request) => Promise<{
    status: number;
    data: string | Match[];
}>;
export declare const getStadiumProfileService: (req: Request) => Promise<{
    status: number;
    data: User | null | string;
}>;
export declare const getStadiumsService: (req: Request) => Promise<{
    status: number;
    data: object;
}>;
export declare const UpdateStadiumDataService: (req: Request) => Promise<{
    status: number;
    data: string | {
        message: string;
        stadiumResult: number;
        UserResult: number;
    };
}>;
export declare const UpdateStadiumGalleryService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
export declare const AddStadiumImageService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
export declare const deleteStadiumImageService: (req: Request) => Promise<{
    status: number;
    data: string | number;
}>;
export declare const getBestStadiumsService: () => Promise<{
    status: number;
    data: object;
}>;
export declare const searchStadiumsService: (req: Request) => Promise<{
    status: number;
    data: User[];
}>;
