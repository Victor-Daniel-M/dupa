import { NotificationFrequency } from '@core/domain/entities/notification';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class NotificationFrequencyRepositoryImpl extends RepositoryImpl<NotificationFrequency> {}
