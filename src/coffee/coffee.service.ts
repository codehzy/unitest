import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  // 数据库获得实体
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeesRepository: Repository<Coffee>,
  ) {}

  finAll() {
    return this.coffeesRepository.find();
  }

  async finOne(id: string) {
    const coffee = await this.coffeesRepository.findOne(id);
    if (!coffee) {
      return new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeesRepository.create(createCoffeeDto);
    return this.coffeesRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeesRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeesRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = (await this.finOne(id)) as Coffee;
    return this.coffeesRepository.remove(coffee);
  }
}
