import { NotificationStrategy } from '@db/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationStrategyRepositoryImpl extends BaseRepository<NotificationStrategy> {
  constructor(
    @InjectRepository(NotificationStrategy)
    public repository: Repository<NotificationStrategy>,
  ) {
    super(repository);
  }
}
