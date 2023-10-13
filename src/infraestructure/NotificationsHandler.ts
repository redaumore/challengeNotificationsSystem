import { Request, Response, NextFunction } from 'express';
import TYPES from '../container.types';
import container from '../container.config';
import {
  controller,
  httpGet,
  BaseHttpController,
} from 'inversify-express-utils';
import { Notification } from '../domain/Notification';
import { NotificationService } from '../useCases/NotificationService';
import { RecipientsRepository } from './RecipientsInMemoryRepository';

@controller('/notifications')
class NotificationsHandler extends BaseHttpController {
  @httpGet('/')
  public async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const notificationServer: NotificationService = new NotificationService(
      new RecipientsRepository()
    );
    const notifications = await notificationServer.getNotifications(
      req.body.recipient,
      req.body.type
    );
    res.status(200).send(notifications);
  }
}

export default NotificationsHandler;
