import { Inject, BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { IBaseRepository } from './IBase.repository';
import { BaseEntity } from './base.entity';
import { TYPES } from '@core/domain/types';

@Injectable()
export class BaseRepository<T extends BaseEntity>
  implements IBaseRepository<T>
{
  constructor(
    @Inject(TYPES.repositories.Repository)
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
