import { NotificationSubscribable } from '@core/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class NotificationSubscribableRepositoryImpl extends BaseRepository<NotificationSubscribable> {}