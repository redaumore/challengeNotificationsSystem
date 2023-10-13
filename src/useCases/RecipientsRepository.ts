import { Recipient } from '../domain/Recipient';
import { Notification } from '../domain/Notification';

export interface iRecipientsRepository {
  getSentNotifications(
    recipient: string,
    type: string
  ): Promise<Array<Notification>>;
}
