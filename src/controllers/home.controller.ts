import { Request, Response } from 'express';

export function home(req: Request, res: Response): Response {
  return res.json({ message: 'Welcome to Challenge Notification System.' });
}
