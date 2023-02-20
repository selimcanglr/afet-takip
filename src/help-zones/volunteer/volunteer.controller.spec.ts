import { Test, TestingModule } from '@nestjs/testing';
import { VolunteerController } from './volunteer.controller';
import { VolunteerService } from './volunteer.service';

describe('VolunteerController', () => {
  let controller: VolunteerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VolunteerController],
      providers: [VolunteerService],
    }).compile();

    controller = module.get<VolunteerController>(VolunteerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
