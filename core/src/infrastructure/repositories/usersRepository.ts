import { IUser } from '@core/domain/entities/user';
import { UsersRepository } from '@core/domain/repositories/usersRepository';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import * as moment from 'moment-timezone';

@Injectable()
export class UsersRepositoryImpl implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: IUser) {
    data.createdAt = moment().toISOString();
    data.updatedAt = moment().toISOString();

    const res = await this.prisma.user.create({
      data: data,
    });

    return res;
  }
}
