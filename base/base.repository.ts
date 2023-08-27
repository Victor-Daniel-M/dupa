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

  create(entity: Omit<T, 'generateLabel'>): Promise<T> {
    try {
      return new Promise<T>((resolve, reject) => {
        this.genericRepository
          // @ts-ignore
          .save(entity)
          // @ts-ignore
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
    const repositoryName = this.genericRepository.metadata.name;

    try {
      return <Promise<T[]>>this.genericRepository
        .createQueryBuilder()
        .where(`${String(key)} = :value`, { value })
        .select(`${repositoryName}`)
        .getMany();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getOneBy({ key, value }: { key: keyof T; value: any }): Promise<T> {
    const repositoryName = this.genericRepository.metadata.name;

    try {
      return <Promise<T>>this.genericRepository
        .createQueryBuilder()
        .where(`${String(key)} = :value`, { value })
        .select(`${repositoryName}`)
        .getOne();
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  getIn({ key, list }: { key: keyof T; list: any[] }): Promise<T[]> {
    const repositoryName = this.genericRepository.metadata.name;

    console.log('repositoryName:', repositoryName, list);

    try {
      return <Promise<T[]>>this.genericRepository
        .createQueryBuilder()
        .where(`${repositoryName}.${String(key)} IN (:...ids)`, {
          ids: list,
        })
        .getMany();
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
    console.log('id:', id);

    try {
      const res = await this.genericRepository.delete(id);

      console.log(res);
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

  update(entity: Partial<T>): Promise<any> {
    // @ts-ignore
    delete entity.label;
    // @ts-ignore
    delete entity.value;
    delete entity.updatedAt;
    delete entity.createdAt;

    try {
      return new Promise<any>(async (resolve, reject) => {
        // @ts-ignore
        await this.genericRepository.update(entity.id, entity);
        await this.genericRepository
          // @ts-ignore
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
