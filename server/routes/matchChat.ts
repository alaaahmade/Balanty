import { Router } from 'express';
import {
  addMessage,
  deleteMessage,
  editMessage,
  getAllMatchMessages,
  getMessageById,
} from '../controllers';
import { errorWrapper } from '../utils';

const chatRouter: Router = Router();

chatRouter.get('/match/:id', errorWrapper(getAllMatchMessages));
chatRouter.get('/:id', errorWrapper(getMessageById));
chatRouter.post('/', errorWrapper(addMessage));
chatRouter.delete('/:id', deleteMessage);
chatRouter.put('/', errorWrapper(editMessage));

export default chatRouter;
