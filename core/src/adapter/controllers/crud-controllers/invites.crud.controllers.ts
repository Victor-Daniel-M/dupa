import { InvitesCreateUsecase } from '@core/application/usecases/crud-usecases/invites-create';
import { InvitesDeleteUsecase } from '@core/application/usecases/crud-usecases/invites-delete';
import { InvitesGetUsecase } from '@core/application/usecases/crud-usecases/invites-get';
import { InvitesUpdateUsecase } from '@core/application/usecases/crud-usecases/invites-update';
import { InvitesViewUsecase } from '@core/application/usecases/crud-usecases/invites-view';
import { InviteRepositoryImpl } from '@core/infrastructure/repositories/invites-repository';
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
} from '../dtos/crud-dtos/invites.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('invites')
export class InvitesCrudController {
  constructor(private repositoryImpl: InviteRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: InvitesGetDto) {
    const invitesGetUsecase = new InvitesGetUsecase({
      inviteRepository: this.repositoryImpl,
    });

    const res = await invitesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: InvitesViewDto) {
    const invitesViewUsecase = new InvitesViewUsecase({
      inviteRepository: this.repositoryImpl,
    });

    const res = await invitesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: InvitesCreateDto) {
    const invitesCreateUsecase = new InvitesCreateUsecase({
      inviteRepository: this.repositoryImpl,
    });

    const res = await invitesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: InvitesUpdateDto) {
    const invitesUpdateUsecase = new InvitesUpdateUsecase({
      inviteRepository: this.repositoryImpl,
    });

    const res = await invitesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: InvitesDeleteDto) {
    const invitesDeleteUsecase = new InvitesDeleteUsecase({
      inviteRepository: this.repositoryImpl,
    });

    const res = await invitesDeleteUsecase.execute(body);

    return res;
  }
}


