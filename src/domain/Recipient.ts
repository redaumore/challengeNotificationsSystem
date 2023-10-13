import { Notification } from './Notification';

export class Recipient {
  private notifications: Array<Notification> = [];

  constructor(private name: string) {}

  getRatioNotifications(): string {
    return 'hola';
  }
}
