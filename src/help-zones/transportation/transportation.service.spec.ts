import { Test, TestingModule } from '@nestjs/testing';
import { TransportationService } from './transportation.service';

describe('TransportationService', () => {
  let service: TransportationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransportationService],
    }).compile();

    service = module.get<TransportationService>(TransportationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
