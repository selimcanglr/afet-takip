import { PartialType } from '@nestjs/mapped-types';
import { CreateTransportationDto } from './create-transportation.dto';

export class UpdateTransportationDto extends PartialType(CreateTransportationDto) {}
