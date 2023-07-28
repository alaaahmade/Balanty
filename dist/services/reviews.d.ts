import { Request } from 'express';
export declare const getReviewService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
export declare const addReviewService: (req: Request) => Promise<{
    status: number;
    data: string | object;
}>;
export declare const getPlayerReviewService: (req: Request) => Promise<{
    status: number;
    data: object | string | null;
}>;
