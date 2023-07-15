import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestRepositoryImpl } from '@db/infrastructure/repositories/requests-repository';
import { BaseController } from 'base/base.controller';
import { Request } from '@db/domain/entities/requests';

@ApiTags('requests')
@Controller('requests')
export class RequestController extends BaseController<Request> {
  constructor(private readonly requestRepository: RequestRepositoryImpl) {
    super(requestRepository);
  }
}
