import { IProperty } from '@core/domain/entities/property';
import { PropertiesRepository } from '@core/domain/repositories/propertiesRepository';
import { PrismaService } from '@core/infrastructure/services/prisma.service';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class PropertiesRepositoryImpl implements PropertiesRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: IProperty): Promise<IProperty> {
    const createdProperty = await this.prisma.property.create({
      data: data,
    });

    return { ...createdProperty, cost: createdProperty.cost.toNumber() };
  }
}
