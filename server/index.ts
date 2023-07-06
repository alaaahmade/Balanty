import app from './app';
import { PORT } from './config';
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

const startServer = async (): Promise<void> => {
  try {
    console.log('Connection has been established successfully.');
    server.listen(PORT, (): void => {
      console.log(`server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
startServer();
