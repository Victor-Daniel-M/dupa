import { OwnerRegisterUsecase } from '@core/application/owner/register';
import { TYPES } from '@core/domain/types';
import {
  Body,
  Controller,
  Inject,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ResponseInterceptor } from 'common/filters-interceptors/src';
import {
  OwnerAssignPropertyDto,
  OwnerRegisterDto,
} from '../dtos/owner.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { S3Provider } from '@core/infrastructure/services/s3Provider.service';
import { AssignPropertyByOwnerUsecase } from '@core/application/owner/assign-property';

@ApiTags('owner')
@Controller('owner')
@UseInterceptors(ResponseInterceptor)
export class OwnerController {
  constructor(
    @Inject(TYPES.useCases.OwnerRegisterUsecase)
    private ownerRegisterUsecase: OwnerRegisterUsecase,
    @Inject(TYPES.useCases.AssignPropertyByOwnerUsecase)
    private assignPropertyByOwnerUsecase: AssignPropertyByOwnerUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 1))
  async register(
    @Body() body: OwnerRegisterDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return await this.ownerRegisterUsecase.execute({
      body,
      files,
    });
  }

  @Post('assign-owner-property')
  async assignProperty(@Body() body: OwnerAssignPropertyDto) {
    return await this.assignPropertyByOwnerUsecase.execute({
      body,
    });
  }
}
