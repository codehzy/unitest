import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CoffeeModule } from './coffee/coffee.module';
import { CatControllerController } from './cat-controller/cat-controller.controller';
@Module({
  imports: [CoffeeModule],
  controllers: [AppController, CatControllerController],
  providers: [AppService],
})
export class AppModule {}
