import { Module } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { TransportationController } from './transportation.controller';

@Module({
  controllers: [TransportationController],
  providers: [TransportationService]
})
export class TransportationModule {}
