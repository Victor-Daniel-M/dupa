import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService implements OnModuleInit {
  // export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    // this.$on('beforeExit', async () => {
    //   await app.close();
    // });
  }
}
