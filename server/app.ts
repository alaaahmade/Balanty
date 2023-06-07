import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import {} from 'dotenv/config';

import { router } from './routes/router';

const PORT = process.env;

const app : Express = express();


app.set('PORT', 3030 || PORT );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1', router)

export default app

