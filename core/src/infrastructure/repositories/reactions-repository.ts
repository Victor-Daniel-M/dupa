import { Reaction } from '@core/domain/entities/reaction';
import { Injectable } from '@nestjs/common';
import { RepositoryImpl } from './base-repository';

@Injectable()
export class ReactionRepositoryImpl extends RepositoryImpl<Reaction> {}
