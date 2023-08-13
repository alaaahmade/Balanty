import { Request } from 'express';
import { IMatchMessage, IResponseProps } from '../interfaces';
declare const addMessageService: ({ message, senderId, matchId, }: IMatchMessage) => Promise<IResponseProps>;
declare const getMessageByIdService: (messageId: number) => Promise<IResponseProps>;
declare const getAllMessagesService: (matchId: number, req: Request) => Promise<IResponseProps>;
declare const deleteMessageService: (id: string) => Promise<IResponseProps>;
declare const editMessageService: (id: number, newMessage: string) => Promise<IResponseProps>;
export { addMessageService, getMessageByIdService, getAllMessagesService, deleteMessageService, editMessageService, };
