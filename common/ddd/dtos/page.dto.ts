import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { PageMetaDto } from './page-meta.dto';

export class PageDto<T> {
  @IsArray()
  @ApiProperty({ isArray: true })
  readonly records: T[];

  @ApiProperty({ type: () => PageMetaDto })
  readonly paginationMeta: PageMetaDto;

  constructor(data: T[], meta: PageMetaDto) {
    this.records = data;
    this.paginationMeta = meta;
  }
}