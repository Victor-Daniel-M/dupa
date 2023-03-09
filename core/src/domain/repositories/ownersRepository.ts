import { IOwner } from '@core/domain/entities/owner';

export interface OwnersRepository {
  create(data: any): Promise<IOwner>;
}
