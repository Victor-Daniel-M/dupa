import { NotificationSubscribable } from '@db/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationSubscribableRepositoryImpl extends BaseRepository<NotificationSubscribable> {
  constructor(
    @InjectRepository(NotificationSubscribable)
    public repository: Repository<NotificationSubscribable>,
  ) {
    super(repository);
  }
}
