import { PageDto, PageOptionsDto } from '@common/ddd/dtos';
import { FindManyOptions } from 'typeorm';

export interface IBaseRepository<T> {
  getAll(): Promise<T[]>;
  getAllPaginated(data: {
    pageOptionsDto?: Partial<PageOptionsDto>;
    findOptions?: FindManyOptions<T> | undefined;
  }): Promise<PageDto<T[]>>;
  get(id: number): Promise<T>;
  update(entity: T): Promise<T>;
  create(entity: T): Promise<T>;
  delete(id: number): Promise<void>;
}
