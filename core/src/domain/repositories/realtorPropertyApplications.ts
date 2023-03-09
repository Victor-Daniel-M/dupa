import { IRealtorPropertyApplication } from '../entities/realtorPropertyApplication';

export interface RealtorProperyApplicationsRepository {
  create(data: any): Promise<IRealtorPropertyApplication>;
}
