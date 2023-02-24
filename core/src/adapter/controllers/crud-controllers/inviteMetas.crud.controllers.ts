import { InviteMetasCreateUsecase } from '@core/application/usecases/crud-usecases/invite-metas-create';
import { InviteMetasDeleteUsecase } from '@core/application/usecases/crud-usecases/invite-metas-delete';
import { InviteMetasGetUsecase } from '@core/application/usecases/crud-usecases/invite-metas-get';
import { InviteMetasUpdateUsecase } from '@core/application/usecases/crud-usecases/invite-metas-update';
import { InviteMetasViewUsecase } from '@core/application/usecases/crud-usecases/invite-metas-view';
import { InviteMetaRepositoryImpl } from '@core/infrastructure/repositories/invite-metas-repository';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  InviteMetasCreateDto,
  InviteMetasDeleteDto,
  InviteMetasGetDto,
  InviteMetasUpdateDto,
  InviteMetasViewDto,
} from '../dtos/crud-dtos/inviteMetas.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('invite-metas')
export class InviteMetasCrudController {
  constructor(private repositoryImpl: InviteMetaRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: InviteMetasGetDto) {
    const inviteMetasGetUsecase = new InviteMetasGetUsecase({
      inviteMetaRepository: this.repositoryImpl,
    });

    const res = await inviteMetasGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: InviteMetasViewDto) {
    const inviteMetasViewUsecase = new InviteMetasViewUsecase({
      inviteMetaRepository: this.repositoryImpl,
    });

    const res = await inviteMetasViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: InviteMetasCreateDto) {
    const inviteMetasCreateUsecase = new InviteMetasCreateUsecase({
      inviteMetaRepository: this.repositoryImpl,
    });

    const res = await inviteMetasCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: InviteMetasUpdateDto) {
    const inviteMetasUpdateUsecase = new InviteMetasUpdateUsecase({
      inviteMetaRepository: this.repositoryImpl,
    });

    const res = await inviteMetasUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: InviteMetasDeleteDto) {
    const inviteMetasDeleteUsecase = new InviteMetasDeleteUsecase({
      inviteMetaRepository: this.repositoryImpl,
    });

    const res = await inviteMetasDeleteUsecase.execute(body);

    return res;
  }
}


