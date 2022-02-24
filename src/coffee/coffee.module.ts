import { YahaController } from './../yaha/yaha.controller';
import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';

@Module({
  controllers: [CoffeeController, YahaController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
