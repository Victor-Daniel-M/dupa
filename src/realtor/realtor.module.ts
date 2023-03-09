import { Module } from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { RealtorController } from './realtor.controller';

@Module({
  controllers: [RealtorController],
  providers: [RealtorService]
})
export class RealtorModule {}
