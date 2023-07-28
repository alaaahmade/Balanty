import { Request, Response, NextFunction, RequestHandler } from 'express';
declare const errorWrapper: (controller: RequestHandler) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default errorWrapper;
