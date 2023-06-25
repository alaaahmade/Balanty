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
chatRouter.get('/:id', getMessageById);
chatRouter.post('/add', addMessage);

export default chatRouter;
