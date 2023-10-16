import { time } from 'console';

type NotificationState = 'NOT-SENT' | 'SENT';

interface iNotification {
  type: string;
  content: string;
  state?: NotificationState;
  timestamp?: number;
}

class Notification {
  private type: string;
  private content: string;
  private state: NotificationState;
  private timestamp: number;

  constructor(notification: iNotification) {
    this.type = notification.type;
    this.content = notification.content;
    this.state = 'NOT-SENT';
    this.timestamp = 0;
  }

  send(timestamp: number): void {
    this.timestamp = timestamp;
    this.state = 'SENT';
  }
}

export { Notification, NotificationState, iNotification };
