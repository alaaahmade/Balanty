/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
const serverError = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const errorWithStatus = err as { status: number; message: string };
  if (typeof err === 'object' && err !== null && 'status' in err) {
    return res.status(errorWithStatus.status).json({
      error: true,
      data: {
        status: errorWithStatus.status,
        message: errorWithStatus.message,
      },
    });
  }

  res
    .status(500)
    .json({ error: true, data: { message: errorWithStatus.message } });
};
export default serverError;
