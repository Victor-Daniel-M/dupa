import { PartialType } from '@nestjs/swagger';
import { CreateRealtorDto } from './create-realtor.dto';

export class UpdateRealtorDto extends PartialType(CreateRealtorDto) {}
