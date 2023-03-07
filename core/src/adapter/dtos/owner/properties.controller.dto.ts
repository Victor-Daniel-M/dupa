export class CreatePropertyReqDto {
  title: string;
  description: string;
  coverImage: string;
  cost: number;
  createdAt: string;
  updatedAt: string;
  openDate: string;
  propertyCategoryId: string;
}

// S3 upload
import { ApiPropertyOptional } from '@nestjs/swagger';

export class ImageFileDTO {
  @ApiPropertyOptional()
  fieldname?: string;

  @ApiPropertyOptional()
  originalname?: string;

  @ApiPropertyOptional()
  encoding?: string;

  @ApiPropertyOptional()
  mimetype?: string;

  @ApiPropertyOptional()
  buffer?: any;

  @ApiPropertyOptional()
  size?: number;
}

export class ImageResponseDTO {
  @ApiPropertyOptional()
  ETag?: string;

  @ApiPropertyOptional()
  Location?: string;

  @ApiPropertyOptional()
  key?: string;

  @ApiPropertyOptional()
  Key?: string;

  @ApiPropertyOptional()
  Bucket?: string;
}
