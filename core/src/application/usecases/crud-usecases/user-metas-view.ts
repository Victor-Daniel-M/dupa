import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
import { UserMetasViewSchema } from '@core/adapter/controllers/dtos/crud-dtos/userMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserMetasViewUsecase {
  private userMetaRepository: UserMetaRepositoryImpl;

  constructor({
    userMetaRepository,
  }: {
    userMetaRepository: UserMetaRepositoryImpl;
  }) {
    this.userMetaRepository = userMetaRepository;
  }

  async execute(data: z.infer<typeof UserMetasViewSchema>) {
    // @ts-ignore
    const userMeta = await this.userMetaRepository.findOrThrow(data);
    return userMeta;
  }
}