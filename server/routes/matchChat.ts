import { Router } from 'express';
import {
  addMessage,
  deleteMessage,
  editMessage,
  getAllMatchMessages,
  getMessageById,
} from '../controllers';

const chatRouter: Router = Router();

chatRouter.get('/match/:id', getAllMatchMessages);
chatRouter.get('/:id', getMessageById);
chatRouter.post('/', addMessage);
chatRouter.delete('/:id', deleteMessage);
chatRouter.put('/', editMessage);

export default chatRouter;
