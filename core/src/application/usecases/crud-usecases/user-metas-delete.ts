import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
import { UserMetasDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/userMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserMetasDeleteUsecase {
  private userMetaRepository: UserMetaRepositoryImpl;

  constructor({
    userMetaRepository,
  }: {
    userMetaRepository: UserMetaRepositoryImpl;
  }) {
    this.userMetaRepository = userMetaRepository;
  }

  async execute(data: z.infer<typeof UserMetasDeleteSchema>) {
    // @ts-ignore
    const userMeta = await this.userMetaRepository.delete(data.id!);
    return userMeta;
  }
}