import { MessagesCreateUsecase } from '@core/application/usecases/crud-usecases/message-create';
import { MessagesDeleteUsecase } from '@core/application/usecases/crud-usecases/message-delete';
import { MessagesGetUsecase } from '@core/application/usecases/crud-usecases/message-get';
import { MessagesUpdateUsecase } from '@core/application/usecases/crud-usecases/message-update';
import { MessagesViewUsecase } from '@core/application/usecases/crud-usecases/message-view';
import { MessageRepositoryImpl } from '@core/infrastructure/repositories/message-repository';
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
  MessagesCreateDto,
  MessagesDeleteDto,
  MessagesGetDto,
  MessagesUpdateDto,
  MessagesViewDto,
} from '../dtos/messages.crud.controllers.dto';

@UseInterceptors(ResponseInterceptor)
@Controller('message')
export class MessagesCrudController {
  constructor(private repositoryImpl: MessageRepositoryImpl) {}

  @Get('')
  async findAll(@Body() body: MessagesGetDto) {
    const messagesGetUsecase = new MessagesGetUsecase({
      messagesRepository: this.repositoryImpl,
    });

    const res = await messagesGetUsecase.execute(body);

    return res;
  }

  @Post('/:id')
  async findOne(@Body() body: MessagesViewDto) {
    const messagesViewUsecase = new MessagesViewUsecase({
      messagesRepository: this.repositoryImpl,
    });

    const res = await messagesViewUsecase.execute(body);

    return res;
  }

  @Post('')
  async create(@Body() body: MessagesCreateDto) {
    const messagesCreateUsecase = new MessagesCreateUsecase({
      messagesRepository: this.repositoryImpl,
    });

    const res = await messagesCreateUsecase.execute(body);

    return res;
  }

  @Put('/:id')
  async update(@Body() body: MessagesUpdateDto) {
    const messagesUpdateUsecase = new MessagesUpdateUsecase({
      messagesRepository: this.repositoryImpl,
    });

    const res = await messagesUpdateUsecase.execute(body);

    return res;
  }

  @Delete('/:id')
  async delete(@Body() body: MessagesDeleteDto) {
    const messagesDeleteUsecase = new MessagesDeleteUsecase({
      messagesRepository: this.repositoryImpl,
    });

    const res = await messagesDeleteUsecase.execute(body);

    return res;
  }
}


