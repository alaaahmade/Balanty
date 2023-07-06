import { Request, Response } from 'express';
declare const signup: (req: Request, res: Response) => Promise<void>;
declare const login: (req: Request, res: Response) => Promise<void>;
declare const logout: (req: Request, res: Response) => void;
export { signup, login, logout };
