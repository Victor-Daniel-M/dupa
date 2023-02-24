import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
import { UserMetasCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/userMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserMetasCreateUsecase {
  private userMetaRepository: UserMetaRepositoryImpl;

  constructor({
    userMetaRepository,
  }: {
    userMetaRepository: UserMetaRepositoryImpl;
  }) {
    this.userMetaRepository = userMetaRepository;
  }

  async execute(data: z.infer<typeof UserMetasCreateSchema>) {
    // @ts-ignore
    const userMeta = await this.userMetaRepository.createOrThrow(data, 'id');
    return userMeta;
  }
}