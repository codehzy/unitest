import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'hzy name is hzy',
      brand: 'buddy brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  finAll() {
    return this.coffees;
  }

  finOne(id: string) {
    throw `A random error`;
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      return new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.finOne(id);
    if (existingCoffee) {
      // 更新操作
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
