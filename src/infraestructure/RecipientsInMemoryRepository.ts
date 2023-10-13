import { Notification } from '../domain/Notification';
import { Recipient } from '../domain/Recipient';
import { iRecipientsRepository } from '../useCases/RecipientsRepository';
import { injectable } from 'inversify';

@injectable()
export class RecipientsRepository implements iRecipientsRepository {
  getSentNotifications(
    recipient: string,
    type: string
  ): Promise<Notification[]> {
    //TODO: find notifications for recipient

    const notifications: Notification[] = [];

    notifications.push(
      new Notification('STATUS', `Notif1 status for ${recipient}`)
    );
    notifications.push(
      new Notification('STATUS', `Notif2 status for ${recipient}`)
    );
    notifications.push(
      new Notification('MARKETING', `Notif3 marketing for ${recipient}`)
    );
    return Promise.resolve(notifications);
  }
}
