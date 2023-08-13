import { Request, RequestHandler, Response } from 'express';
import {
  addMessageService,
  deleteMessageService,
  getAllMessagesService,
  getMessageByIdService,
  editMessageService,
} from '../services';

const addMessage: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { message, senderId, matchId } = req.body;

  const data = await addMessageService({
    message,
    senderId,
    matchId,
  });

  res.status(data?.status).json(data);
};

const getMessageById: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const data = await getMessageByIdService(+id);

  res.status(data?.status).json(data);
};

const getAllMatchMessages: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;
  const data = await getAllMessagesService(+id, req);

  res.status(data.status).json(data);
};

const deleteMessage: RequestHandler<{ id: string }> = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id } = req.params;

  const data = await deleteMessageService(id);

  res.status(data?.status).json(data);
};

const editMessage: RequestHandler = async (
  req: Request,
  res: Response,
): Promise<void> => {
  const { id, newMessage } = req.body;

  const data = await editMessageService(id, newMessage);

  res.status(data?.status).json(data);
};

export {
  addMessage,
  getMessageById,
  getAllMatchMessages,
  deleteMessage,
  editMessage,
};
