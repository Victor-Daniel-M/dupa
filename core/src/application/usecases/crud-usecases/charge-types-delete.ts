import { ChargeTypeRepositoryImpl } from '@core/infrastructure/repositories/charge-types-repository';
import { ChargeTypesDeleteSchema } from '@core/adapter/controllers/dtos/crud-dtos/chargeTypes.crud.controllers.dto';
import { z } from 'nestjs-zod/z';

export class ChargeTypesDeleteUsecase {
  private chargeTypeRepository: ChargeTypeRepositoryImpl;

  constructor({
    chargeTypeRepository,
  }: {
    chargeTypeRepository: ChargeTypeRepositoryImpl;
  }) {
    this.chargeTypeRepository = chargeTypeRepository;
  }

  async execute(data: z.infer<typeof ChargeTypesDeleteSchema>) {
    // @ts-ignore
    const chargeType = await this.chargeTypeRepository.delete(data.id!);
    return chargeType;
  }
}