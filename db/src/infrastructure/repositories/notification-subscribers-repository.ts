import { NotificationSubscriber } from '@db/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationSubscriberRepositoryImpl extends BaseRepository<NotificationSubscriber> {
  constructor(
    @InjectRepository(NotificationSubscriber)
    public repository: Repository<NotificationSubscriber>,
  ) {
    super(repository);
  }
}
