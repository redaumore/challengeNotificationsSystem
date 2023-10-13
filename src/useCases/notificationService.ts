import { Notification } from '../domain/Notification';
import { RecipientRepository } from './RecipientsRepository';

class NotificationService {
  private repositories: Array<RecipientRepository>;

  constructor(private id: string) {
    this.repositories = [];
    this.init();
  }

  private init() {
    console.log('Recipient repositories start up');
  }

  sendNotification(
    content: string,
    recipient: string,
    notificationType: string
  ): boolean {
    // Get the current timestamp
    const currentTime = Date.now();
    const newNotification = new Notification(notificationType, content);

    return true;
  }
}
