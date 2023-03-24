import { RealtorRegisterUsecase } from '@core/application/realtor/register';
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
import { RealtorRegisterDto } from '../dtos/realtor.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('realtor')
@Controller('realtor')
@UseInterceptors(ResponseInterceptor)
export class RealtorController {
  constructor(
    @Inject(TYPES.useCases.RealtorRegisterUsecase)
    private realtorRegisterUsecase: RealtorRegisterUsecase,
  ) {}

  @Post('register')
  @UseInterceptors(FilesInterceptor('properties[0][files][]', 2))
  async registerRealtor(
    @Body() body: RealtorRegisterDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return await this.realtorRegisterUsecase.execute({
      body,
      files,
    });
  }
}
