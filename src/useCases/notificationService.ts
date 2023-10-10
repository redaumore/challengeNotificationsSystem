import { recipientLimit } from "../domain/recipientLimit";

class NotificationService {
  constructor() {}

  sendMessage(
    message: string,
    recipient: string,
    notificationType: string
  ): boolean {
    // Get the current timestamp
    const currentTime = Date.now();

    return true;
  }
}
