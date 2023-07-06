import app from './app';
import { Server } from 'socket.io';
import { createServer } from 'http';
import { addMessageService } from './services';

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: '*',
  },
});

io.on('connection', socket => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on('message', async ({ message, senderId, matchId }) => {
    const newMessage = await addMessageService({
      message,
      senderId,
      matchId,
    });
    console.log(newMessage, 'newMessage');

    io.emit('messageResponse', newMessage);
  });
  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

export default server;
