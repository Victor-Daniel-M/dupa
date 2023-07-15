import { Action } from '@db/domain/entities/actions';
import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'base/base.repository';

@Injectable()
export class ActionRepositoryImpl extends BaseRepository<Action> {}
