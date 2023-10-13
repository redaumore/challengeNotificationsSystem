import { time } from 'console';
type NotificationObject = {
  type: string;
  content: string;
  state: NotificationState;
  timestamp: number;
};

type NotificationState = 'NOT-SENT' | 'SENT';

class Notification {
  private type: string;
  private content: string;
  private state: NotificationState;
  private timestamp: number;

  constructor(type: string, content: string) {
    this.type = type;
    this.content = content;
    this.state = 'NOT-SENT';
    this.timestamp = 0;
  }

  send(timestamp: number) {
    this.timestamp = timestamp;
    this.state = 'SENT';
  }
}

export { Notification, NotificationState };
