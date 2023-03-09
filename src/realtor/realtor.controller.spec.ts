import { Test, TestingModule } from '@nestjs/testing';
import { RealtorController } from './realtor.controller';
import { RealtorService } from './realtor.service';

describe('RealtorController', () => {
  let controller: RealtorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RealtorController],
      providers: [RealtorService],
    }).compile();

    controller = module.get<RealtorController>(RealtorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
