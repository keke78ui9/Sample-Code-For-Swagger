import { Injectable } from '@nestjs/common';
import { CreateSampleModel } from './app.createModel';

@Injectable()
export class AppService {
  deleteSample(id: Number): string {
    throw new Error('Method not implemented.');
  }
  updateSample(id: Number, updateModel: any): string {
    throw new Error('Method not implemented.');
  }
  addSample(model: CreateSampleModel): CreateSampleModel {
    return model;
  }
  getSampleById(id: Number): string {
    throw new Error('Method not implemented.');
  }
  getAllSamples(): string {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
