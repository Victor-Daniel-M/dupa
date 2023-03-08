import { RealtorRegisterReqDto } from '@core/adapter/dtos/realtor/auth.controller.dto';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { z } from 'nestjs-zod/z';

export class RealtorsAuthRegisterUsecase {
  private usersRepositoryImpl: UsersRepositoryImpl;
  constructor({
    usersRepositoryImpl,
  }: {
    usersRepositoryImpl: UsersRepositoryImpl;
  }) {
    this.usersRepositoryImpl = usersRepositoryImpl;
  }
  async execute(data: RealtorRegisterReqDto) {
    this.usersRepositoryImpl.create({ ...data, userType: 'REALTOR' });
  }
}
