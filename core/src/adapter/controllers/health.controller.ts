import { Controller, Get, Post } from '@nestjs/common';

@Controller('')
export class HealthController {
  @Get('ping')
  async ping() {
    return 'OK';
  }
}
