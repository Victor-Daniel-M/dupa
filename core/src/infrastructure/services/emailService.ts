import { Injectable } from '@nestjs/common';
import { Email } from '../../domain/value-objects/email';
import { sendLoginEmail } from '../mailer/mailer';

@Injectable()
export class EmailService {
  async sendLoginEmail(email: Email) {
    await sendLoginEmail(email);
  }
}
