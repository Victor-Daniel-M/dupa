import { NotificationStrategy } from '@core/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class NotificationStrategyRepositoryImpl extends BaseRepository<NotificationStrategy> {}
