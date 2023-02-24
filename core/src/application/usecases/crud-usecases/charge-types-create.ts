import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { ChargeTypesCreateSchema } from '@core/adapter/controllers/dtos/crud-dtos/chargeTypes.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargeTypesCreateUsecase {
  private chargeTypeRepository: ChargeTypeRepositoryImpl;

  constructor({
    chargeTypeRepository,
  }: {
    chargeTypeRepository: ChargeTypeRepositoryImpl;
  }) {
    this.chargeTypeRepository = chargeTypeRepository;
  }

  async execute(data: z.infer<typeof ChargeTypesCreateSchema>) {
    // @ts-ignore
    const chargeType = await this.chargeTypeRepository.createOrThrow(data, 'id');
    return chargeType;
  }
}