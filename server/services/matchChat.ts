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

  return {
    status: 201,
    data: {
      message: 'Message added successfully',
      newMessage,
    },
  };
};

const getMessageByIdService = async (messageId: number) => {
  const message = await Message.findOne({ where: { id: messageId } });

  if (message) {
    return {
      status: 200,
      data: {
        message,
      },
    };
  } else {
    return {
      status: 404,
      data: {
        message: 'No message found',
      },
    };
  }
};

const getAllMessagesService = async () => {
  const messages = await Message.findAll();

  if (messages) {
    return {
      status: 200,
      data: {
        messages,
      },
    };
  } else {
    return {
      status: 404,
      data: {
        message: 'No messages found',
      },
    };
  }
};

const deleteMessageService = async (id: number) => {
  const message = await Message.findOne({ where: { id } });
  if (message) {
    await Message.destroy({ where: { id } });
    return {
      status: 200,
      data: {
        message: 'Message deleted successfully',
      },
    };
  } else {
    return {
      status: 404,
      data: {
        message: 'No message found',
      },
    };
  }
};

const editMessageService = async (id: number, newMessage: string) => {
  const [updatedRows, [updatedMessage]] = await Message.update(
    { message: newMessage },
    { where: { id }, returning: true },
  );

  if (updatedRows) {
    return {
      status: 200,
      data: {
        message: 'Message updated successfully',
        updatedMessage,
      },
    };
  } else {
    return {
      status: 404,
      data: {
        message: 'Message not found',
      },
    };
  }
};

export {
  addMessageService,
  getMessageByIdService,
  getAllMessagesService,
  deleteMessageService,
  editMessageService,
};
