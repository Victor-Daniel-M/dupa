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
import { PropertiesCreateManyUsecase } from '@real-estate/application/owner/properties-create-many';
import { PropertiesCreateManyDto } from '../dtos/general.dto';

@ApiTags('admin')
@Controller()
@UseInterceptors(ResponseInterceptor)
export class AdminController {
  constructor(
    @Inject(REAL_ESTATE_TYPES.useCases.PropertiesCreateManyUsecase)
    private propertiesCreateManyUsecase: PropertiesCreateManyUsecase,
  ) {}

  @Post('properties/create-many')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 1))
  async register(
    @Body() body: PropertiesCreateManyDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    // @ts-ignore
    // console.log('body, files:', body, body.properties[0].files, files);

    return await this.propertiesCreateManyUsecase.execute({
      body,
      files,
    });
  }
}
