import { Request } from 'express';

export interface CustomRequest extends Request {
  userData?: { owner_id?: number } | undefined;
}

export interface IServiceResponse {
  status: number;
  data: string | object;
}

export interface IMatchMessage {
  senderId: number;
  matchId: number;
  message: string;
}

export interface IResponseProps {
  status: number;
  data: {
    message?: string | object;
    newMessage?: object;
    messages?: object[];
    updatedMessage?: object;
    match?: object;
  };
}
