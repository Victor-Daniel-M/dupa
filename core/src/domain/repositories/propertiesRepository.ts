import { IProperty } from '@core/domain/entities/property';

export interface PropertiesRepository {
  create(data: any): Promise<IProperty>;
}
