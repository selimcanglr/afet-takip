import { Test, TestingModule } from '@nestjs/testing';
import { HelpCentersService } from './help-centers.service';

describe('HelpCentersService', () => {
  let service: HelpCentersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpCentersService],
    }).compile();

    service = module.get<HelpCentersService>(HelpCentersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
