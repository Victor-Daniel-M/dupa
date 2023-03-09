import { IOwner } from '@core/domain/entities/owner';
import { OwnersRepository } from '@core/domain/repositories/ownersRepository';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class OwnersRepositoryImpl implements OwnersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: IOwner): Promise<IOwner> {
    const res = await this.prisma.owner.create({
      data: data,
    });

    return { ...res };
  }
}
