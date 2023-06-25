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

  const newMessage = await addMessageService({
    message,
    senderId,
    matchId,
  });

  res.status(201).json({
    status: 201,
    data: {
      message: 'Message added successfully',
      newMessage,
    },
  });
};

export {
  addMessage,
  // getMessageById,
  // getAllMessages,
  // deleteMessage,
  // editMessage,
};
