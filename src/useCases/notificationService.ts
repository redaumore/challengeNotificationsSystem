import { inject, injectable } from 'inversify';
import TYPES from '../container.types';
import { Notification } from '../domain/Notification';
import { iRecipientsRepository } from './RecipientsRepository';

@injectable()
export class NotificationService {
  constructor(
    @inject(TYPES.RecipientsRepository)
    private recipientsRepository: iRecipientsRepository
  ) {}

  getNotifications(recipient: string, type: string): Promise<Notification[]> {
    return this.recipientsRepository.getSentNotifications(recipient, type);
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
