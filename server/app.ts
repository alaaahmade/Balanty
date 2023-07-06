import express, { Express, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { router } from './routes/router';
import serverError from './middleware/errorMiddleware';
import { join } from 'path';
import { errorWrapper } from './utils';

const app: Express = express();

app.use([
  json(),
  urlencoded({ extended: false }),
  compression(),
  cookieParser(),
  cors({
    origin: 'http://localhost:5173',
  }),
]);

app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'dist')));

app.get(
  '*',
  errorWrapper((req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'dist', 'index.html'));
  }),
);

app.use(serverError);

export default app;
