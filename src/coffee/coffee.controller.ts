import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}
  @Get()
  finAll(@Param() body) {
    return this.coffeeService.finAll();
  }

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
  finOne(@Param('id') id: string) {
    return this.coffeeService.finOne(id);
  }

  // @Post()
  // create(@Body('name') name: string) {
  //   return name;
  // }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.coffeeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeeService.update(id, body);
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
