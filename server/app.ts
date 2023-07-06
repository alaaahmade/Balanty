import express, { Express, json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import { router } from './routes/router';
import serverError from './middleware/errorMiddleware';

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
app.use(serverError);

export default app;
