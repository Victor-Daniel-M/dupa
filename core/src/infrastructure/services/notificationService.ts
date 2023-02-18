import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user';
import { getCurrentWeather } from '../external-apis/weatherApi';

@Injectable()
export class NotificationService {
  async sendNotification() {
    console.log('Notification sent');
  }
}
