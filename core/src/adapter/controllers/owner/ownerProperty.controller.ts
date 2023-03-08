import { CreatePropertyReqDto } from '@core/adapter/dtos/owner/properties.controller.dto';
import { PropertiesCreateUsecase } from '@core/application/usecases/owner/property-create';
import { PropertiesRepositoryImpl } from '@core/infrastructure/repositories/propertiesRepository';
import { UploadImageService } from '@core/infrastructure/services/uploadImage.service';
import { Controller, Post, ParseFilePipeBuilder } from '@nestjs/common';
import { Body, UseInterceptors } from '@nestjs/common/decorators';
import { UploadedFile } from '@nestjs/common/decorators/http/route-params.decorator';
import { InternalServerErrorException } from '@nestjs/common/exceptions';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('owner/properties')
export class OwnerPropertyController {
  constructor(
    private propertiesRepositoryImpl: PropertiesRepositoryImpl,
    private readonly uploadImageService: UploadImageService,
  ) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async propertyCreate(
    @Body() body: CreatePropertyReqDto,
    @UploadedFile()
    file?: Express.Multer.File,
  ) {
    try {
      const data = await this.uploadImageService.upload(file);
      console.log('Uploaded file:', data);
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException("Couldn't upload");
    }

    const propertiesCreateUsecase = new PropertiesCreateUsecase({
      propertiesRepositoryImpl: this.propertiesRepositoryImpl,
    });

    return propertiesCreateUsecase.execute(body);
  }
}
