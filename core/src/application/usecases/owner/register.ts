import { OwnerRegisterReqDto } from '@core/adapter/dtos/owner/auth.controller.dto';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { z } from 'nestjs-zod/z';

export class RegisterUsecase {
  private userRepositoryImp: UsersRepositoryImpl;
  constructor({
    userRepositoryImp,
  }: {
    userRepositoryImp: UsersRepositoryImpl;
  }) {
    this.userRepositoryImp = userRepositoryImp;
  }
  async execute(data: OwnerRegisterReqDto) {
    this.userRepositoryImp.create({ ...data, userType: 'PROPERTY_ADMIN' });
  }
}
