import { NotificationFrequency } from '@db/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseRepository } from 'base/base.repository';
import { Repository } from 'typeorm';

@Injectable()
export class NotificationFrequencyRepositoryImpl extends BaseRepository<NotificationFrequency> {
  constructor(
    @InjectRepository(NotificationFrequency)
    public repository: Repository<NotificationFrequency>,
  ) {
    super(repository);
  }
}
