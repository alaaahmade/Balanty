import { NextFunction, Request, Response } from 'express';
import { addMessageService } from '../services';

const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  const { message, senderId, matchId, username } = req.body;

  const newMessage = await addMessageService({
    message,
    senderId,
    matchId,
    username,
  });

  res.status(201).json({
    status: 201,
    data: {
      message: 'تم ارسال الرسالة بنجاح',
      newMessage,
    },
  });
};

export default addMessage;
