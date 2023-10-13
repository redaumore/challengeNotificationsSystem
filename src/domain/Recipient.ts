import { iNotification } from './Notification';

export interface iRecipient {
  sendNotification(notification: iNotification): void;
}

export class Recipient {
  private notifications: Array<iNotification> = [];

  constructor(private name: string) {}

  getRatioNotifications(): string {
    return 'hola';
  }
}
