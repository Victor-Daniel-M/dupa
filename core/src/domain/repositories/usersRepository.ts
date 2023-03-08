import { IUser } from '@core/domain/entities/user';

export interface UsersRepository {
  create(data: any): Promise<IUser>;
}
