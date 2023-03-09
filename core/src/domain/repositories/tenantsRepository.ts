import { ITenant } from '@core/domain/entities/tenant';

export interface TenantsRepository {
  create(data: any): Promise<ITenant>;
}
