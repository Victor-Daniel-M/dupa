import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { ChargeTypesUpdateSchema } from '@core/adapter/controllers/dtos/crud-dtos/chargeTypes.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargeTypesUpdateUsecase {
  private chargeTypeRepository: ChargeTypeRepositoryImpl;

  constructor({
    chargeTypeRepository,
  }: {
    chargeTypeRepository: ChargeTypeRepositoryImpl;
  }) {
    this.chargeTypeRepository = chargeTypeRepository;
  }

  async execute(data: z.infer<typeof ChargeTypesUpdateSchema>) {
    // @ts-ignore
    const chargeType = await this.chargeTypeRepository.update(data.id!, data);;
    return chargeType;
  }
}