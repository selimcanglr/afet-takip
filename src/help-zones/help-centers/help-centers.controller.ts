import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateHelpCenterDto } from './dto/create-help-center.dto';
import { UpdateHelpCenterDto } from './dto/update-help-center.dto';
import { HelpCentersService } from './help-centers.service';

@Controller('help-centers')
export class HelpCentersController {
  constructor(private readonly helpCentersService: HelpCentersService) {}

  @Get('example')
  getSomething() {
    throw new BadRequestException('What a bad request');
  }

  @Post()
  create(@Body() createHelpCenterDto: CreateHelpCenterDto) {
    return this.helpCentersService.create(createHelpCenterDto);
  }

  @Get()
  findAll() {
    return this.helpCentersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpCentersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateHelpCenterDto: UpdateHelpCenterDto,
  ) {
    return this.helpCentersService.update(+id, updateHelpCenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpCentersService.remove(+id);
  }
}
