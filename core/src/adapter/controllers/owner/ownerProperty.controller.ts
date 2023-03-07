import { CreatePropertyReqDto } from '@core/adapter/dtos/owner/properties.controller.dto';
import { PropertiesCreateUsecase } from '@core/application/usecases/owner/property-create';
import { PropertiesRepositoryImpl } from '@core/infrastructure/repositories/propertiesRepository';
import { Controller, Post, ParseFilePipeBuilder } from '@nestjs/common';
import { Body, UseInterceptors } from '@nestjs/common/decorators';
import { UploadedFile } from '@nestjs/common/decorators/http/route-params.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

export class SampleDto {
  name: string;
  age: string;
}

@Controller('owner/properties')
export class OwnerPropertyController {
  constructor(private propertiesRepositoryImpl: PropertiesRepositoryImpl) {}
  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async propertyCreate(
    @Body() body: CreatePropertyReqDto,
    @UploadedFile()
    file?: Express.Multer.File,
  ) {
    // const propertiesCreateUsecase = new PropertiesCreateUsecase({
    //   propertiesRepositoryImpl: this.propertiesRepositoryImpl,
    // });

    // return propertiesCreateUsecase.execute(body);

    console.log(file);
    console.log(body);

    return {
      body,
      file: file?.buffer.toString(),
    };
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file/pass-validation')
  uploadFileAndPassValidation(
    @Body() body: SampleDto,
    @UploadedFile()
    file?: Express.Multer.File,
  ) {
    console.log(file);

    return {
      body,
      file: file?.buffer.toString(),
    };
  }
}
