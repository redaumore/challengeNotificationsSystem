import { time } from 'console';

type NotificationState = 'NOT-SENT' | 'SENT';

interface iNotification {
  type: string;
  content: string;
  state: NotificationState;
  timestamp: number;
  send(timestamp: number): void;
}

class Notification {
  private state: NotificationState;
  private timestamp: number;

  constructor(private type: string, private content: string) {
    this.type = type;
    this.content = content;
    this.state = 'NOT-SENT';
    this.timestamp = 0;
  }

  send(timestamp: number): void {
    this.timestamp = timestamp;
    this.state = 'SENT';
  }
}

export { Notification, NotificationState, iNotification };
