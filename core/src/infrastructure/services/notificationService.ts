import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user';
import { getCurrentWeather } from '../external-apis/weatherApi';

@Injectable()
export class NotificationService {
  async sendWeatherNotification(user: User) {
    // const weather = await getCurrentWeather(user.city.value);
    const notification = {
      title: 'Weather Update',
      body: 'The weather is looking good today, enjoy your day!',
      data: { userId: user.id },
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
    };

    // await Notifications.presentLocalNotificationAsync(notification);
    console.log('Notification sent:', notification);
  }
}
