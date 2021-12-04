import { Module } from '@nestjs/common';
import { SampleController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [AppService],
})
export class AppModule {}
