import { IRealtorPropertyApplication } from '@core/domain/entities/realtorPropertyApplication';
import { RealtorProperyApplicationsRepository } from '@core/domain/repositories/realtorPropertyApplications';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class RealtorPropertyApplicationsRepositoryImpl
  implements RealtorProperyApplicationsRepository
{
  constructor(private prisma: PrismaService) {}
  async create(
    data: IRealtorPropertyApplication,
  ): Promise<IRealtorPropertyApplication> {
    const res = await this.prisma.realtorPropertyApplication.create({
      data: data,
    });

    return { ...res };
  }
}
