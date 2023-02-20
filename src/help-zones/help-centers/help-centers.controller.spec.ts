import { Test, TestingModule } from '@nestjs/testing';
import { HelpCentersController } from './help-centers.controller';
import { HelpCentersService } from './help-centers.service';

describe('HelpCentersController', () => {
  let controller: HelpCentersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HelpCentersController],
      providers: [HelpCentersService],
    }).compile();

    controller = module.get<HelpCentersController>(HelpCentersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
