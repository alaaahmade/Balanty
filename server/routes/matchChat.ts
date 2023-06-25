import { Router } from 'express';
import {
  addMessage,
  deleteMessage,
  editMessage,
  getAllMessages,
  getMessageById,
} from '../controllers';

const chatRouter: Router = Router();

chatRouter.get('/', getAllMessages);

export default chatRouter;
