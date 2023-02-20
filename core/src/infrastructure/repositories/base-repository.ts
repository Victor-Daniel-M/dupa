import { BaseRepository } from 'core/src/domain/repositories/base-repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@core/domain/entities/user';
import { Property } from '@core/domain/entities/property';

type EntityInput<T> = {
  [key in keyof T as string]?: string | number;
};

export class RepositoryImpl<T extends { id?: string }>
  implements BaseRepository
{
  private table: T[] = [];

  constructor() {
    this.table = [];
  }

  async findOrThrow(data: EntityInput<T>): Promise<T> {
    const key: string = Object.keys(data)[0];
    const result = this.table.find((item: any) => {
      return item[key] === data[key];
    });

    if (!result) {
      throw new NotFoundException('Not found');
    }
    return result;
  }

  async search(query: { [key in keyof T as string]?: any }): Promise<T[]> {
    return this.table.filter((item: EntityInput<T>) => {
      return Object.entries(query).every(([key, value]) => {
        if (key in item) {
          if (typeof value === 'string') {
            return (item[key] as string).includes(value);
          } else {
            return item['id'] === value;
          }
        }
        return false;
      });
    });
  }

  async findAll(): Promise<T[]> {
    return this.table;
  }

  async createOrThrow(data: T, needleField: keyof T & string): Promise<T> {
    const index = this.table.findIndex((item) => item.id === data[needleField]);
    if (index !== -1) throw new BadRequestException('Already exists');
    this.table.push(data);

    return data;
  }

  async update(id: string, updatedItem: T): Promise<void> {
    const index = this.table.findIndex((item) => item.id === id);
    if (index !== -1) this.table[index] = updatedItem;
  }

  async delete(id: string): Promise<void> {
    const index = this.table.findIndex((item) => item.id === id);
    if (index !== -1) this.table.splice(index, 1);
  }
}

@Injectable()
export class UserRepositoryImpl extends RepositoryImpl<User> {}

@Injectable()
export class PropertyRepositoryImpl extends RepositoryImpl<Property> {}
