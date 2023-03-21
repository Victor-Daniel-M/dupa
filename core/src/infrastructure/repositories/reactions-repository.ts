import { Reaction } from '@core/domain/entities/reaction';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ReactionRepositoryImpl extends BaseRepository<Reaction> {}
