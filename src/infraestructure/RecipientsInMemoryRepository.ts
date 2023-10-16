import { Notification } from '../domain/Notification';
import { Recipient } from '../domain/Recipient';
import { iRecipientsRepository } from '../useCases/RecipientsRepository';
import { injectable } from 'inversify';
import axios from 'axios';

@injectable()
export class RecipientsRepository implements iRecipientsRepository {
  async getSentNotifications(
    recipient: string,
    type: string
  ): Promise<Notification[]> {
    //TODO: find notifications for recipient

    const notifications: Notification[] = await axios.get(
      `http://localhost:3000/recipients/${recipient}`,
      {
        headers: {
          'Accept-Encoding': 'application/json',
        },
      }
    );

    return Promise.resolve(notifications);
  }
}
