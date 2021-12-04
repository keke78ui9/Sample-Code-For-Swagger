import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import { CreateSampleModel } from './app.createModel';

@ApiTags('MyBlog')
@Controller('api/v1/sample')
export class SampleController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'show all sample data'})  
  @ApiResponse({ status: 500, description: 'exception'})  
  getAllSample(): string {
    return this.appService.getAllSamples();
  }

  @Get('/sample/:id')
  getSample(@Param('id') id: Number): string {
    return this.appService.getSampleById(id);
  }

  @Post('/sample')
  addSample(@Body() createModel: CreateSampleModel): CreateSampleModel {
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
function ApiUseTags(arg0: string) {
  throw new Error('Function not implemented.');
}

