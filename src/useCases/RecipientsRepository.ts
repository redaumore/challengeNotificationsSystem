import { Recipient } from '../domain/Recipient';
import { Notification } from '../domain/Notification';

export interface RecipientRepository {
  getSentNotifications(type: string): Promise<Array<Notification>>;
}
