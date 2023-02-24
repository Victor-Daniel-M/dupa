import { UserMetaRepositoryImpl } from '@core/infrastructure/repositories/user-metas-repository';
import { UserMetasUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/userMetas.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class UserMetasUpdateUsecase {
  private userMetaRepository: UserMetaRepositoryImpl;

  constructor({
    userMetaRepository,
  }: {
    userMetaRepository: UserMetaRepositoryImpl;
  }) {
    this.userMetaRepository = userMetaRepository;
  }

  async execute(data: z.infer<typeof UserMetasUpdateSchema>) {
    // @ts-ignore
    const userMeta = await this.userMetaRepository.update(data.id!, data);;
    return userMeta;
  }
}