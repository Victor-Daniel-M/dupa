import { BaseRepository } from '@core/domain/repositories/base-repository';

type EntityInput<T> = {
  [key in keyof T as string]?: { value: string | number };
};

export class RepositoryImpl<T extends { id?: { value: string } }>
  implements BaseRepository
{
  private table: T[];

  constructor(private tableName: string) {
    this.table = [];
  }

  async findOrThrow(data: EntityInput<T>): Promise<T> {
    const key: string = Object.keys(data)[0];
    const result = this.table.find((item: any) => {
      return item[key].value === data[key]?.value;
    });

    if (!result) {
      throw new Error('Not found');
    }
    return result;
  }

  async search(query: { [key in keyof T as string]?: any }): Promise<T[]> {
    return this.table.filter((item: EntityInput<T>) => {
      return Object.entries(query).every(([key, value]) => {
        if (key in item) {
          if (typeof value === 'string') {
            return (item[key]?.value as string).includes(value);
          } else {
            return item['id']?.value === value;
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
    if (index !== -1) throw new Error('Already exists');
    this.table.push(data);

    return data;
  }

  async update(id: string, updatedItem: T): Promise<void> {
    const index = this.table.findIndex((item) => item.id?.value === id);
    if (index !== -1) this.table[index] = updatedItem;
  }

  async delete(id: string): Promise<void> {
    const index = this.table.findIndex((item) => item.id?.value === id);
    if (index !== -1) this.table.splice(index, 1);
  }
}
