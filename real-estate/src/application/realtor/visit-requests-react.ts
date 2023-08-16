import { ReactionRepositoryImpl } from '@db/infrastructure/repositories/reactions-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorReactToVisitRequestReqBodyDto,
  RealtorReactToVisitRequestReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorReactToVisitRequestReqBodyDto;
  query: RealtorReactToVisitRequestReqQueryDto;
};

export class RealtorReactToVisitRequestUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.ReactionRepositoryImpl)
    private reactionRepositoryImpl: ReactionRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {
      fromEntityId,
      fromEntityName,
      reactionType,
      toEntityId,
      toEntityName,
      text,
    } = data.body;
    const {} = data.query;

    const createdReaction = await this.reactionRepositoryImpl.create({
      fromEntityId,
      fromEntityName,
      reactionType,
      toEntityId,
      toEntityName,
      text,
    });

    return { record: createdReaction };
  }
}
