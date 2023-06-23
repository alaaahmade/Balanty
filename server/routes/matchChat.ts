import express, { Router } from 'express';
import { addMessage } from '../controllers';

const chatRouter: Router = express.Router();

chatRouter.post('/add', addMessage);

export default chatRouter;
