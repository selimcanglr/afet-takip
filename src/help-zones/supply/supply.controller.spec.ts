import { Test, TestingModule } from '@nestjs/testing';
import { SupplyController } from './supply.controller';
import { SupplyService } from './supply.service';

describe('SupplyController', () => {
  let controller: SupplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplyController],
      providers: [SupplyService],
    }).compile();

    controller = module.get<SupplyController>(SupplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
