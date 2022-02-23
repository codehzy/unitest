import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YahaController } from './yaha/yaha.controller';

@Module({
  imports: [],
  controllers: [AppController, YahaController],
  providers: [AppService],
})
export class AppModule {}
