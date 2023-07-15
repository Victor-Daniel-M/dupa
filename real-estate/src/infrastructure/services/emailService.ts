import { Injectable } from '@nestjs/common';
import { sendLoginEmail } from '../mailer/mailer';

@Injectable()
export class EmailService {
  async sendLoginEmail(email: string) {
    await sendLoginEmail(email);
  }
}
