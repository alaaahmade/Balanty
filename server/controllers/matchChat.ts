import { Request, Response } from 'express';
import {
  addMessageService,
  deleteMessageService,
  getAllMessagesService,
  getMessageByIdService,
  editMessageService,
} from '../services';

const addMessage = async (req: Request, res: Response) => {
  const { message, senderId, matchId } = req.body;

  const data = await addMessageService({
    message,
    senderId,
    matchId,
  });

  res.status(data?.status).json(data);
};

const getMessageById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await getMessageByIdService(+id);

  res.status(data?.status).json(data);
};

const getAllMessages = async (req: Request, res: Response) => {
  const data = await getAllMessagesService();

  res.status(data?.status).json(data);
};

const deleteMessage = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data = await deleteMessageService(+id);

  res.status(data?.status).json(data);
};

const editMessage = async (req: Request, res: Response) => {
  const { id, newMessage } = req.body;

  const data = await editMessageService(id, newMessage);

  res.status(data?.status).json(data);
};

export {
  addMessage,
  getMessageById,
  getAllMessages,
  deleteMessage,
  editMessage,
};
