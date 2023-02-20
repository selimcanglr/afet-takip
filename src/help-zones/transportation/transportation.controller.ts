import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransportationService } from './transportation.service';
import { CreateTransportationDto } from './dto/create-transportation.dto';
import { UpdateTransportationDto } from './dto/update-transportation.dto';

@Controller('transportation')
export class TransportationController {
  constructor(private readonly transportationService: TransportationService) {}

  @Post()
  create(@Body() createTransportationDto: CreateTransportationDto) {
    return this.transportationService.create(createTransportationDto);
  }

  @Get()
  findAll() {
    return this.transportationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transportationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransportationDto: UpdateTransportationDto) {
    return this.transportationService.update(+id, updateTransportationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transportationService.remove(+id);
  }
}
