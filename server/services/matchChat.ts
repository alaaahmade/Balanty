import { IMatchMessage } from '../interfaces';
import { Message } from '../models';

const addMessageService = async ({
  message,
  senderId,
  matchId,
  username,
}: IMatchMessage) => {
  const newMessage = await Message.create({
    UserId: senderId,
    MatchId: matchId,
    message,
    username,
  });

  return newMessage;
};

export default addMessageService;
