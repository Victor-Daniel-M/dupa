import { MessageRepositoryImpl } from '@db/infrastructure/repositories/messages-repository';
import { DB_TYPES } from '@db/types';
import { Inject } from '@nestjs/common';
import {
  RealtorCreateMessageReqBodyDto,
  RealtorCreateMessageReqQueryDto,
} from '@real-estate/adapter/dtos/realtor.controllers.dto';

type ExecuteInput = {
  body: RealtorCreateMessageReqBodyDto;
  query: RealtorCreateMessageReqQueryDto;
};

export class RealtorCreateMessageUsecase {
  constructor(
    @Inject(DB_TYPES.repositories.MessageRepositoryImpl)
    private messageRepositoryImpl: MessageRepositoryImpl,
  ) {}

  async execute(data: ExecuteInput) {
    const {
      fromEntityId,
      fromEntityName,
      mediaType,
      mediaValue,
      text,
      toEntityId,
      toEntityName,
    } = data.body;
    const {} = data.query;

    const createdApplication = await this.messageRepositoryImpl.create({
      fromEntityId,
      fromEntityName,
      mediaType,
      mediaValue,
      text,
      toEntityId,
      toEntityName,
    });

    return { record: createdApplication };
  }
}
