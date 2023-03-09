import { Test, TestingModule } from '@nestjs/testing';
import { RealtorService } from './realtor.service';

describe('RealtorService', () => {
  let service: RealtorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RealtorService],
    }).compile();

    service = module.get<RealtorService>(RealtorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
