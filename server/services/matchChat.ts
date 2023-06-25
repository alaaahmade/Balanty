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

export {
  addMessageService,
  // getMessageByIdService,
  // getAllMessagesService,
  // deleteMessageService,
  // editMessageService,
};
