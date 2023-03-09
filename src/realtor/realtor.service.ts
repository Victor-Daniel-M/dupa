import { Injectable } from '@nestjs/common';
import { CreateRealtorDto } from './dto/create-realtor.dto';
import { UpdateRealtorDto } from './dto/update-realtor.dto';

@Injectable()
export class RealtorService {
  create(createRealtorDto: CreateRealtorDto) {
    return 'This action adds a new realtor';
  }

  findAll() {
    return `This action returns all realtor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} realtor`;
  }

  update(id: number, updateRealtorDto: UpdateRealtorDto) {
    return `This action updates a #${id} realtor`;
  }

  remove(id: number) {
    return `This action removes a #${id} realtor`;
  }
}
