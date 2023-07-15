import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  async sendNotification() {
    console.log('Notification sent');
  }
}
