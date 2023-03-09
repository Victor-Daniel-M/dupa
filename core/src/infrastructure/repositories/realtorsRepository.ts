import { IRealtor } from '@core/domain/entities/realtor';
import { RealtorsRepository } from '@core/domain/repositories/realtorsRepository';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class RealtorsRepositoryImpl implements RealtorsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: IRealtor): Promise<IRealtor> {
    const res = await this.prisma.realtor.create({
      data: data,
    });

    return { ...res };
  }
}
