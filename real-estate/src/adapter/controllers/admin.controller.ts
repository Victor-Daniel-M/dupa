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
  OwnerAssignOfferingDto,
  OwnerRegisterDto,
} from '../dtos/owner.controllers.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
// import { OfferingsCreateManyUsecase } from '@real-estate/application/owner/offerings-create-many';
import { OfferingsCreateManyDto } from '../dtos/general.dto';

@ApiTags('admin')
@Controller()
@UseInterceptors(ResponseInterceptor)
export class AdminController {
  constructor() {} // private offeringsCreateManyUsecase: OfferingsCreateManyUsecase, // @Inject(REAL_ESTATE_TYPES.useCases.OfferingsCreateManyUsecase)

  @Post('offerings/create-many')
  @UseInterceptors(FilesInterceptor('offerings[0][files][]', 1))
  async register(
    @Body() body: OfferingsCreateManyDto,
    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    // @ts-ignore
    // console.log('body, files:', body, body.offerings[0].files, files);
    // return await this.offeringsCreateManyUsecase.execute({
    //   body,
    //   files,
    // });
  }
}
