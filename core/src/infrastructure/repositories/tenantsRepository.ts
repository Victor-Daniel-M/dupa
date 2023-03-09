import { ITenant } from '@core/domain/entities/tenant';
import { TenantsRepository } from '@core/domain/repositories/tenantsRepository';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class TenantsRepositoryImpl implements TenantsRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: ITenant): Promise<ITenant> {
    const res = await this.prisma.tenant.create({
      data: data,
    });

    return { ...res };
  }
}
