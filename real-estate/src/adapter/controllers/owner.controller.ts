import { OwnerRegisterUsecase } from 'real-estate/src/application/owner/register';
import { REAL_ESTATE_TYPES } from '@real-estate/types';
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
import { S3Provider } from 'real-estate/src/infrastructure/services/s3Provider.service';
import { AssignPropertyByOwnerUsecase } from 'real-estate/src/application/owner/assign-property';

@ApiTags('owner')
@Controller('owner')
@UseInterceptors(ResponseInterceptor)
export class OwnerController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.OwnerRegisterUsecase)
    private ownerRegisterUsecase: OwnerRegisterUsecase,
    @Inject(REAL_ESTATE_TYPES.useCases.AssignPropertyByOwnerUsecase)
    private assignPropertyByOwnerUsecase: AssignPropertyByOwnerUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 1))
  async register(
    @Body() body: OwnerRegisterDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    // @ts-ignore
    // console.log('body, files:', body, body.properties[0].files, files);

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
