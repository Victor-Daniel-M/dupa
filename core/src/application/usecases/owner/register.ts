import { OwnerRegisterReqDto } from '@core/adapter/dtos/owner/auth.controller.dto';
import { UsersRepository } from '@core/domain/repositories/usersRepository';
import { UsersRepositoryImpl } from '@core/infrastructure/repositories/usersRepository';
import { Inject, Injectable } from '@nestjs/common';
import { z } from 'nestjs-zod/z';

@Injectable()
export class RegisterUsecase {
  constructor(
    @Inject('UsersRepositoryImpl')
    private userRepositoryImp: UsersRepositoryImpl,
  ) {}
  async execute(data: OwnerRegisterReqDto) {
    this.userRepositoryImp.create({ ...data, userType: 'PROPERTY_ADMIN' });
  }
}
