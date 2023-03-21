export interface BaseRepository {
  findOrThrow(data): Promise<any>;

  search(query: any): Promise<any[]>;

  findAll(): Promise<any[]>;

  createOrThrow(data: any, needleField: string): Promise<any>;

  update(id: string, updatedItem: any): Promise<void>;

  delete(id: string): Promise<void>;
}
