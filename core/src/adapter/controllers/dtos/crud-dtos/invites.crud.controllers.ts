import { InvitesCreateUsecase } from '@core/application/usecases/crud-usecases/invite-create';
import { InvitesDeleteUsecase } from '@core/application/usecases/crud-usecases/invite-delete';
import { InvitesGetUsecase } from '@core/application/usecases/crud-usecases/invite-get';
import { InvitesUpdateUsecase } from '@core/application/usecases/crud-usecases/invite-update';
import { InvitesViewUsecase } from '@core/application/usecases/crud-usecases/invite-view';
import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invite-repository';
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
  InvitesCreateDto,
  InvitesDeleteDto,
  InvitesGetDto,
  InvitesUpdateDto,
  InvitesViewDto,
} from '../dtos/invites.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('invite')
export class InvitesCrudController {
  constructor(private repositoryImpl: InviteRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: InvitesGetDto) {
    const invitesGetUsecase = new InvitesGetUsecase({
      invitesRepository: this.repositoryImpl,
    });

    const res = await invitesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: InvitesViewDto) {
    const invitesViewUsecase = new InvitesViewUsecase({
      invitesRepository: this.repositoryImpl,
    });

    const res = await invitesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: InvitesCreateDto) {
    const invitesCreateUsecase = new InvitesCreateUsecase({
      invitesRepository: this.repositoryImpl,
    });

    const res = await invitesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: InvitesUpdateDto) {
    const invitesUpdateUsecase = new InvitesUpdateUsecase({
      invitesRepository: this.repositoryImpl,
    });

    const res = await invitesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: InvitesDeleteDto) {
    const invitesDeleteUsecase = new InvitesDeleteUsecase({
      invitesRepository: this.repositoryImpl,
    });

    const res = await invitesDeleteUsecase.execute(body);

    return res;
  }
}


