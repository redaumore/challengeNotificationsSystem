import { Request, Response } from 'express';

function send(req: Request, res: Response): void {
  res.status(200).send({ message: 'Message delivered' });
}

export { send };
