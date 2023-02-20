import { Module } from '@nestjs/common';
import { HelpCentersService } from './help-centers.service';
import { HelpCentersController } from './help-centers.controller';

@Module({
  controllers: [HelpCentersController],
  providers: [HelpCentersService]
})
export class HelpCentersModule {}
