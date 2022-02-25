import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  // @Get()
  // finAll(@Param() body) {
  //   return this.coffeeService.finAll();
  // }

  // @Get(':id')
  // finOne(@Param() params) {
  //   return `this action return #${params.id} coffee`;
  // }

  /**
   * 动态参数
   * @param id
   * @returns
   */
  @Get(':id')
  finOne(@Param('id') id: number) {
    console.log(typeof id);

    return this.coffeeService.finOne('' + id);
  }

  // @Post()
  // create(@Body('name') name: string) {
  //   return name;
  // }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }

  // @Get()
  // findPageAll(@Query() pagination) {
  //   const { limit, offset } = pagination;
  //   return `this action returns all coffee. Limit: ${limit}, Offset: ${offset}`;
  // }
}
