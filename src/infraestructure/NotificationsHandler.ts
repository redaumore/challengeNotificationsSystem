import { Request, Response, NextFunction } from 'express';
import TYPES from '../container.types';
import container from '../container.config';
import {
  controller,
  httpGet,
  BaseHttpController,
  httpPost,
} from 'inversify-express-utils';
import { Notification } from '../domain/Notification';
import { NotificationService } from '../useCases/NotificationService';
import { RecipientsRepository } from './RecipientsInMemoryRepository';

@controller('/notifications')
class NotificationsHandler extends BaseHttpController {
  @httpGet('/')
  public async get(req: Request, res: Response): Promise<void> {
    const notificationService: NotificationService = new NotificationService(
      new RecipientsRepository()
    );
    const notifications = await notificationService.getNotifications(
      req.body.recipient,
      req.body.type
    );
    res.status(notifications.length ? 200 : 404).send(notifications);
  }

  @httpPost('/')
  public async post(req: Request, res: Response): Promise<void> {
    const notificationService: NotificationService = new NotificationService(
      new RecipientsRepository()
    );

    const result = await notificationService.postNotification(req.body);
  }
}

export default NotificationsHandler;
