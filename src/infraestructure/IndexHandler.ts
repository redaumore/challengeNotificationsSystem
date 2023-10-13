import { Request, Response, NextFunction } from 'express';
import {
  interfaces,
  controller,
  httpGet,
  BaseHttpController,
} from 'inversify-express-utils';
import { injectable, inject } from 'inversify';

@controller('/')
class IndexHandler extends BaseHttpController {
  @httpGet('/')
  public index(req: Request, res: Response, next: NextFunction) {
    res
      .status(200)
      .json({ message: 'Welcome to Challenge Notification Service' });
  }
}

export default IndexHandler;
