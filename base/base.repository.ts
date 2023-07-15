import { Inject, BadGatewayException, Injectable } from '@nestjs/common';
import { FindManyOptions, Repository } from 'typeorm';
import { IBaseRepository } from './IBase.repository';
import { BaseEntity } from './base.entity';
import { DB_TYPES } from '@db/types';
import { Order, PageDto, PageMetaDto, PageOptionsDto } from '@common/ddd/dtos';

@Injectable()
export class BaseRepository<T extends BaseEntity>
  implements IBaseRepository<T>
{
  constructor(
    @Inject(DB_TYPES.repositories.Repository)
    private readonly genericRepository: Repository<T>,
  ) {}

  create(entity: T): Promise<T> {
    try {
      return new Promise<T>((resolve, reject) => {
        this.genericRepository
          .save(entity)
          .then((created) => resolve(created))
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getAll(): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository.find();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  public async getAllPaginated<T>(data: {
    pageOptionsDto?: Partial<PageOptionsDto>;
    findOptions?: FindManyOptions<T> | undefined;
  }): Promise<PageDto<any>> {
    const { pageOptionsDto } = data;
    const take = pageOptionsDto?.take ?? 2;
    const page = pageOptionsDto?.page ?? 1;
    const skip = (page - 1) * take;

    const res = await this.genericRepository.findAndCount({
      take: take,
      skip: skip,
      // @ts-ignore
      order: {
        id: Order.DESC,
      },
      ...data.findOptions,
    });

    const itemCount = res[1];
    const entities = res[0];

    const pageMetaDto = new PageMetaDto({
      itemCount,
      pageOptionsDto: {
        take,
        page,
        skip,
      },
    });

    return new PageDto(entities, pageMetaDto);
  }

  getBy({ key, value }: { key: keyof T; value: any }): Promise<T[]> {
    try {
      return <Promise<T[]>>this.genericRepository
        .createQueryBuilder()
        .where(`${String(key)} = :value`, { value })
        .execute();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  get(id: number): Promise<T> {
    try {
    } catch (error) {
      throw new BadGatewayException(error);
    }
    return <Promise<T>>this.genericRepository.findOneById(id);
  }

  async delete(id: number) {
    try {
      await this.genericRepository.delete(id);
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async deleteBy({ key, value }: { key: keyof T; value: any }) {
    try {
      await this.genericRepository
        .createQueryBuilder()
        .delete()
        .where(`${String(key)} = :value`, { value })
        .execute();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  update(entity: any): Promise<any> {
    try {
      return new Promise<any>((resolve, reject) => {
        this.genericRepository.update(entity.id, entity);
        this.genericRepository
          .findOneById(entity.id)
          .then((responseGet) => {
            try {
              if (responseGet == null) reject('Not existing');
              let retrievedEntity: any = responseGet as any;
              this.genericRepository
                .save(retrievedEntity)
                .then((response) => {
                  console.log('response:', response);
                  resolve(response);
                })
                .catch((err) => reject(err));
            } catch (e) {
              reject(e);
            }
          })
          .catch((err) => reject(err));
      });
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
