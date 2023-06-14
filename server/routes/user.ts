import express from 'express';

export const authRouter = express.Router();

authRouter.post("/signup", signup);

