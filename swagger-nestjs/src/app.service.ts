import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  deleteSample(id: Number): string {
    throw new Error('Method not implemented.');
  }
  updateSample(id: Number, updateModel: any): string {
    throw new Error('Method not implemented.');
  }
  addSample(model: any): string {
    throw new Error('Method not implemented.');
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
