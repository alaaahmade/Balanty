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

export {
  addMessageService,
  getMessageByIdService,
  // getAllMessagesService,
  // deleteMessageService,
  // editMessageService,
};
