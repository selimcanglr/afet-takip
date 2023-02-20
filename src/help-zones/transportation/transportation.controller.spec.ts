import { Test, TestingModule } from '@nestjs/testing';
import { TransportationController } from './transportation.controller';
import { TransportationService } from './transportation.service';

describe('TransportationController', () => {
  let controller: TransportationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransportationController],
      providers: [TransportationService],
    }).compile();

    controller = module.get<TransportationController>(TransportationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
