import { IMatchMessage } from '../interfaces';
import { Message } from '../models';
import { CustomError } from '../utils';

const addMessageService = async ({
  message,
  senderId,
  matchId,
}: IMatchMessage) => {
  const newMessage = await Message.create({
    UserId: senderId,
    MatchId: matchId,
    message,
  });

  return newMessage;
};

const getMessageByIdService = async (messageId: number) => {
  const message = await Message.findOne({ where: { id: messageId } });

  return message;
};

const getAllMessagesService = async () => {
  const messages = await Message.findAll();

  return messages;
};

const deleteMessageService = async (id: number) => {
  const message = await Message.findOne({ where: { id } });
  if (message) {
    await Message.destroy({ where: { id } });
    return message;
  }
  throw new CustomError(404, 'Message not found');
};

export {
  addMessageService,
  getMessageByIdService,
  getAllMessagesService,
  deleteMessageService,
  // editMessageService,
};
