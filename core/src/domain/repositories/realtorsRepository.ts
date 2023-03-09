import { IRealtor } from '@core/domain/entities/realtor';

export interface RealtorsRepository {
  create(data: any): Promise<IRealtor>;
}
