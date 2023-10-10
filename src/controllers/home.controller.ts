import { Request, Response } from 'express';

function home(req: Request, res: Response): void {
  res
    .status(200)
    .send({ message: 'Welcome to Challenge Notification System.' });
}

export { home };
