import { Request, Response, NextFunction } from 'express';
import {
  controller,
  httpGet,
  BaseHttpController,
} from 'inversify-express-utils';

@controller('/notifications')
class NotificationsHandler extends BaseHttpController {
  @httpGet('/')
  public send(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({ message: 'Message delivered' });
  }
}

export default NotificationsHandler;
