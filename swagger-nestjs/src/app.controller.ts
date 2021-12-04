import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiTags} from '@nestjs/swagger';

@Controller('api/v1/sample')
export class SampleController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllSample(): string {
    return this.appService.getAllSamples();
  }

  @Get('/sample/:id')
  getSample(@Param('id') id: Number): string {
    return this.appService.getSampleById(id);
  }

  @Post('/sample')
  addSample(@Body() createModel: any): string {
    return this.appService.addSample(createModel);
  }

  @Put('/sample/:id')
  updateSample(@Param('id') id: Number, @Body() updateModel: any): string {
    return this.appService.updateSample(id, updateModel);
  }

  @Delete('/sample/:id')
  deleteSample(@Param('id') id: Number): string {
    return this.appService.deleteSample(id);
  }
}
