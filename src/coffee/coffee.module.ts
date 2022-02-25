import { YahaController } from './../yaha/yaha.controller';
import { Module } from '@nestjs/common';
import { CoffeeController } from './coffee.controller';
import { CoffeeService } from './coffee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffeeController, YahaController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
